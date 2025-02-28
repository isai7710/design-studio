export default function Hero() {
  return (
    <section className="pt-8 md:pt-18 lg:pt-24 min-h-[80vh] flex flex-col md:flex-row items-start relative bg-midnight-blue">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url('/grainy-texture.png')",
        }}
      ></div>

      <div className="w-full md:w-1/2 p-8 xl:ml-12 flex flex-col justify-start sm:justify-center relative z-10">
        <h1 className="text-4xl md:text-5xl 2xl:text-6xl xl:pt-8 font-bold leading-tight mb-4">
          <span className="block">
            MODERN <span className="hidden xl:inline">AND SLEEK</span>
          </span>
          <span className="block text-desert-sun">WEB DESIGN</span>
          <span className="block">FOR BUSINESSES</span>
        </h1>
        <p className="text-xl mb-6 max-w-md text-gray-200 bg-navy-dark/70 py-3 rounded-lg">
          Let us handle your online presence while you focus on what's
          important,{" "}
          <span className="text-desert-sun">running your business.</span>
          <br />
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="flex items-center px-5 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-md hover:bg-desert-sun transition-colors text-lg font-medium"
          >
            Start A Project
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8 md:p-16 relative">
        <div className="relative w-full aspect-square max-w-lg mx-auto">
          <div className="absolute inset-0 bg-accent rounded-md transform rotate-3 opacity-70"></div>
          <div className="absolute inset-0 bg-navy-blue rounded-md transform -rotate-3 border border-navy-blue"></div>
          <div className="relative bg-midnight-blue rounded-md p-4 border border-navy-blue">
            <img
              src="/5999404.png"
              alt="Creative design process"
              className="w-full h-auto rounded-md z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
