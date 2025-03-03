export default function Hero() {
  return (
    <section className="pt-8 md:pt-20 min-h-screen flex flex-col md:flex-row items-start relative bg-gradient-to-tr from-midnight-blue to-navy-blue to-90%">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url('/grainy-texture.png')",
        }}
      ></div>

      <div className="w-full md:w-1/2 p-8 md:ml-12 flex flex-col justify-start sm:justify-center relative z-10">
        <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold leading-tight mb-4">
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
      <div className="w-full md:w-1/2 p-8">
        {/*
        <div className="absolute !left-1/2 top-2.5 !h-[92%] !w-[69%] -translate-x-[52%] overflow-hidden rounded-[35px]">
            <img
              src={image.src}
              alt={image.alt}
              className="size-full object-cover object-[50%_0%]"
            />
        </div>
            */}
        <img
          className="relative z-10 mx-auto"
          src="https://shadcnblocks.com/images/block/mockups/phone-2.png"
          width={250}
          alt="iphone"
        />
      </div>
    </section>
  );
}
