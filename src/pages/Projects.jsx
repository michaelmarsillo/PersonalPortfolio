import React from "react"
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const projects = [
        {
            title: "CVLens",
            description: "Fullstack app that extracts data from resumes in PDF/DOCX formats. Built NLP model using spaCy to pull details like education, skills, and work experience. Super clean and minimalist frontend made with Next.js and Tailwind.",
            imageUrl: "/images/cvlens.png",
            techStack: ["Python", "Next.js", "Tailwind", "spaCy", "FastAPI", "Docker", "Git",],
            githubUrl: "https://github.com/CVLens/CVLens",
            demoUrl: "https://cvlens.vercel.app/"
        },
        {
            title: "Roomify",
            description: "MERN-stack web application that allows Canadian users to create an account, calculate their total TFSA contribution room, and manage their deposits and withdrawals. Shipped in 24hrs 🚀",
            imageUrl: "/images/Roomify.png",
            techStack: ["JavaScript", "Next.js", "Tailwind", "Express.js", "Node.js", "MongoDB", "Postman", "jsonwebtoken", "bcryptjs", "Git",],
            githubUrl: "https://github.com/michaelmarsillo/Roomify",
            demoUrl: "https://roomify-m.vercel.app/"
        },
        {
            title: "MarxPDF",
            description: "A website designed to automate the process of filling out the ULT, PG.1 and JHA PDF forms for 40+ employees at the utility locating company I previously worked at.",
            imageUrl: "/images/marxpdf.png",
            techStack: ["React.js", "JavaScript", "HTML", "CSS", "pdf-lib", "Git",],
            githubUrl: "https://github.com/michaelmarsillo/RPAforPDF",
            demoUrl: "https://marxpdf.vercel.app/"
        },
        {
            title: "Portfolio Website",
            description: "My personal wesbite showcasing my work, skills, and a little bit more about me. A good place to highlight my web dev abilities and what i've built.",
            imageUrl: "/images/portfoliowebsite.png",
            techStack: ["React.js", "Tailwind", "JavaScript", "HTML", "Git",],
            githubUrl: "https://github.com/michaelmarsillo/PersonalPortfolio",
            demoUrl: "https://www.michaelmarsillo.ca/"
        }
    ];

    return (
        <div className="min-h-screen bg-[#121212] text-gray-300 font-mono flex flex-col ">
            <div className="max-w-3xl mx-auto p-4">
                <h1 className="text-3xl font-bold text-white mb-8">My Projects</h1>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}

                <div className="flex items-baseline space-x-2 hover:translate-x-1 transition-transform duration-300 pb-2">
                    <span className="text-purple-500">↳</span>
                    <p>
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