// This is Michael's memory page, not a game guide. Keep his writing and
// screenshots together, and preserve the original writing date in miscData.
// Add/reorder sections here; image files live in public/images/archive/misc/habbo.
const image = (filename, width, height, alt, caption, variant) => ({
  src: `/images/archive/misc/habbo/${filename}.png`, width, height, alt, caption, variant,
});

export const habboStory = {
  introduction: [
    `It's weird getting emotional over a computer game, but Habbo really does cut deep. I'm 21 as I'm writing this, and there aren't many things in my life that have been around for more than a decade. This is one of them. I've spent thousands of hours in this little pixel world, and just logging back in brings so much of it back.`,
    `If you've never played, Habbo is basically a virtual hotel where you make a character, build rooms, collect furniture, and talk to other people. The furniture is called "furni," and the rooms can become pretty much whatever people want them to be. Cafés, offices, agencies, places to hang out. Most of the game, at least for me, was just role-playing, making friends, and spending way too much time on my computer.`,
  ],
  context: {
    text: `Habbo dates back to 2000. It was already a whole world long before I found it. In August 2010, Guinness World Records recorded it as the largest virtual community for teens, with over 15 million users. So even though I've been around for over a decade, I was still late to the game, lol.`,
    source: {
      label: "Guinness World Records",
      url: "https://www.guinnessworldrecords.com/world-records/largest-virtual-community-for-teens",
    },
  },
  sections: [
    {
      id: "accounts",
      title: "the accounts are still there",
      paragraphs: [
        `My main account, michael-9, was created on January 21, 2016. I was ten years old. Don't tell the makers of Habbo that, lol. Three days later, on January 24, I made michael_hockey. I genuinely don't know what I was doing making all these accounts back then. There was also an earlier one called Annonymas, created on November 21, 2015. Yes, that's how I spelt it, lol. I worked at the White House on that account too, but I was just a cadet.`,
        `In these screenshots, michael-9 has 10,520 activity points, while michael_hockey has 1,132. That's the noob account. Seeing "Last login: 10 years ago" on that old profile is such a strange feeling. It's almost eleven years since I made these accounts, and somehow they're still sitting right where I left them.`,
      ],
      layout: "profiles",
      images: [
        image("userprofile", 775, 802, "My michael-9 Habbo profile, created January 21, 2016", "michael-9. january 21, 2016."),
        image("habbo7", 771, 795, "My michael_hockey Habbo profile, created January 24, 2016, showing its last login ten years ago", "michael_hockey. three days later."),
        image("habbo9", 774, 796, "My Annonymas Habbo profile, created November 21, 2015, with the White House motto [WH] SS Cadet II [DIS]", "Annonymas. november 21, 2015. just a White House cadet."),
      ],
    },
    {
      id: "agencies",
      title: "a corporate job at twelve",
      paragraphs: [
        `One of the funniest parts of Habbo was the agencies. You could work at the White House, the Habbo Defence Agency, or the Habbo Intelligence Agency. You'd join an organisation, work your way up, get paid in credits, and spend your day talking to people. Obviously it was all role-playing, but when you're eleven or twelve, you're taking that job seriously.`,
        `The Habbo White House was the main agency I worked at, and I was in the Secret Service. I had weekly tasks, trained new members, wrote papers, attended meetings, and gave presentations. Looking back, I was basically learning how to work a corporate job at twelve years old. This was one of my old offices.`,
        `I met so many people from the United Kingdom and across Europe. Hearing about how they lived exposed me to different parts of the world from such a young age. It taught me a lot, and it's honestly part of the reason I fell in love with computers. There was this entire world of people I could get to know just by sitting down at my desk.`,
      ],
      images: [
        image("habbo1", 1942, 1213, "My old Habbo White House office with a desk, trees, and a waterfall", "my old office. very serious business."),
      ],
    },
    {
      id: "dog",
      title: "my dog is still here too",
      paragraphs: [
        `I went back into a room on michael_hockey and found my dog, who is also called michael for some reason. Don't ask why there's a fireplace in the middle of the room either. His age says 3,905 days in the screenshot, and his happiness was pretty low, so I went and scratched him.`,
        `It's such a small thing, but finding an old virtual pet still sitting in a room you barely remember making is weirdly emotional. Over ten years have gone by, and there's michael, waiting beside the fireplace.`,
      ],
      layout: "pet",
      images: [
        image("habbo5", 1300, 949, "Scratching my dog michael in an old room on my michael_hockey account", "a fireplace in the middle of the room. of course."),
        image("habbo6", 277, 469, "My Habbo dog michael's pet profile showing an age of 3,905 days", "3,905 days old.", "pet"),
      ],
    },
    {
      id: "inventory",
      title: "the things i never got rid of",
      paragraphs: [
        `There's a whole economy inside Habbo. Players buy and sell furniture and clothing through the marketplace using credits, which are the in-game currency. Some of the things I bought years ago for what I remember being maybe five dollars are now listed for hundreds of credits. It's pretty wild coming back and seeing that.`,
        `The Hen Hat I'm wearing has a listing for 550 credits in this screenshot. Then there's the Cow Beanie in my inventory, listed at 997 credits. I think I bought that one around 2017 or 2018. They're little pixel accessories I wanted as a kid, and now I'm opening the shop like, wait, what?`,
      ],
      images: [
        image("habbo4", 1179, 948, "The Hen Hat marketplace listing at 550 credits, beside my Habbo wearing it", "the hen hat. 550 credits in this screenshot."),
        image("habbo8", 1702, 948, "The Cow Beanie in my Habbo inventory beside a marketplace listing for 997 credits", "the cow beanie. 997 credits in this screenshot."),
      ],
    },
    {
      id: "room",
      title: "my own little corner of the hotel",
      paragraphs: [
        `Making your own rooms was a huge part of it too. The blue room at the bottom of this page is one of mine. The Venetian dividers, the café, the Azure fans up top, the ice cream maker, all these little things you collect and put together. Even the fans are expensive on the marketplace. That colourful room light lets you change the lighting, which is where this blue background comes from. I wanted this page to feel like you were stepping into that room.`,
        `You can also see the Habbo Club box sitting on the ground. Habbo Club, or HC, is the membership that gives you more clothing styles, hairstyles, room layouts, and other extras. Back then, if you wanted your character to look cool, you had to have HC. If you wanted to mog, you were buying Habbo Club, lol. So you best believe I was asking my dad to pay for it.`,
      ],
      sources: [{ label: "Habbo Club", url: "https://help.habbo.com/hc/en-us/articles/360011620299-What-is-Habbo-Club" }],
      images: [
        image("habbo3", 1311, 799, "My Habbo avatar waving in my blue café room beside the Habbo Club box", "just me waving. still wearing the hen hat."),
      ],
    },
    {
      id: "friends",
      title: "last seen eight years ago",
      paragraphs: [
        `I would literally sit at my computer for ten hours a day, working, talking to people, and just living in this game. The last time I played consistently was probably during COVID, around 2020 and 2021. Back in the day, it ran in my browser with Adobe Flash. Flash was retired at the end of 2020, and Habbo later made that familiar client available as a downloadable app. It's strange how even the way you get into the game has changed.`,
        `I don't really play anymore, but I still log in here and there. I'll go through old friends' profiles and see things like "last seen eight years ago." I don't talk to any of them now. I wonder what they're doing, if they've grown up, if they have kids. People I spent so much time with are just usernames on a screen now, and I might never hear from them again.`,
        `That's one of the things that makes the internet such a cool invention to me. You can build real friendships and have a whole part of your childhood in a place that only exists on your computer. Then years go by, you log back in, and the rooms are still there. The furniture is still there. Your little character is still there. It's just the people who aren't.`,
        `I don't really know how else to explain it. Habbo is such an important piece of my childhood, and I'm so grateful for all the time I spent here. I wanted to keep a little bit of it on my own site.`,
      ],
      sources: [{ label: "The Flash client and the move to a downloadable app", url: "https://help.habbo.com/hc/en-us/articles/360021200079-How-to-use-the-downloadable-AIR-client" }],
      images: [
        image("habbobackdrop", 420, 500, "A Habbo meme saying I had to grind for this view", "i had to grind for this view, lol.", "meme"),
      ],
    },
  ],
  room: image("habbo2", 1911, 1089, "My blue Habbo room with Venetian buildings, Azure fans, a café, and my avatar sitting on a chair", "my little corner of the hotel."),
};
