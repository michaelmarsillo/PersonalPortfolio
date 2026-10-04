// Curated from Michael's saved PDFs. Exact pages and crop provenance are in
// docs/habbo-white-house-sources.md; dates belong to the documents, not this page.
const clipping = (filename, width, height, alt, caption) => ({
  src: `/images/archive/misc/habbo/white-house/${filename}.png`, width, height, alt, caption,
});

export const whiteHouseArchive = {
  title: "from the White House archives",
  introduction: "A few pieces from the old SS Times newsletters and Secret Service handbook. The welcome lists, the introductions, even the weekly training requirements. People really did take this seriously. (had to scavenge through my old google drive to find these).",
  entries: [
    {
      id: "may-welcome",
      title: "michael-9 in the welcome list",
      date: "2017-05-14",
      dateLabel: "May 14, 2017",
      source: "SS Times · page 7",
      quote: "We welcome the following the members this week:",
      account: "michael-9",
      note: "Listed among the members welcomed into the Secret Service that week.",
      image: clipping("ss-times-2017-05-14-welcome", 1300, 570, "The May 14, 2017 SS Times welcome list, including michael-9 and my avatar"),
    },
    {
      id: "mike-profile",
      title: "My Little Introduction",
      date: "2017-08-06",
      dateLabel: "August 6th, 2017",
      source: "SS Times · page 9 · New Nines",
      note: "Answering a question about why I joined SS and a few things about me.",
      image: clipping("ss-times-2017-08-06-mike-profile-edited", 1794, 877, "My profile in the August 6, 2017 New Nines feature, with my answers and waving Habbo avatar", "I don't know why I lied about joining the Senate in 2014, but maybe I was trying to fit in, or maybe I was trying to seem older than I really was at the time. LOL."),
    },
    {
      id: "handbook",
      title: "yes, there were actual weekly tasks",
      dateLabel: "Undated handbook",
      source: "Department of Education · Secret Service Handbook · page 2",
      quote: "As a SS Trainer [9iC] your job is to at least train eight times in a week. You will need to have four sessions by Wednesday at 12am GMT.",
      note: "This handbook also lists mandatory Sunday meetings in the Situation Room. These were branch requirements, rather than a record of my own training totals.",
      image: clipping("secret-service-handbook-tasks-meetings", 1124, 417, "The Secret Service handbook's Tasks and Meetings sections, specifying eight training sessions per week and mandatory Sunday meetings", "If you asked either of my parents about these Sunday meetings, they'd confirm that I never missed a single one. Not even for dinner with my family. I'd have to delay dinner, and if they wanted me to do chores around the house, I'd tell them I couldn't during that time because I had to attend my meeting on Habbo. I took it that seriously."),
    },
  ],
};
