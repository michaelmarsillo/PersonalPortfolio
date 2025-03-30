import { Twitter, Linkedin, Github, Mail, CodeXml, Instagram } from "lucide-react"

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
    <footer className={`bg-[#121212] p-4 flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="container mx-auto max-w-3xl">
        <div className="border-t border-blue-800 pt-4 mb-3"></div>
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-md"
            >
              {link.icon && (
                <>
                  <link.icon className="w-5 h-5 text-gray-700" />
                  <span className="font-medium text-gray-700 hover:text-black">{link.name}</span>
                </>
              )}
              {!link.icon && <span className="font-medium text-gray-700 hover:text-black">{link.name}</span>}
            </a>
          ))}
        </div>
        <div className="text-lg font-semibold text-[14px] bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent pt-4 text-center">
          {new Date().getFullYear()} © Michael Marsillo
        </div>
      </div>
    </footer>
  )
}

