import { Code, Zap, Palette } from "lucide-react";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";

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
      <Footer />
    </div>
  );
}
