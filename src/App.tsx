import { useEffect, useState } from "react";
import { Menu, X, Code, Zap, Users, Palette, Compass } from "lucide-react";
import "./index.css";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A1929] text-white font-sans">
      {/* Header that transforms on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "w-[80%] mx-auto mt-4 rounded-xl bg-[#0F2942] shadow-lg border border-[#1E3A5F]"
            : "w-full bg-[#0A1929]"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-wider">
                NORTH PARK
                <span className="text-accent-coral"> DESIGN STUDIO</span>
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              {["Home", "Services", "Work", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-lg font-medium hover:text-accent-coral transition-colors after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-accent-coral after:left-0 after:bottom-[-5px] after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F2942] border-t border-[#1E3A5F] py-4">
            <nav className="flex flex-col space-y-4 px-4">
              {["Home", "Services", "Work", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium hover:text-accent-coral transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 md:pt-8 min-h-screen flex flex-col md:flex-row items-center"
      >
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 relative z-10">
              <span className="block">DESIGN</span>
              <span className="block text-accent-coral">FOR THE</span>
              <span className="block">DIGITAL AGE</span>
            </h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent-coral opacity-10 rounded-full blur-xl -z-10"></div>
          </div>
          <p className="text-xl mb-8 max-w-md text-gray-300">
            We create sophisticated, professional digital experiences that
            elevate your brand and engage your audience.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-accent-coral text-white rounded-md hover:bg-[#00A3C4] transition-colors text-lg font-medium"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="px-8 py-3 bg-transparent text-white rounded-md hover:bg-[#1E3A5F] transition-colors text-lg font-medium border border-[#1E3A5F]"
            >
              See Our Work
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-16 relative">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-accent-coral rounded-md transform rotate-3 opacity-70"></div>
            <div className="absolute inset-0 bg-[#1E3A5F] rounded-md transform -rotate-3"></div>
            <div className="relative bg-[#0F2942] rounded-md p-4 border border-[#1E3A5F]">
              <img
                src="https://via.placeholder.com/600x600"
                alt="Creative design process"
                className="w-full h-auto rounded-md"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent-coral px-4 py-2 rounded-md border border-[#1E3A5F] transform rotate-3">
                <span className="text-white font-bold text-lg">INNOVATE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#051422]">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold mb-4">OUR SERVICES</h2>
            <div className="w-24 h-2 bg-accent-coral mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="h-12 w-12 mb-4 text-accent-coral" />,
                title: "UI/UX Design",
                description:
                  "Intuitive, user-centered interfaces that enhance user experience and drive engagement.",
              },
              {
                icon: <Code className="h-12 w-12 mb-4 text-accent-coral" />,
                title: "Web Development",
                description:
                  "Custom websites built with modern technologies that perform as good as they look.",
              },
              {
                icon: <Zap className="h-12 w-12 mb-4 text-accent-coral" />,
                title: "Brand Identity",
                description:
                  "Distinctive visual systems that make your brand unforgettable in a crowded market.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#0F2942] p-8 rounded-lg border border-[#1E3A5F] hover:border-accent-coral transition-all hover:-translate-y-2"
              >
                {service.icon}
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="about" className="py-20 bg-[#0F2942]">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold mb-4">WHAT CLIENTS SAY</h2>
            <div className="w-24 h-2 bg-accent-coral mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote:
                  "North Park Web Studio transformed our online presence with their professional, innovative approach. They're not just developers, they're strategic partners.",
                author: "Alex Johnson",
                company: "Innovate Tech",
              },
              {
                quote:
                  "Working with North Park was a game-changer for our business. Their attention to detail and technical expertise delivered a website that exceeds all expectations.",
                author: "Maria Rodriguez",
                company: "Bloom Fashion",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#0A1929] p-8 rounded-lg border border-[#1E3A5F] relative"
              >
                <div className="absolute -top-4 -left-4 bg-accent-coral w-8 h-8 flex items-center justify-center rounded-full">
                  <Compass className="h-4 w-4 text-white" />
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent-coral rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-[#0A1929] px-8 py-4 rounded-lg border border-[#1E3A5F]">
              <Users className="h-6 w-6 mr-3 text-accent-coral" />
              <span className="text-xl font-bold">
                50+ Satisfied Clients Worldwide
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold mb-4">START A PROJECT</h2>
              <div className="w-24 h-2 bg-accent-coral mx-auto mb-6"></div>
              <p className="text-xl max-w-2xl mx-auto text-gray-300">
                Ready to elevate your digital presence? Let's collaborate and
                bring your vision to life with our professional, innovative
                approach.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <label className="block mb-2 font-bold" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-[#1E3A5F] rounded-md focus:border-accent-coral focus:outline-none bg-[#0F2942] text-white"
                  placeholder="Your name"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block mb-2 font-bold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-[#1E3A5F] rounded-md focus:border-accent-coral focus:outline-none bg-[#0F2942] text-white"
                  placeholder="Your email"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 font-bold" htmlFor="project">
                  Project Type
                </label>
                <select
                  id="project"
                  className="w-full p-3 border border-[#1E3A5F] rounded-md focus:border-accent-coral focus:outline-none bg-[#0F2942] text-white"
                >
                  <option value="">Select project type</option>
                  <option value="website">Website Design</option>
                  <option value="branding">Brand Identity</option>
                  <option value="development">Web Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 font-bold" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-[#1E3A5F] rounded-md focus:border-accent-coral focus:outline-none bg-[#0F2942] text-white"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="px-10 py-4 bg-accent-coral text-white rounded-md hover:bg-[#00A3C4] transition-colors text-lg font-medium inline-flex items-center"
                >
                  <Compass className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#051422] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold tracking-wider">
                  NORTH PARK
                  <span className="text-accent-coral">DESIGN STUDIO</span>
                </span>
              </div>
              <p className="text-gray-300 mb-4">
                Professional web design and development for businesses that
                demand excellence.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "Instagram", "Dribbble", "LinkedIn"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-300 hover:text-accent-coral transition-colors"
                    >
                      {social}
                    </a>
                  ),
                )}
              </div>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  "UI/UX Design",
                  "Web Development",
                  "Brand Identity",
                  "Digital Marketing",
                  "App Design",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-accent-coral transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                {["About Us", "Our Work", "Careers", "Blog", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-accent-coral transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <address className="not-italic text-gray-300">
                <p className="mb-2">123 North Park Ave</p>
                <p className="mb-2">San Diego, CA 92104</p>
                <p className="mb-2">hello@northparkweb.com</p>
                <p>(619) 555-7890</p>
              </address>
            </div>
          </div>

          <div className="border-t border-[#1E3A5F] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              c {new Date().getFullYear()} North Park Web Studio. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-300 text-sm hover:text-accent-coral transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 text-sm hover:text-accent-coral transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
