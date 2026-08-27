export const blogPosts = [
  {
    id: 4,
    title: "Building Audiofy: Bringing Back a Family Tradition with Code",
    date: "Jan 5, 2026",
    excerpt: "My family had this song quiz game we loved playing at the cottage. Then it got discontinued. So I built my own version...",
    content: `
**October 2025 - January 2026 | Waterloo, Ontario**

My family and I have this tradition. Whenever we get together at the cottage or during family gatherings, we'd play this song quiz game. It was simple - listen to a short clip, guess the artist, compete for bragging rights. It brought everyone together in a way that few things do.
Then one day, the app got discontinued. Just... gone. And with it, our family tradition.
I couldn't let that happen. So I decided to build it myself, not just recreate it, but make it better. Real-time multiplayer, multiple game modes, better song selection. That's how **[Audiofy](https://audiofy-m.vercel.app/)** was born.
![Me And My Sisters At The Cottage crop-picture](/images/meandsistersatcottage.jpg)

## The Concept
The idea is simple: listen to a 7-second song clip, identify the artist from 4 options, score points based on speed and accuracy. But underneath that simplicity, there's a lot of complexity, especially when you want multiple people playing the same game in real-time.
![Audiofy Homepage](/images/audiofyhome.png)
### Game Modes
- **Solo Play:** Classic 7-round quiz, perfect for practicing
- **Multiplayer:** Real-time competitive mode with friends (up to 8 players)
- **Heardle:** Wordle-style guessing with limited attempts
- **Arcade:** Continuous gameplay with streak bonuses
![Audiofy Gamemodes](/images/audiofygamemodes.png)

## Challenge #1: The Spotify Problem
When I started building this, I naturally went with Spotify. It's the biggest music platform, has a solid API, and seemed like the obvious choice.
**The problem?** Spotify's preview URLs are incredibly unreliable.
I'd fetch a playlist, and maybe 40% of the songs had working 30-second previews. Some genres were worse, older music or less popular songs often had no previews at all. This created a terrible user experience where games would break mid-round because a song had no audio.
**The solution:** I switched to the **Apple Music API**.
The difference was night and day. Apple Music has way better preview coverage, nearly every song has a working 30-second clip. Plus, no complex OAuth flow required for just fetching preview URLs. The integration was simpler, and the experience became consistent.
> **Key Takeaway:** Sometimes the "obvious" choice isn't the best one. Real-world testing revealed the gap between what an API promises and what it delivers.

## Challenge #2: Real-Time Multiplayer with WebSockets
This was the hardest part of the project, and where I learned the most.
The challenge: multiple players need to see the exact same game state at the exact same time. When the host starts a round, everyone needs to hear the same song clip simultaneously, see the same timer countdown, and have their scores update in real-time.
### Why WebSockets?
Traditional HTTP requests are one-way, client asks, server responds, connection closes. That doesn't work for real-time games where the server needs to push updates to all clients simultaneously.
**WebSockets provide bidirectional, persistent connections.** The server can push updates to all connected clients instantly without them having to constantly poll for changes.
I used **Socket.IO** to handle this.
![Socket.IO Code crop-half](/images/websocketinit.png)
### The Synchronization Problem
Here's where it got tricky. At first, I let each client run its own seven-second timer, but even small differences caused players to drift into different phases after a few rounds.
**The solution:** Make the server the source of truth. Whenever it sends new round data, every client resets its timer, starts the audio, and follows the same server-controlled phase changes. This keeps everyone at the same point in the game.
![Synchronization Between Players (scores updating each round)](/images/audiofybetweenrounds.png)
### Room Management
Each room supports up to eight players, and the host decides when to start the game. Players can join as guests without an account, rooms remain active until everyone leaves, and if the host disconnects, another player automatically becomes the host.
![Audiofy Waiting Room](/images/audiofywaitingroom.png)
> **Key Takeaway:** Real-time multiplayer is hard. The server must be authoritative. Clients should never trust their own timers or state, stick to what the server says.

## What I Learned
Building Audiofy taught me more about real-time systems than any tutorial could. I learned that reliability matters more than a long feature list, especially after switching from Spotify to Apple Music, and that even something as simple as a timer becomes tricky when several players need to stay in sync. Socket.IO made the multiplayer possible, but I still had to think through reconnections, state recovery, and the small edge cases that can make or break the experience.

## The Joy of Building This ❤️
The best part? Bringing back that family tradition. We've already played Audiofy at a few gatherings, and seeing my family compete, laugh at wrong answers, and enjoy the game makes all the technical challenges worth it.
![Game Over Screen](/images/gameoverscreen.png)

But for now, I'm happy with what it is - a functional, fun game that brought back a family tradition and taught me a ton about real-time systems.
> **Try it out:** [audiofy](https://audiofy-m.vercel.app/)  
> **Source code:** [github.com/michaelmarsillo/Audiofy](https://github.com/michaelmarsillo/Audiofy)

If you're thinking about building something similar, do it. The technical challenges are worth it, and there's nothing quite like seeing people actually use something you built.
    `,
    slug: "building-audiofy",
    readTime: "6 min read"
  },

  {
    id: 3,
    title: "My First Co-op at Ricoh: 4 Months of Growth and Java",
    date: "Dec 20, 2025",
    excerpt: "Reflecting on my first co-op term as a software developer at Ricoh. Four months of learning Java, fixing bugs, and writing documentation.",
    content: `
**September - December 2025 | Waterloo, Ontario**

Christmas break just hit, and I'm sitting here reflecting on something pretty significant, I just wrapped up my first ever co-op term working as a software developer. The last 4 months have been filled with learning, growth, and honestly, a lot of moments where I realized how much I didn't know (but quickly learned).
The work term started back in the fall, and while everyone was returning from their summer and getting ready to go back to class, I was getting ready to start my first work term. This was an odd experience for me, especially since I was still living in Waterloo for the duration of my work term and got to see my roommates and friends come back from their summer, head to lectures, and complain about assignments while I was commuting to work.
![Me At The Ricoh Office crop-picture](/images/halloweeneventricoh.jpg)

## 1. The Commute & Finding Balance
The commute to work was not bad at all, about a ~20 minute bus ride down King St and back in the evening. I actually really enjoyed this time to switch modes. Work mode in the morning, gym mode in the evening. I was also able to listen to music or study some pharmacology flashcards (shoutout Anki) to and from work.
This experience made me realize something important about my priorities. I've been having second thoughts about working in Toronto for a future work term, especially since it would be over an hour commute each way. I have other things in my life that are super important to me (training, personal projects, content creation), and I wouldn't want my entire day to just be consumed by work and transit. I'm grateful that I got to stay in Waterloo for my first work term.
![King Street Bus 7 crop-half](/images/bus7.png)
![Tapping My WLU OneCard crop-half](/images/tappingonecard.png)
> If you want to see a sneak peek of what my typical day looked like: work, commute, gym, and everything in between, I made a [day in the life](https://www.tiktok.com/@michaelmarsillo/video/7586443814638783765) TikTok that captures it pretty well.

## 2. The Work: CloudStream
The actual work I was doing was quite interesting. I'm not really sure how much I'm able to say, but I was working on the **CloudStream team at [Ricoh Canada](https://www.ricoh.ca/)**, which is their cloud-based print management software.
Think of it this way: imagine a school or large office building with a bunch of printers that need to handle print requests from hundreds of clients. Traditionally, you'd need an on-premise server to handle all those requests. CloudStream uses... well, the cloud. It's a SaaS solution that manages everything remotely.
### My Responsibilities
Most of my work was on the CloudStream web interface, where I fixed bugs, made UI improvements, and implemented a few new features. I also updated database translations across English, French, Spanish, Italian, and other supported locales.
Tickets were assigned through **Jira**, and each change followed the same **Git** workflow: create a feature branch, implement and test the change, then open a pull request for review.
![Desktop Picture crop-half](/images/desktopshot.jpg)
![Me Working crop-half](/images/working.png)

## 3. The Tech Stack: Java, SmartGWT, and SQL
The backend used **Java with Spring Boot**, while the frontend was built with **SmartGWT**. I worked with **SQL Server through SSMS**, tracked tickets in **Jira**, and used **Git** for version control.
### The SmartGWT Experience
SmartGWT was easily the biggest adjustment. It lets you write frontend code in Java and then compiles it to JavaScript for the browser, which made debugging across those layers challenging at times.
Coming from modern web development, working with an older framework and limited online resources forced me to become more patient with unfamiliar code. It also gave me a much better appreciation for how much frameworks like React handle for you.

## 4. Going Beyond Code: Writing Documentation
One small issue I ran into was the lack of clear instructions for connecting a computer to an office printer with the **DM Agent Deployment Tool**. After working through the setup myself, I wrote a step-by-step guide with screenshots and notes on the errors I encountered.
Nobody assigned it to me, but I knew it would save the next person from repeating the same troubleshooting.
> **Key Takeaway:** Good documentation saves everyone time, especially when it covers the problems people actually run into.

## 5. What I Learned: Scale, Speed, and Confidence
Working on software used by large organizations changed how I thought about development. With personal projects, it was easy to focus on getting a feature working; at Ricoh, I had to think more carefully about testing, error handling, performance, and backward compatibility because clients relied on the product.
I also became much more comfortable with **Java and Spring Boot**. I had used Java in school (shoutout CP213 and CP317), but working in an established codebase helped enterprise patterns, RESTful APIs, and database connections finally click.
My personal projects helped me adapt faster than I expected. Building [CVLens](https://cvlens.vercel.app/), [Audiofy](https://audiofy-m.vercel.app/), [LuckyLease](https://luckylease.vercel.app/), and other projects from scratch had already taught me how to read unfamiliar code, debug problems, and know when to ask for help.

## 6. Wins I'm Proud Of 🏆
- **Shipped features** that made it to production and are being used by real customers
- **Improved UI responsiveness** on several key pages
- **Fixed translation bugs** that had been open for months
- **Wrote documentation** that the team actually uses
- **Built relationships** with senior developers who gave great mentorship

## Closing Thoughts
Four months ago, I was nervous about starting my first co-op. Now, I'm wrapping it up with more confidence, better technical skills, and a clearer picture of what I want from my career.
![Walking To The Office crop-half](/images/walking1.png)
![Walking To The Office 2 crop-half](/images/walking2.png)
I learned what I value in a work environment: good mentorship, meaningful projects, work-life balance, and the opportunity to contribute beyond just my assigned tickets.
> On to the next chapter.

**Thanks to the CloudStream team at Ricoh for an incredible first co-op experience.**
    `,
    slug: "ricoh-co-op-2025",
    readTime: "7 min read"
  },

  {
    id: 2,
    title: "Summer 2025: First Summer in Waterloo, and a lot of Change",
    date: "Sep 8, 2025",
    excerpt: "Landing my first co-op, living alone in Waterloo, rehabbing a torn bicep, and discovering a new fascination with pharmacology. Here's how my summer unfolded...",
    content: `
    **May - August 2025 | Waterloo, Ontario**

Summer 2025 was my first summer living in Waterloo, and a lot changed over those four months. I landed my first co-op, lived on my own, returned to training after a torn bicep, and found a new interest in pharmacology.

## 1. Landing My First Co-op 💼
One of the biggest highlights was landing my first ever co-op role for the **Fall 2025 term at [Ricoh Canada](https://www.ricoh.ca/)** as a Software Developer. This was a huge milestone for me, the first real step in my career in tech. I won't dive into too many details yet (that'll come in a future post after the work term I'm sure), but let's just say it felt really rewarding to see the work you put in pays off and I'm really excited to get my first experience in tech as a developer.
![Ricoh Co-op Offer crop-picture](/images/firstcoopoffer.png)
The application process, the interviews, the stress, it all paid off, and for that I'm thankful.

## 2. Living Alone in Waterloo
Another major part of this summer was living alone in Waterloo. Most of my friends went home to enjoy their time off, while I stayed for school. At first, the idea of being in an empty apartment sounded kind of isolating, but it turned out to be an experience I'm grateful for.
![Living Alone crop-square](/images/livingaloneinwaterloo.png)
There's something oddly peaceful about having your own space, the silence, the independence, the time to think. I also ended up meeting a bunch of new people who were in the same boat, being in co-op and doing summer school.

### MLSB Summer Softball
On top of that, I joined the **[MLSB](https://www.mlsb.ca/) summer softball league**, which is basically what a lot of co-op students do during the summer here. It was my first time ever playing softball, and it was such a fun way to stay active (especially since I was coming off an injury).
![MLSB Summer Softball crop-half](/images/mlsb1.png)
![MLSB Summer Softball 2 crop-half](/images/mlsb2.png)
The league became this unexpected highlight of my week. Every game was a chance to unwind, meet people, and just enjoy being outside in the summer. There was something about playing in MLSB that brought people together in a way nothing else really does. (and also the keggers)

## 3. Rehabbing My Torn Bicep
Speaking of injuries, this one was a big part of my life this year. In **late August 2024**, I tore my left bicep (partially), and for the next **8 ish months**, training (something I've built my lifestyle around) was off the table.
![Bicep Ultrasound Image](/images/ultrasoundimage.png)
![Bicep Ultrasound Result crop-picture](/images/ultrasoundresults.png)
Anyone who lifts knows how much being in the gym can influence your headspace. For me, being forced to step away from something I love, something that makes me feel grounded, was tough. But this summer, I finally reached the point where I could start training again. That first real session back, was the biggest relief.
![Lifting Again crop-picture](/images/startedliftingagain.png)
*Lowkey looking a little bit chunky here but this was one of my first times hitting upper body after being out of the gym for so long.*
I learned a lot through that process. Being sidelined changes you. It forces you to reflect, but it also builds something in you, **patience, perspective, and resilience**. Coming back stronger isn't just a physical thing anymore, you've got this new mental approach to training and recovery.
> The injury taught me more about myself than any PR ever did.

## 4. A New Fascination: Pharmacology
The injury also pushed me toward an interest I did not expect. While trying to understand why my arm was not healing as quickly as I expected, I started learning more about anatomy, recovery, and eventually pharmacology.
I began with the basics of **pharmacodynamics** and **pharmacokinetics**, then moved into muscle regeneration, tissue repair, inflammation, and recovery. I watched lectures, read studies, and kept following whatever caught my attention.
The interest has stuck with me and is already shaping how I think about health, training, and recovery. It is definitely something I want to keep learning about.

## 5. Family Time and Reflection
And of course, no summer is complete without spending time with family. Between everything going on, the quiet moments in Waterloo, new friendships, and the ups and downs of recovery, it was nice to have that grounding time with the people who matter most.
![Summer With Family crop-picture](/images/summerwithfamily.jpg)
*My sisters and I at the cottage ^*
Those simple moments that remind you what really matters, in a season filled with change and new experiences.

## Closing Thoughts
So yeah, that's Summer 2025 in the 'loo. Not the loudest or flashiest summer, but probably one of the most meaningful ones I've had so far. A season of **change, reflection, and new beginnings**.
Looking back, I think what made this summer special wasn't any single big moment, it was the collection of small ones. The quiet mornings, the first workout back, the softball games, the late-night conversations, the moments of solitude, and the time with family.
> Turns out the quiet summers often shape us the most.
    `,
    slug: "summer-2025",
    readTime: "5 min read"
  },

  {
    id: 1,
    title: "My First Hackathon: Building LuckyLease at SPURHACKS 2025",
    date: "Jun 25, 2025",
    excerpt: "2000+ participants, 48 hours, one AI-powered sublet marketplace, and staying up all night. Here's how my first hackathon went...",
    content: `
    **June 20-22, 2025 | Waterloo, Ontario**

I just got back from SPURHACKS 2025. This was my first-ever hackathon, and what an introduction it was... With over **2000 participants**, [SPURHACKS](https://spurhacks.com/) claims to be one of Canada's largest hackathons ever and after experiencing it firsthand, I totally believe it.
## The Setup
Walking into the venue in Waterloo, I was immediately hit by the energy. Developers, designers, and entrepreneurs everywhere laptops open and the unmistakable buzz of people building something amazing in a short time.
Also the food was actually quite good too (shoutout to the organizers for keeping us fed during those long coding sessions)
## The Team
![SPURHACKS 2025 Team crop-square](/images/spurhacksteam.jpg)
- **[Gurshan Sidhar](https://www.linkedin.com/in/gurshan-sidhar)**
- **[Tony Taseski](https://www.linkedin.com/in/a-taseski)**
- **[Spencer Kelly](https://www.linkedin.com/in/spencergk)**

We knew we wanted to build something that would solve a real problem for students like us.
## The Idea: LuckyLease 🍀
After brainstorming for about an hour, we landed on **LuckyLease**, a student sublet marketplace designed specifically for students and interns looking for short-term housing near their schools or internship locations.
The problem was clear: existing platforms like Facebook Marketplace aren't purpose-built for student housing. We wanted to create something that understood student needs.
![LuckyLease Homepage crop-banner](/images/luckylease1.png)
## The Secret Sauce: Lucky AI
What made our project different was **Lucky** (shoutout Gurshan), an AI assistant powered by Google Gemini. It compares each listing with a student's budget, preferred location, amenities, and lease length, then gives them a compatibility score and a quick breakdown of the pros and cons.
![Lucky's Suggestion crop-banner](/images/luckysuggestion.png)
## The Tech Stack
We used **Next.js, TypeScript, and Tailwind CSS** for the frontend, with **Express and Supabase** handling the backend. **Google Gemini** powered Lucky, while **Socket.IO** handled chat and **Leaflet** powered the map.
## The Grind
> We were super late to film our [demo video](https://www.youtube.com/watch?v=ibgUSqTDZQM) (classic), thats why you can see in the bottom of the video it was filmed just after 5 in the morning. (lol)
The final hours were intense. We were debugging a database issue (thank you Tony), polishing the UI, and making sure Lucky's AI responses were coherent, all while running on minimal sleep.
## Making a TikTok
Of course, I had to document this experience! I filmed throughout the hackathon and created a [TikTok video](https://www.tiktok.com/@michaelmarsillo/video/7519321432707337478) showing the journey from idea to deployed app. I love making videos and being able to have something to look back on in the future.
## The Results
We deployed LuckyLease to production and it's live at [luckylease](https://luckylease.vercel.app/)! The platform actually works, students can sign up, browse listings, chat with landlords, and get AI-powered recommendations.
Check out our code on [GitHub](https://github.com/TaseskiCS/LuckyLease) and our full submission on [Devpost](https://devpost.com/software/luckylease).
## What I Learned
This hackathon taught me how quickly a team can build when everyone is focused on the same deadline. I got better at prioritizing an MVP, working through Git changes with other people, and taking a full-stack app from an idea to production.
It also forced us to make decisions quickly. We could not build everything in 48 hours, so we focused on the features that made LuckyLease useful and kept debugging even when it was four in the morning.
## Looking Forward
SPURHACKS 2025 was an incredible introduction to the hackathon world. The energy, the people, the learning, everything about it was addictive (and tiring). I'm already planning to participate in more hackathons and continue building solutions to real problems.
To anyone considering their first hackathon: **just do it**. You'll learn more in 48 hours than you might in weeks of solo coding. The experience of building something from scratch with a team under pressure is unlike anything else.
> Want to try LuckyLease? Check it out at [luckylease](https://luckylease.vercel.app/)
    `,
    slug: "spurhacks-2025",
    readTime: "6 min read"
  },
 
  
]; 
