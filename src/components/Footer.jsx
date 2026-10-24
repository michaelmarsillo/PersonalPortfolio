import { Mail, CodeXml } from "lucide-react"
import { Twitter, Linkedin, Github, Instagram, Youtube } from "./BrandIcons"

export default function Footer({ className }) {
  const links = [
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/michaelmarsillo/",
      icon: Linkedin,
    },
    {
      name: "github",
      href: "https://github.com/michaelmarsillo",
      icon: Github,
    },
    {
      name: "x",
      href: "https://x.com/michaelmarsillo",
      icon: Twitter,
    },
    {
      name: "insta",
      href: "https://www.instagram.com/michaelmarsillo/",
      icon: Instagram,
    },
    {
      name: "youtube",
      href: "https://youtube.com/@michaelmarsillofit",
      icon: Youtube,
    },
    {
      name: "email",
      href: "mailto:mars7769@mylaurier.ca",
      icon: Mail,
    },
    {
      name: "repo",
      href: "https://github.com/michaelmarsillo/PersonalPortfolio",
      icon: CodeXml,
    },
  ]

  return (
    <footer className={`theme-bg p-4 sm:p-6 flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="container mx-auto max-w-3xl px-2 sm:px-4">
        <div className="border-t theme-border pt-3 sm:pt-4 mb-2 sm:mb-3"></div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-2.5 sm:px-3 py-1.5 sm:py-2 theme-pill rounded-lg transition-colors sm:transition-all sm:duration-500 sm:ease-in-out sm:hover:bg-[#d0c1b3] sm:dark:hover:bg-[#453f38] sm:hover:scale-105 sm:hover:shadow-md overflow-hidden"
            >
              <link.icon className="w-4 h-4 sm:w-5 sm:h-5 theme-accent-strong flex-shrink-0" />
              <span className="hidden sm:inline-block text-base font-medium w-0 opacity-0 whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out sm:group-hover:w-auto sm:group-hover:opacity-100 sm:group-hover:ml-2">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-3 sm:mt-4 flex justify-center px-2">
          <div className="text-xs sm:text-sm font-medium theme-accent-strong text-center">
            {new Date().getFullYear()} &copy; Michael Marsillo
          </div>
        </div>
      </div>
    </footer>
  )
}
