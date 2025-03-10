import { Code, Zap, Palette } from "lucide-react";

export default function Services() {
  return (
    <>
      <section id="services" className="relative py-20 bg-navy-blue">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: "url('/grainy-texture.png')",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
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
                className="bg-midnight-blue/50 p-8 rounded-lg transition-all duration-300 hover:-translate-y-2"
              >
                {service.icon}
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full leading-0">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[50px]"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-midnight-blue"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-midnight-blue"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              opacity=".5"
              className="fill-midnight-blue"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[50px]"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-midnight-blue"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}
