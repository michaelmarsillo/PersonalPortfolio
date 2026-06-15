import { useEffect, useId, useRef, useState } from 'react';
import Vara from 'vara';

const FULL_NAME = 'michael marsillo';
const FONT_URL = '/fonts/SatisfySL.json';

function usePrefersReducedMotion() {
  const [prefersReducedMotion] = useState(() => (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ));

  return prefersReducedMotion;
}

function signatureFontSize() {
  if (typeof window === 'undefined') return 21;
  if (window.innerWidth < 640) return 15;
  return Math.round(Math.min(21, Math.max(18, window.innerWidth * 0.026)));
}

function signatureViewportKey() {
  if (typeof window === 'undefined') return 'desktop';
  if (window.innerWidth < 640) return 'mobile';
  return `desktop-${Math.round(window.innerWidth / 48)}`;
}

function useSignatureViewportKey() {
  const [viewportKey, setViewportKey] = useState(signatureViewportKey);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    let timeoutId;
    const handleResize = () => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setViewportKey(signatureViewportKey());
      }, 120);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewportKey;
}

export default function SignatureName({ animate = false, className = '', replayKey }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const viewportKey = useSignatureViewportKey();
  const animatedReplayKey = useRef();
  const reactId = useId();
  const containerId = `vara-signature-${reactId.replace(/:/g, '')}`;

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const el = document.getElementById(containerId);
    if (!el) return undefined;

    el.replaceChildren();

    const shouldAnimate = animate && animatedReplayKey.current !== replayKey;
    const signature = new Vara(`#${containerId}`, FONT_URL, [
      {
        text: FULL_NAME,
        fontSize: signatureFontSize(),
        strokeWidth: 1.15,
        color: '#292524',
        duration: shouldAnimate ? 2200 : 1,
        textAlign: 'left',
        breakWord: false,
        width: 300,
        autoAnimation: shouldAnimate,
      },
    ]);

    if (shouldAnimate) {
      animatedReplayKey.current = replayKey;
    } else {
      signature.ready(() => {
        el.querySelectorAll('path').forEach((path) => {
          path.style.opacity = 1;
          path.style.strokeDashoffset = 0;
        });
      });
    }

    return () => {
      el.replaceChildren();
    };
  }, [animate, containerId, prefersReducedMotion, replayKey, viewportKey]);

  if (prefersReducedMotion) {
    return (
      <span className={`${className} signature-name-static`}>
        {FULL_NAME}
      </span>
    );
  }

  return (
    <span className={`${className} signature-name`}>
      <span className="sr-only">{FULL_NAME}</span>
      <span id={containerId} className="signature-name-canvas" aria-hidden="true" />
    </span>
  );
}
