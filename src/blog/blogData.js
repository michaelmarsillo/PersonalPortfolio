export const blogPosts = [
  {
    id: 4,
    title: "Building Audiofy: Bringing Back a Family Tradition with Code",
    date: "Jan 5, 2026",
    excerpt: "My family had this song quiz game we loved playing at the cottage. Then it got discontinued. So I built my own version with real-time multiplayer, websockets, and way too many technical challenges.",
    content: `
**October 2025 - January 2026 | Waterloo, Ontario**

My family and I have this tradition. Whenever we get together at the cottage or during family gatherings, we'd play this song quiz game. It was simple - listen to a short clip, guess the artist, compete for bragging rights. It brought everyone together in a way that few things do.
Then one day, the app got discontinued. Just... gone. And with it, our family tradition.
I couldn't let that happen. So I decided to build it myself, not just recreate it, but make it better. Real-time multiplayer, multiple game modes, better song selection. That's how **[Audiofy](https://audiofy-m.vercel.app/)** was born.
![Me And My Sisters At The Cottage crop-](/images/meandsistersatcottage.jpg)

## The Concept 🎵
The idea is simple: listen to a 7-second song clip, identify the artist from 4 options, score points based on speed and accuracy. But underneath that simplicity, there's a lot of complexity, especially when you want multiple people playing the same game in real-time.
![Audiofy Homepage](/images/audiofyhome.png)
### Game Modes
- **Solo Play:** Classic 7-round quiz, perfect for practicing
- **Multiplayer:** Real-time competitive mode with friends (up to 8 players)
- **Heardle:** Wordle-style guessing with limited attempts
- **Arcade:** Continuous gameplay with streak bonuses
![Audiofy Gamemodes](/images/audiofygamemodes.png)

## Challenge #1: The Spotify Problem 🎧
When I started building this, I naturally went with Spotify. It's the biggest music platform, has a solid API, and seemed like the obvious choice.
**The problem?** Spotify's preview URLs are incredibly unreliable.
I'd fetch a playlist, and maybe 40% of the songs had working 30-second previews. Some genres were worse, older music or less popular songs often had no previews at all. This created a terrible user experience where games would break mid-round because a song had no audio.
**The solution:** I switched to the **Apple Music API**.
The difference was night and day. Apple Music has way better preview coverage, nearly every song has a working 30-second clip. Plus, no complex OAuth flow required for just fetching preview URLs. The integration was simpler, and the experience became consistent.
> **Key Takeaway:** Sometimes the "obvious" choice isn't the best one. Real-world testing revealed the gap between what an API promises and what it delivers.

## Challenge #2: Real-Time Multiplayer with WebSockets 🔌
This was the hardest part of the project, and where I learned the most.
The challenge: multiple players need to see the exact same game state at the exact same time. When the host starts a round, everyone needs to hear the same song clip simultaneously, see the same timer countdown, and have their scores update in real-time.
### Why WebSockets?
Traditional HTTP requests are one-way, client asks, server responds, connection closes. That doesn't work for real-time games where the server needs to push updates to all clients simultaneously.
**WebSockets provide bidirectional, persistent connections.** The server can push updates to all connected clients instantly without them having to constantly poll for changes.
I used **Socket.IO** to handle this.
![Socket.IO Code crop-half](/images/websocketinit.png)
### The Architecture
**Key Socket Events:**
- \`create-room\`: Host creates a game, server generates unique room code
- \`join-room\`: Players join using the code
- \`start-game\`: Host starts, server fetches songs and broadcasts to all
- \`request-round\`: Triggers next round for everyone
- \`submit-answer\`: Player answers, server calculates score and broadcasts updates
- \`round-data\`: Server sends round info (song clip, options) to all clients

### The Synchronization Problem
Here's where it got tricky. Initially, I had each client run their own timer for the 7-second listening phase. 
**This didn't work.** Client-side timers drift out of sync, one player's timer might be slightly faster or slower than another's. After a few rounds, players were seeing different phases at different times.
**The solution:** Make the server the source of truth.
When the server broadcasts the \`round-data\` event, all clients simultaneously:
1. Transition to the listening phase
2. Reset their local timer to 7 seconds  
3. Start playing the audio clip
4. React to the same server-controlled phase transitions
This ensures everyone sees the same game state at the same time. The server controls when phases change, and clients just react to those events.
![Synchronization Between Players (scores updating each round)](/images/audiofybetweenrounds.png)
### Room Management
- Maximum 8 players per room (keeps it manageable)
- Host controls when the game starts
- Automatic host reassignment if the host leaves
- Guest user support - you don't need an account to play
- Rooms persist until the last player leaves
![Audiofy Waiting Room](/images/audiofywaitingroom.png)
> **Key Takeaway:** Real-time multiplayer is hard. The server must be authoritative. Clients should never trust their own timers or state, stick to what the server says.

## What I Learned 🚀
Building Audiofy taught me more about real-time systems than any tutorial could. Key lessons:
1. **API reliability matters more than features** - Apple Music's reliability made it the better choice for me
2. **Synchronization is harder than it looks** - What seems simple ("just start a timer") becomes complex at scale
3. **Server authority is crucial** - In multiplayer games, clients can't be trusted to maintain their own state
4. **WebSockets aren't magic** - They solve specific problems really well, but you need to handle reconnections, state recovery, and edge cases
5. **User experience trumps technical complexity** - The best tech stack is the one that makes the user experience seamless

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

## 1. The Commute & Finding Balance 🚌
The commute to work was not bad at all, about a ~20 minute bus ride down King St and back in the evening. I actually really enjoyed this time to switch modes. Work mode in the morning, gym mode in the evening. I was also able to listen to music or study some pharmacology flashcards (shoutout Anki) to and from work.

This experience made me realize something important about my priorities. I've been having second thoughts about working in Toronto for a future work term, especially since it would be over an hour commute each way. I have other things in my life that are super important to me (training, personal projects, content creation), and I wouldn't want my entire day to just be consumed by work and transit. I'm grateful that I got to stay in Waterloo for my first work term.
![King Street Bus 7 crop-half](/images/bus7.png)
![Tapping My WLU OneCard crop-half](/images/tappingonecard.png)
> If you want to see a sneak peek of what my typical day looked like: work, commute, gym, and everything in between, I made a [day in the life](https://www.tiktok.com/@michaelmarsillo/video/7586443814638783765) TikTok that captures it pretty well.

## 2. The Work: CloudStream ☁️
The actual work I was doing was quite interesting. I'm not really sure how much I'm able to say, but I was working on the **CloudStream team at [Ricoh Canada](https://www.ricoh.ca/)**, which is their cloud-based print management software.

Think of it this way: imagine a school or large office building with a bunch of printers that need to handle print requests from hundreds of clients. Traditionally, you'd need an on-premise server to handle all those requests. CloudStream uses... well, the cloud. It's a SaaS solution that manages everything remotely.
### My Responsibilities:
- **UI Development** - Worked mostly on the CloudStream web app UI
- **Feature Implementation** - Making UI tweaks and implementing my own new features that I believed gave it a more modern feel
- **Database Work** - Fixing an ample amount of string translations in the database for support across multiple locales (English, French, Spanish, Italian, etc.)
- **Bug Fixes** - Squashing bugs and improving existing functionality

I got assigned my tickets via **Jira** and used **Git** to make feature branches and push changes. The typical workflow was: pick up a ticket, create a feature branch, implement the fix/feature, test it thoroughly, push the changes, and create a pull request for code review.
![Desktop Picture crop-half](/images/desktopshot.jpg)
![Me Working crop-half](/images/working.png)

## 3. The Tech Stack: Java, SmartGWT, and SQL 💻
### What I Worked With:
- **Backend:** Java (Spring Boot framework)
- **Frontend:** SmartGWT - a frontend framework that converts Java code into JavaScript to be run in the browser (Don't get me started on SmartGWT...)
- **Database:** SQL with SQL Server Management Studio (SSMS)
- **Project Management:** Jira for ticket assignment and tracking
- **Version Control:** Git for feature branches and version control
### The SmartGWT Experience
Working with SmartGWT was... an experience. It's not a modern framework by any means, and the learning curve was steep. But it forced me to really understand what's happening under the hood when you're building UIs.

Why does this matter? Most modern web development uses frameworks like React, Vue, or Angular. SmartGWT is from a different era of web development. Learning it taught me:
- **Debugging across layers** - Understanding how Java compiles to JavaScript
- **Working with legacy code** - Not everything is built with the latest tech
- **Patience and persistence** - When Stack Overflow doesn't have your answers
- **Appreciation for modern frameworks** - You don't know what you have until it's gone

## 4. Going Beyond Code: Writing Documentation 📝
One thing I noticed early on was that there was **lacking documentation** for connecting your computer to a printer in-office for testing using the **DM Agent Deployment Tool**. This tool is needed to connect to a specific printer from your computer, but without proper documentation, it was a nightmare to set up.

Trust me, the process was harder than it sounds.
### The Solution I Created:
I took the initiative to write a full, detailed guide with pictures explaining how to go about connecting to a printer. I documented:
- Step-by-step setup process
- Common errors and how to fix them  
- Screenshots for every major step
- Troubleshooting tips based on my own struggles

This wasn't assigned work, it was just something I saw needed to be done. Future employees (and even future co-ops) would benefit from this, and that felt good to contribute.
> **Key Takeaway:** Documentation is underrated. Writing good documentation is a skill that separates good developers from great ones. Future you (and future employees) will thank you.

## 5. What I Learned: Scale, Speed, and Confidence 🚀
### Scale Perspective
This internship really helped me see software development from a **scale perspective**. I wasn't just building a personal project that 10 people might use, I was working on software that large organizations rely on daily.

That changes how you think about:
- **Error handling** - Because errors affect real businesses
- **Performance** - Because slow software costs money
- **Testing** - Because you can't just "push and hope"
- **Backwards compatibility** - Because clients don't always update immediately
### Java Skills Leveled Up
Working with Java brought my skills up quite a bit. I'd used Java in school (shoutout CP213 and CP317), but this was different. Enterprise Java, Spring Boot, working with established patterns and conventions, it all clicked.

Now I feel much more confident using Java and actually enjoy writing Java code. Understanding enterprise patterns, RESTful APIs, database connections, all of this became second nature.
### Adapting Quickly
I also feel like I was able to quickly adapt to the tickets I was assigned and start shipping code fast. I attribute this to my **prior personal project experience**.

When you've built [CVLens](https://cvlens.vercel.app/), [Audiofy](https://audiofy-m.vercel.app/), [LuckyLease](https://luckylease.co/), and other projects from scratch, you develop problem-solving patterns that translate to any codebase:
- Reading unfamiliar code quickly
- Debugging systematically (not randomly)
- Understanding architecture and design patterns
- Knowing when to ask for help vs. figure it out yourself

## 6. Wins I'm Proud Of 🏆
- **Shipped features** that made it to production and are being used by real clients
- **Improved UI responsiveness** on several key pages
- **Fixed translation bugs** that had been open for months
- **Wrote documentation** that the team actually uses
- **Built relationships** with senior developers who gave great mentorship

## Closing Thoughts
Four months ago, I was nervous about starting my first co-op. Now, I'm wrapping it up with more confidence, better technical skills, and a clearer picture of what I want from my career.
### Key Takeaways:
- **Work-life balance matters** - Don't underestimate the impact of commute time
- **Legacy tech teaches patience** - Not everything is React and TypeScript
- **Documentation is valuable** - Write the docs you wish existed
- **Personal projects transfer** - Side projects prepare you for real work
- **Ask questions early** - Everyone expects you not to know everything
![Walking To The Office crop-half](/images/walking1.png)
![Walking To The Office 2 crop-half](/images/walking2.png)
I learned what I value in a work environment: good mentorship, meaningful projects, work-life balance, and the opportunity to contribute beyond just my assigned tickets.
> On to the next chapter. 🚀

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

Summer 2025 just wrapped up, and honestly, it was one of those chapters in life that felt quietly significant. A lot happened: some big, some small, but all meaningful. I want to use this space as a way to look back on what these months were like, the things I experienced, and how they shaped me.

## 1. Landing My First Co-op 💼
One of the biggest highlights was landing my first ever co-op role for the **Fall 2025 term at [Ricoh Canada](https://www.ricoh.ca/)** as a Software Developer. This was a huge milestone for me, the first real step in my career in tech. I won't dive into too many details yet (that'll come in a future post after the work term I'm sure), but let's just say it felt really rewarding to see the work you put in pays off and I'm really excited to get my first experience in tech as a developer.
![Ricoh Co-op Offer crop-picture](/images/firstcoopoffer.png)
The application process, the interviews, the stress, it all paid off, and for that I'm thankful.

## 2. Living Alone in Waterloo 🏠
Another major part of this summer was living alone in Waterloo. Most of my friends went home to enjoy their time off, while I stayed for school. At first, the idea of being in an empty apartment sounded kind of isolating, but it turned out to be an experience I'm grateful for.
![Living Alone crop-square](/images/livingaloneinwaterloo.png)
There's something oddly peaceful about having your own space, the silence, the independence, the time to think. I also ended up meeting a bunch of new people who were in the same boat, being in co-op and doing summer school.

### MLSB Summer Softball ⚾
On top of that, I joined the **[MLSB](https://www.mlsb.ca/) summer softball league**, which is basically what a lot of co-op students do during the summer here. It was my first time ever playing softball, and it was such a fun way to stay active (especially since I was coming off an injury).
![MLSB Summer Softball crop-half](/images/mlsb1.png)
![MLSB Summer Softball 2 crop-half](/images/mlsb2.png)
The league became this unexpected highlight of my week. Every game was a chance to unwind, meet people, and just enjoy being outside in the summer. There was something about playing in MLSB that brought people together in a way nothing else really does. (and also the keggers)

## 3. Rehabbing My Torn Bicep 💪
Speaking of injuries, this one was a big part of my life this year. In **late August 2024**, I tore my left bicep (partially), and for the next **8 ish months**, training (something I've built my lifestyle around) was off the table.
![Bicep Ultrasound Image](/images/ultrasoundimage.png)
![Bicep Ultrasound Result crop-picture](/images/ultrasoundresults.png)
Anyone who lifts knows how much being in the gym can influence your headspace. For me, being forced to step away from something I love, something that makes me feel grounded, was tough. But this summer, I finally reached the point where I could start training again. That first real session back, was the biggest relief.
![Lifting Again crop-picture](/images/startedliftingagain.png)
*Lowkey looking a little bit chunky here but this was one of my first times hitting upper body after being out of the gym for so long.*
I learned a lot through that process. Being sidelined changes you. It forces you to reflect, but it also builds something in you, **patience, perspective, and resilience**. Coming back stronger isn't just a physical thing anymore, you've got this new mental approach to training and recovery.

> The injury taught me more about myself than any PR ever did.

## 4. A New Fascination: Pharmacology 💊
Funny enough, this injury opened up a new interest for me. While I was trying to figure out why my arm wasn't healing the way I expected, I ended up going down a massive rabbit hole on human anatomy, recovery, and pharmacology.

I started teaching myself about things like:
- **Pharmacodynamics** - What drugs do to the body
- **Pharmacokinetics** - What the body does to drugs
- **Muscle regeneration and tissue repair**
- **Inflammation pathways and recovery optimization**

I watched lectures, read studies, and honestly just got really into it. I never expected to enjoy learning about this field, but it's something that's stuck with me, and it's shaping how I think about health, training, and recovery.
It's wild how a setback can lead you to discover something you never knew you'd be passionate about. Who knows, maybe this curiosity will evolve into something more down the road.

## 5. Family Time and Reflection 👨🏼‍👩🏼‍👧🏼‍👦🏼
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
Also the food was actually quite good too (shoutout to the organizers for keeping us fed during those long coding sessions)! 🍕
## The Team
![SPURHACKS 2025 Team crop-square](/images/spurhacksteam.jpg)
I teamed up with these three weirdos:
- **[Tony Taseski](https://www.linkedin.com/in/a-taseski)** - Full-stack
- **[Gurshan Sidhar](https://www.linkedin.com/in/gurshan-sidhar)** - Backend
- **[Spencer Kelly](https://www.linkedin.com/in/spencergk)** - Frontend

We knew we wanted to build something that would solve a real problem for students like us.
## The Idea: LuckyLease 🍀
After brainstorming for about an hour, we landed on **LuckyLease**, a student sublet marketplace designed specifically for students and interns looking for short-term housing near their schools or internship locations.
The problem was clear: existing platforms like Facebook Marketplace aren't purpose-built for student housing. We wanted to create something that understood student needs.
![LuckyLease Homepage crop-banner](/images/luckylease1.png)
## The Secret Sauce: Lucky AI 🤖
What made our project special was **Lucky** (shoutout Gurshan), our AI companion powered by Google Gemini. Lucky analyzes rental listings and provides personalized compatibility ratings based on:
- **Budget compatibility** - How the listing price fits your budget
- **Location preferences** - Distance and proximity to schools/campus  
- **Amenity matching** - Pet-friendly, parking, laundry, A/C preferences
- **Duration compatibility** - Whether lease terms match your needs
![Lucky's Suggestion crop-banner](/images/luckysuggestion.png)
Lucky gives you a structured pros and cons analysis with a compatibility rating (0-10) to help students make informed decisions. No more endless scrolling through listings that don't fit your needs!
## The Tech Stack
> We wanted to use something modern that we could build and ship fast:
### Frontend
- **Next.js 14** with TypeScript
- **Tailwind CSS** for styling
### Backend  
- **Express.js** with TypeScript
- **Supabase PostgreSQL** for database
- **Supabase Storage** for file uploads
- **Socket.io** for real-time chat
### AI & Integration
- **Google Gemini API** for Lucky AI
- **JWT** for authentication
- **Leaflet** for location discovery (the map)
## The Grind
> We were super late to film our [demo video](https://www.youtube.com/watch?v=ibgUSqTDZQM) (classic), thats why you can see in the bottom of the video it was filmed just after 5 in the morning. (lol)
The final hours were intense. We were debugging a database issue (thank you Tony), polishing the UI, and making sure Lucky's AI responses were coherent, all while running on minimal sleep.
## Making a TikTok
Of course, I had to document this experience! I filmed throughout the hackathon and created a [TikTok video](https://www.tiktok.com/@michaelmarsillo/video/7519321432707337478) showing the journey from idea to deployed app. I love making videos and being able to have something to look back on in the future.
## The Results
We deployed LuckyLease to production and it's live at [luckylease.co](https://luckylease.co/)! The platform actually works, students can sign up, browse listings, chat with landlords, and get AI-powered recommendations.
Check out our code on [GitHub](https://github.com/TaseskiCS/LuckyLease) and our full submission on [Devpost](https://devpost.com/software/luckylease).
## What I Learned
> This hackathon lowkey taught me a lot more than just coding:
### Technical Skills
- **Rapid prototyping** - Building MVPs quickly
- **Team collaboration** - Git workflows under pressure  
- **Full-stack deployment** - From idea to production
### Soft Skills  
- **Problem identification** - Finding real user pain points
- **Time management** - Prioritizing features under tight deadlines
- **Resilience** - Debugging at 4am requires mental toughness
## Looking Forward
SPURHACKS 2025 was an incredible introduction to the hackathon world. The energy, the people, the learning, everything about it was addictive (and tiring). I'm already planning to participate in more hackathons and continue building solutions to real problems.
To anyone considering their first hackathon: **just do it**. You'll learn more in 48 hours than you might in weeks of solo coding. The experience of building something from scratch with a team under pressure is unlike anything else.
> Want to try LuckyLease? Check it out at [luckylease.co](https://luckylease.co/) and let me know what you think!
    `,
    slug: "spurhacks-2025",
    readTime: "6 min read"
  },
 
  
]; 