export const blogPosts = [
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
![SPURHACKS 2025 crop-square](/images/spurhacksteam.jpg)
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
![LuckyLease Homepage crop-banner](/images/luckysuggestion.png)
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