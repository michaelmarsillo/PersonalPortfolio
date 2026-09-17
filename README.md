# Michael Marsillo - Portfolio

This portfolio highlights my skills, projects, and more about me.

## Development

Built with React, React Router, Vite, and Tailwind CSS. Use Node.js 22.12+ (22.x) or an active LTS release such as Node.js 24.

```sh
npm ci
npm start
```

The development server runs at http://localhost:3000. `npm run dev` is an alias for `npm start`.

## Build and verification

```sh
npm run build
npm run preview
```

Production files go to `build/`. The Vercel configuration sets the build command, output folder, and fallback for React Router deep links.

Browser tests cover desktop and mobile navigation, direct page loads, theme persistence, blog posts and the image lightbox, project assets, the resume, and the signature. Install the test browser once:

```sh
npx playwright install chromium
npm test
```

`npm test` builds the site and runs the browser tests against that production build. To use an installed Chrome or Edge instead, set `PLAYWRIGHT_CHANNEL` to `chrome` or `msedge`. On PowerShell:

```powershell
$env:PLAYWRIGHT_CHANNEL = 'msedge'
npm test
```

Use `npm outdated` and `npm audit` to review dependency maintenance. Tailwind intentionally stays on the non-deprecated v3 release line to preserve existing styling; upgrading to v4 is a separate migration. The unused Create React App test and web-vitals scaffolding has been removed.

## 📜 License

MIT License © 2025 [License](LICENSE).

## 📬 Get in Touch

Reach out to me:
- LinkedIn: [michaelmarsillo](https://www.linkedin.com/in/michaelmarsillo/)
- Email: mars7769@mylaurier.ca
