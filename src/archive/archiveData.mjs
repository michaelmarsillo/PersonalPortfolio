import { fragranceItems } from "./fragranceData.mjs";
import { objectItems } from "./objectsData.mjs";
import { placeItems } from "./placesData.mjs";
import { miscItems } from "./miscData.mjs";

export const ARCHIVE_PLACEHOLDER_IMAGE = "/images/archive/placeholder.svg";

export const archiveOverview = {
  title: "Archive",
  description: "a space for the things I collect, study, revisit, and find meaningful.",
  lastModified: "2026-09-21",
};

// Add entries to a category's items array. Give every entry a unique, stable id.
// Images live in public/images/archive/<category>/ and use /images/archive/... URLs.
// Replace the sample fields with your own content. No page layout edits needed.
// creator, year, sourceUrl, metadata, image, imageAlt, images, imageFit, and thoughts are optional.
// Use images: [{ src, alt }] when an entry needs more than one image.
// The title, creator, year, and metadata appear above the image. The toggle is
// reserved for your personal thoughts.
// imageFit accepts "contain" (default, preserves the whole image) or "cover".
// Separate thoughts paragraphs with a blank line. Update lastModified when editing a category.
// Set thoughtsWrittenOn once (YYYY-MM-DD); preserve it when updating the entry.
// Only add/update thoughtsEditedOn when revising the actual personal writing.
export const archiveCategories = [
  {
    slug: "art",
    title: "Art",
    description: "my favourite art pieces.",
    showDescription: true,
    lastModified: "2026-10-03",
    items: [
      {
        id: "stanczyk",
        thoughtsWrittenOn: "2026-09-23",
        title: "Stańczyk",
        creator: "Jan Matejko",
        year: "1862",
        sourceUrl: "https://en.wikipedia.org/wiki/Sta%C5%84czyk_(painting)",
        image: "/images/archive/art/stanczyk/stanczyk.jpg",
        imageAlt: "Stańczyk by Jan Matejko",
        thoughts: `The idea of the jester is quite provocative, especially in this context. We don’t really know what Jan Matejko was getting at here.

The full title of the painting is “Stańczyk during a ball at the court of Queen Bona in the face of the loss of Smolensk.” People speculate that the jester knew about the fall of Smolensk and seemed to care deeply, while the royal family partied in the background, seemingly unconcerned.

However, the note on the table is dated 1533, and the fall of Smolensk occurred in 1514. Furthermore, Queen Bona did not become queen until 1518, so the timeline does not quite add up. Why would the jester be dreading the fall of Smolensk in 1533 if it happened nineteen years earlier? Even more confusing is that this celebration of the queen would have occurred in 1518, not in 1533.

The letter on the table is frustrating when trying to make sense of the painting. Anyway, just some food for thought.`,
      },
      {
        id: "the-fallen-angel",
        thoughtsWrittenOn: "2026-09-25",
        title: "The Fallen Angel",
        creator: "Alexandre Cabanel",
        year: "1847",
        sourceUrl: "https://en.wikipedia.org/wiki/The_Fallen_Angel_(painting)",
        images: [
          {
            src: "/images/archive/art/fallen-angel/thefallenangel.jpg",
            alt: "The Fallen Angel by Alexandre Cabanel",
          },
          {
            src: "/images/archive/art/fallen-angel/thefallenangel2.jpg",
            alt: "The Fallen Angel by Alexandre Cabanel",
          },
        ],
        thoughts: `There is something so thought-provoking about those eyes. It is almost as if you could stare directly at them for hours and feel countless emotions.

Unfortunately, though it is one of my favourite art pieces, Alexandre Cabanel received a lot of backlash for this painting at the time due to its depiction of Satan and his “Greek god”-like physique. Given the fact that he was only 24 when he created this painting, it was thought that something of this nature was better suited to a “more experienced artist.” Such a shame in hindsight.

It makes me question how he was able to draw that sort of emotion with his own two hands. But it also leaves me frustrated, questioning what emotion he is trying to depict here: rage, revenge, betrayal, failure, envy, anger?`,
      },
      {
        id: "laughing-fool",
        thoughtsWrittenOn: "2026-09-25",
        title: "Laughing Fool",
        creator: "Attributed to Jacob Cornelisz van Oostsanen",
        year: "c. 1500",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Laughing_Fool.jpg",
        image: "/images/archive/art/laughing-fool/thelaughingfool.jpg",
        imageAlt: "Laughing Fool by Jacob Cornelisz van Oostsanen",
        thoughts: `This piece is quite interesting. We don’t actually know who painted it, but it is mostly speculated and highly attributed to Jacob Cornelisz van Oostsanen, who lived in the Netherlands from the late 1400s into the 1500s. The painting dates back to around 1500.

The reason it sparks my interest so much is that, at first glance, we seem to think it is just a jester laughing. Upon further examination, we realize he is laughing at us, not with us. His eyes are not portraying genuine laughter, but more of an insulting laughter directed at the viewer. He carries a marotte with a carved head that also seems to be looking at us, almost like it is amused for some odd reason.

You may also be questioning why he is sort of hiding behind his hand while looking through it at us. There was a sixteenth-century Dutch phrase, “to look through one’s fingers,” which implied looking the other way or turning a blind eye to immoral acts or sins.

Another thought-provoking aspect of this painting is that, in the jester’s other hand, he is flaunting a pair of spectacles, except they have no lenses. This connects to another sixteenth-century notion that glasses would not provide clarity or sight to those who were blind to the truth. In other words, he is mocking people who act as though they have knowledge and wisdom when, in reality, they really don’t.

Such an interesting piece of work, even though it seems like the jester is taunting us for being ignorant posers and not seeing the truth of what is really happening around us.`,
      },
      {
        id: "soir-bleu",
        thoughtsWrittenOn: "2026-09-25",
        title: "Soir Bleu",
        creator: "Edward Hopper",
        year: "1914",
        sourceUrl: "https://fr.wikipedia.org/wiki/Soir_bleu",
        image: "/images/archive/art/soirbleu/soirbleu.jpg",
        imageAlt: "Soir Bleu by Edward Hopper",
        thoughts: `Soir Bleu shows a group of people sitting together at what looks like an outdoor café or terrace. The scene feels social on the surface, but the longer I look at it, the more disconnected it becomes. Everyone is physically close, but emotionally distant. No one really seems to be speaking to each other, and each figure almost feels trapped in their own world.

The most striking figure is the clown seated near the center. He stands out immediately because of the white costume and makeup, but he does not feel comedic at all. He feels tired, isolated, and almost painfully aware of himself.

This painting caught my attention right away, and I think part of that is because I’ve noticed a weird pattern in the art I’m drawn to. A few of my favourite pieces have clowns, jesters, or performer-like figures in them. At first that felt random, but I think there’s something deeper there.

The clown in Soir Bleu does not feel like someone who is there to entertain. He feels more like someone who has been placed in the role of the outsider. Everyone else is playing their part in the scene, but he is the one who looks the most exposed. To me, that makes the painting feel less like it is about a clown and more like it is about the feeling of being misunderstood.

I think that is what makes the piece so interesting to me. Sometimes when you have your own goals, your own ideas, or you see life differently than the people around you, it can almost feel like you are the clown in the room. Not because you actually are, but because other people do not know what to do with someone who is not moving the same way they are. You become the strange one for being yourself.

There is also a more straightforward loneliness in the painting. Everyone is together, but nobody really feels connected. It reminds me of how people can be surrounded by others and still feel completely alone. Public settings can sometimes make that feeling even stronger because you can see everyone around you, but still feel like no one is really listening, noticing, or understanding.

That is why I like this painting. I do not think it gives you one clean answer. It feels open-ended. Maybe the clown is Hopper. Maybe the clown is the viewer. Maybe the clown is just the person in the room who sees the scene for what it really is. Either way, the painting says something that would be hard to explain directly, which is probably the whole point.`,
      },
      {
        id: "daniel-in-the-lions-den",
        thoughtsWrittenOn: "2026-09-25",
        title: "Daniel in the Lions’ Den",
        creator: "Briton Rivière",
        year: "1872",
        sourceUrl: "https://en.wikipedia.org/wiki/Briton_Rivi%C3%A8re",
        image: "/images/archive/art/lionsden/danielinthelionsden.jpg",
        imageAlt: "Daniel in the Lions’ Den by Briton Rivière",
        thoughts: `Daniel in the Lions’ Den is based on the Old Testament story from the Book of Daniel, where Daniel is thrown into a den of lions after refusing to abandon his faith. Instead of showing the scene as violent or chaotic, Briton Rivière makes it feel strangely quiet. Daniel stands barefoot with his hands bound behind his back, facing away from the viewer. His head is slightly bowed, and he seems calm despite being surrounded by lions.

The animals are close enough to kill him, and the bones scattered across the floor remind us that they are still dangerous, but the painting does not show them as simple monsters. Each lion seems to have its own expression: curiosity, confusion, tension, even something close to sadness. The light coming into the den makes Daniel stand out against the darker background. It almost feels like the real subject of the painting is not the lions themselves, but Daniel’s stillness in the middle of danger.

This painting hit me because I see it as more than just a biblical scene. To me, the den of lions can represent life itself. Life can be brutal, unfair, and overwhelming, and sometimes it really does feel like you are thrown into a pit of hungry lions. But what stands out is Daniel’s reaction. He is not fighting, panicking, or trying to control everything around him. He is calm. He is still. He is focused on the only thing he can actually control: himself.

His hands are tied, the lions are around him, and there are bones on the floor, but his inner state seems untouched. That is what makes the painting feel almost Stoic to me. Daniel cannot control the lions. He cannot control the people who threw him there. He cannot control the danger around him. But he can control his composure, his faith, and his response.

The lions are also interesting because they do not all look the same emotionally. Some look aggressive, some curious, some confused, and some almost hesitant. I think that can be read as a metaphor for the people and situations you deal with in life. Not everything around you is going to be kind, fair, or easy to understand. Some people will be angry, arrogant, miserable, or ungrateful, but that does not mean you have to become like them.

That reminds me of the idea from Marcus Aurelius, where he talks about waking up prepared to deal with difficult people while still choosing patience and self-control. He states, “When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly.” Meditations (2.1).

Daniel feels like the visual version of that lesson. He is surrounded by chaos, but he does not become chaotic. I think that is why this painting is so powerful to me. It shows strength without movement. Daniel does not need to look heroic in the traditional sense. His strength is in his calmness. He is completely surrounded, but somehow he still feels free.`,
      },
    ],
  },
  {
    slug: "books",
    title: "Books",
    description: "books i’ve read.",
    showDescription: true,
    lastModified: "2026-10-03",
    items: [
      {
        id: "deep-work",
        thoughtsWrittenOn: "2026-10-01",
        title: "Deep Work",
        creator: "Cal Newport",
        year: "January 5, 2016",
        sourceUrl: "https://www.hachettebookgroup.com/titles/cal-newport/deep-work/9781455586691/",
        image: "/images/archive/books/deep-work/deep-work-cal-newport.jpg",
        imageAlt: "Deep Work by Cal Newport",
        thoughts: `Honestly, a really great read. It took me a while to get through this book, and I would typically read it for about 15 minutes before bed every night.

I think the ideas Cal Newport talks about are very important. I like how he brings up influential people like Bill Gates and the extreme periods of focused work they would go into.

The only critique I have is that the book drags on a little bit. I think the ideas he argues for could have been more condensed and gotten across in fewer pages. It could have been shorter, but still a good book all around.`,
      },
    ],
  },
  {
    slug: "fragrance",
    title: "Fragrance",
    description: "fragrances in my collection.",
    showDescription: true,
    lastModified: "2026-10-03",
    items: fragranceItems,
  },
  {
    slug: "objects",
    title: "Objects",
    description: "objects i find beautiful, useful, or meaningful.",
    showDescription: true,
    lastModified: "2026-10-03",
    items: objectItems,
  },
  {
    slug: "places",
    title: "Places",
    description: "places that mean something to me.",
    showDescription: true,
    lastModified: "2026-10-03",
    items: placeItems,
  },
  {
    slug: "misc",
    title: "Misc",
    description: "hobbies, memories, and little things.",
    showDescription: true,
    lastModified: "2026-10-04",
    items: miscItems,
  },
];
