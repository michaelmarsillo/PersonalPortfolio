// Array order controls the Misc directory. Keep ids stable after publishing.
// Habbo has its own memory page; video entries share a small player.
// Leave video null until its real file has been imported and verified.
// Example: video: { src: "/videos/archive/misc/harmonica/piano-man.mp4" }
// Optional video fields: width, height, poster, captions (a WebVTT path), captionsLanguage,
// and captionsLabel. Keep originals outside public; publish web-ready MP4s.
// Thoughts stay empty until Michael supplies them. Set thoughtsWrittenOn once
// (YYYY-MM-DD), and thoughtsEditedOn only when the actual writing is revised.
export const miscItems = [
  {
    id: "habbo",
    title: "Habbo",
    description: "a childhood game that holds a lot of memories.",
    kind: "habbo",
    image: "/images/archive/misc/habbo/habbo2.png",
    imageAlt: "My blue Habbo room with Venetian buildings, Azure fans, and my avatar",
    lastModified: "2026-10-04",
    thoughtsWrittenOn: "2026-10-04",
    thoughts: "",
  },
  {
    id: "harmonica",
    title: "Harmonica",
    description: "playing the harmonica part from Piano Man by Billy Joel.",
    kind: "video",
    video: {
      src: "/videos/archive/misc/harmonica/piano-man.mp4",
      poster: "/images/archive/misc/harmonica/piano-man.jpg",
      width: 656,
      height: 1232,
    },
    lastModified: "2026-10-04",
    thoughtsWrittenOn: "2026-10-04",
    thoughts: `I wish I had some crazy funny story for this one, but I'm pretty sure my dad just came back from a business trip one year and threw a harmonica on my desk when I was about 13. One day I decided to pick it up and learn how to play it, so I put on a YouTube tutorial for Piano Man by Billy Joel. After about an hour of practising, I managed to put together the video you see here.

Just a funny little skill I picked up because I was bored one day. Enjoy the harmonica solo from Billy Joel's Piano Man. Hopefully it doesn't make your ears bleed, lol.`,
  },
  {
    id: "2x2",
    title: "2×2 Rubik’s Cube",
    description: "solving my little 2×2 rubik’s cube.",
    kind: "video",
    video: {
      src: "/videos/archive/misc/2x2/2x2-solve.mp4",
      poster: "/images/archive/misc/2x2/2x2-solve.jpg",
      width: 1080,
      height: 1920,
    },
    lastModified: "2026-10-04",
    thoughtsWrittenOn: "2026-10-04",
    thoughts: `Funny story, actually. The first time I learned to solve a 2×2 Rubik's Cube was on an 18-hour bus ride from Hamilton to PEI for a hockey tournament in 2016. One of the players on my team wrote down the algorithm in the notes app on my iPad mini, lol. That algorithm is forever ingrained in my head now. I know it like the back of my hand, and whenever I pick up a 2×2, I can solve it no matter how scrambled it is.

It's a pretty simple cube once you learn the algorithms, but it's so cool how your brain memorizes things like that. A phone number, a cube algorithm, things you don't even have to think about anymore. Active recall and hours of repetition really make it stick. I feel like someone could hand me a 2×2 on my deathbed and I'd probably still be able to solve it. That's how ingrained it gets.

Cubing was such a fun hobby when I was younger. I'd watch cubing videos online, keep up with the world records, and record my fastest solves. I'm 21 now and I've kind of outgrown that phase, but I still pick up a 2×2, a 3×3, or a Pyraminx now and then. It's a cool little skill that has stayed with me.`,
  },
];
