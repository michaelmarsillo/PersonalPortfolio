import React from "react"
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const projects = [
        {
            title: "CVLens",
            description: "Fullstack app that extracts data from resumes in PDF/DOCX formats. Built NLP model using spaCy to pull details like education, skills, and work experience. Super clean and minimalist frontend made with Next.js and Tailwind. 🔍",
            imageUrl: "/images/cvlens.png",
            techStack: ["Python", "Next.js", "Tailwind", "spaCy", "FastAPI", "Docker", "Git",],
            githubUrl: "https://github.com/CVLens/CVLens",
            demoUrl: "https://cvlens.vercel.app/"
        },
        {
            title: "Lucky Lease",
            description: "A web-based platform for short-term subletting, focused on student and intern housing, like Facebook Marketplace, but purpose-built for rentals. 🍀",
            imageUrl: "/images/luckylease1.png",
            techStack: ["TypeScript", "Next.js", "Tailwind", "Express.js", "Supabase", "Socket.io", "Gemini API", "Git",],
            githubUrl: "https://github.com/TaseskiCS/LuckyLease",
            demoUrl: "https://luckylease.co/"
        },
        {
            title: "Audiofy",
            description: "Music trivia game. Guess artists from 7-second song previews. Built with multiple game modes (Solo, Multiplayer, Heardle, Arcade), and a global leaderboard. Inspired by the family game I used to play at the cottage. 🎵",
            imageUrl: "/images/audiofyhome.png",
            techStack: ["TypeScript", "Next.js", "Tailwind", "Node.js", "Express.js", "Socket.io", "PostgreSQL", "Git",],
            githubUrl: "https://github.com/michaelmarsillo/Audiofy",
            demoUrl: "https://audiofy-m.vercel.app/"
        },
        {
            title: "Roomify",
            description: "MERN-stack web application that allows Canadian users to create an account, calculate their total TFSA contribution room, and manage their deposits and withdrawals. Shipped in 24hrs. 🚀",
            imageUrl: "/images/Roomify.png",
            techStack: ["JavaScript", "Next.js", "Tailwind", "Express.js", "Node.js", "MongoDB", "Postman", "jsonwebtoken", "bcryptjs", "Git",],
            githubUrl: "https://github.com/michaelmarsillo/Roomify",
            demoUrl: "https://roomify-m.vercel.app/"
        },
        {
            title: "MarxPDF",
            description: "A web app designed to automate the process of filling out the ULT, PG.1 and JHA PDF forms for 40+ employees at the utility locating company I previously worked at. 📄",
            imageUrl: "/images/marxpdf.png",
            techStack: ["React.js", "JavaScript", "HTML", "CSS", "pdf-lib", "Git",],
            githubUrl: "https://github.com/michaelmarsillo/RPAforPDF",
            demoUrl: "https://marxpdf.vercel.app/"
        },
        {
            title: "Portfolio Website",
            description: "My personal wesbite showcasing my work, skills, and a little bit more about me. A good place to highlight my web dev abilities and what i've built. 🌐",
            imageUrl: "/images/portfoliowebsite.png",
            techStack: ["React.js", "Tailwind", "JavaScript", "HTML", "Git",],
            githubUrl: "https://github.com/michaelmarsillo/PersonalPortfolio",
            demoUrl: "https://www.michaelmarsillo.ca/"
        }
    ];

    return (
        <div className="min-h-screen bg-[#121212] text-gray-300 font-mono flex flex-col overflow-x-hidden w-full">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 break-words">My Projects</h1>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}

                <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300 pb-2">
                    <span className="text-purple-500 flex-shrink-0">↳</span>
                    <p className="text-sm sm:text-base">
                        feel free to check out the rest of my work {""}
                        <span className="bg-blue-900/30 px-1 py-0.5 text-purple-500 rounded">
                            <a
                                href="https://github.com/michaelmarsillo?tab=repositories"
                                className="font-medium hover:text-amber-300 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                here
                            </a>
                        </span>
                    </p>
                </div>
                  
            </div>
        </div>
    );
};

export default Projects;