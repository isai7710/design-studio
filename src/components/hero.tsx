export default function Hero() {
  return (
    <section
      id="home"
      className="pt-8 mt-12 md:mt-8 min-h-screen flex flex-col md:flex-row items-start relative bg-midnight-blue"
    >
      {/* Background image container with navy outline */}
      <div
        className="absolute inset-0 m-4 md:m-8 rounded-2xl overflow-hidden opacity-5 border-2 border-white rounded-xl"
        style={{
          backgroundImage: "url('/4048090.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10">
        <div className="relative">
          <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 relative">
            <span className="block">MODERN</span>
            <span className="block text-desert-sun">WEB DESIGN</span>
            <span className="block">FOR BUSINESSES</span>
          </h1>
        </div>
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

          <a
            href="#work"
            className="flex items-center px-5 py-1.5 bg-transparent text-white rounded-md hover:bg-[#1E3A5F] transition-colors text-lg font-medium border border-[#1E3A5F]"
          >
            See Our Work
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
              className="w-full h-auto rounded-md"
            />
            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-md border border-white transform rotate-3">
              <span className="text-white font-bold text-lg">INNOVATE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
