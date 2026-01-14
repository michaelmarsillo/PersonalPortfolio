import { Twitter, Linkedin, Github, Mail, CodeXml, Instagram, Youtube } from "lucide-react"

// Custom TikTok Icon Component
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

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
      name: "tiktok",
      href: "https://tiktok.com/@michaelmarsillo",
      icon: TikTokIcon,
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

