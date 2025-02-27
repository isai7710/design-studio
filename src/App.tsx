import { Code, Zap, Palette } from "lucide-react";
import Header from "./components/header";
import Hero from "./components/hero";

export default function App() {
  return (
    <div className="min-h-screen font-lexend text-white">
      <Header />
      <Hero />
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

      {/* Footer */}
      <footer className="bg-[#051422] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            <div className="md:col-span-1 ml-24">
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
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <address className="not-italic text-gray-300">
                <p className="mb-2">123 North Park Ave</p>
                <p className="mb-2">Orem, UT 90210</p>
                <p className="mb-2">info@northparkweb.com</p>
                <p>(801)555-5555</p>
              </address>
            </div>
          </div>

          <div className="border-t border-[#1E3A5F] mt-12 py-2 flex flex-col md:flex-row justify-between items-center">
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
                className="text-gray-300 text-sm hover:text-accent-coral transition-colors duration-500"
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
