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
    <footer className={`bg-[#121212] p-4 sm:p-6 flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="container mx-auto max-w-3xl px-2 sm:px-4">
        <div className="border-t border-blue-800 pt-3 sm:pt-4 mb-2 sm:mb-3"></div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-2.5 sm:px-3 py-1.5 sm:py-2 bg-gray-100 rounded-lg transition-all duration-500 ease-in-out hover:bg-gray-200 hover:scale-105 hover:shadow-md overflow-hidden"
            >
              {link.icon && (
                <>
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-xs sm:text-base font-medium text-gray-700 w-0 opacity-0 whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out group-hover:w-auto group-hover:opacity-100 group-hover:ml-1.5 sm:group-hover:ml-2">{link.name}</span>
                </>
              )}
              {!link.icon && <span className="text-xs sm:text-base font-medium text-gray-700 hover:text-black">{link.name}</span>}
            </a>
          ))}
        </div>


        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-5 mt-3 sm:mt-4">
          <div className="flex justify-center items-center px-2">
              <div className="text-sm sm:text-[17px] font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
                {new Date().getFullYear()} © Michael Marsillo
              </div>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            
            <a href="https://wluring.xyz/api/michaelmarsillo/prev" className="text-xl sm:text-2xl text-blue-500 hover:text-purple-500 duration-500">←</a>

            <div className="overflow-hidden group">
              <a href="https://wluring.xyz" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/wluring_white.png"
                alt="wluring"
                className="object-cover w-12 sm:w-14 transition-transform duration-700 group-hover:scale-110"
              ></img>
              </a>
            </div>

            <a href="https://wluring.xyz/api/michaelmarsillo/next" className="text-xl sm:text-2xl text-blue-500 hover:text-purple-500 duration-500">→</a>
          </div>

        </div>

      </div>
    </footer>
  )
}

