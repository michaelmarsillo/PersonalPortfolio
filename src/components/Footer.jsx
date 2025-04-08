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
                  <link.icon className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-700 ">{link.name}</span>
                </>
              )}
              {!link.icon && <span className="font-medium text-gray-700 hover:text-black">{link.name}</span>}
            </a>
          ))}
        </div>


        <div className="flex justify-between items-center gap-5 mt-4 ">
          <div className="flex justify-between items-center mt-4 px-2">
              <div className="text-[16px] font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {new Date().getFullYear()} © Michael Marsillo
              </div>
          </div>
          <div className="flex items-center justify-between">
            <a href="https://wluring.xyz/api/michaelmarsillo/prev" className="text-2xl text-blue-500 hover:text-purple-500">←</a>
            <div className="w-full max-w-xs h-full overflow-hidden group ">
              <a href="https://wluring.xyz" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/wluring_white.png"
                alt="wluring"
                className="object-cover w-16 transition-transform duration-500 group-hover:scale-110"
              ></img>
  
              </a>
            </div>
            <a href="https://wluring.xyz/api/michaelmarsillo/next" className="text-2xl text-blue-500 hover:text-purple-500">→</a>
          </div>

        </div>

      </div>
    </footer>
  )
}

