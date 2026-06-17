import React from "react"
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const projects = [
        {
            title: "CVLens",
            description: "Fullstack resume parser that extracts structured data from PDF/DOCX files using NLP. Clean Next.js frontend with a spaCy-powered backend.",
            imageUrl: "/images/cvlens.png",
            githubUrl: "https://github.com/CVLens/CVLens",
            demoUrl: "https://cvlens.vercel.app/"
        },
        {
            title: "Lucky Lease",
            description: "Short-term subletting platform for students and interns. Built like a cleaner marketplace, but purpose-built for rentals.",
            imageUrl: "/images/luckylease1.png",
            githubUrl: "https://github.com/TaseskiCS/LuckyLease",
            demoUrl: "https://luckylease.co/"
        },
        {
            title: "Audiofy",
            description: "Music trivia game built around 7-second song previews. Includes solo, multiplayer, arcade modes, and a global leaderboard.",
            imageUrl: "/images/audiofyhome.png",
            githubUrl: "https://github.com/michaelmarsillo/Audiofy",
            demoUrl: "https://audiofy-m.vercel.app/"
        },
        {
            title: "Roomify",
            description: "MERN app for Canadians to calculate TFSA contribution room and track deposits/withdrawals. Designed and shipped in 24 hours.",
            imageUrl: "/images/Roomify.png",
            githubUrl: "https://github.com/michaelmarsillo/Roomify",
            demoUrl: "https://roomify-m.vercel.app/"
        },
        {
            title: "MarxPDF",
            description: "PDF automation tool for utility locating forms. Streamlined ULT, PG.1, and JHA paperwork for 40+ employees.",
            imageUrl: "/images/marxpdf.png",
            githubUrl: "https://github.com/michaelmarsillo/RPAforPDF",
            demoUrl: "https://marxpdf.vercel.app/"
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio for my projects, writing, and a snapshot of who I am. Built to feel minimal and personal.",
            imageUrl: "/images/portfoliowebsite2.png",
            darkModeUrl: "/images/portfoliowebsite.png",
            githubUrl: "https://github.com/michaelmarsillo/PersonalPortfolio",
            demoUrl: "https://www.michaelmarsillo.ca/"
        }
    ];

    return (
        <div className="theme-bg flex flex-col overflow-x-hidden w-full">
            <div className="max-w-xl mx-auto px-4 sm:px-6 py-8 sm:py-10 w-full">
                <h1 className="text-xl sm:text-2xl font-bold italic theme-heading mb-5 sm:mb-6 break-words">My Projects</h1>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}

                <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300 pb-2">
                    <span className="theme-accent flex-shrink-0">&#8627;</span>
                    <p className="text-sm">
                        feel free to check out the rest of my work {""}
                        <span className="theme-pill px-1 py-0.5 rounded">
                            <a
                                href="https://github.com/michaelmarsillo?tab=repositories"
                                className="font-medium theme-pill-hover transition-colors"
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
