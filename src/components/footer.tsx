export default function Footer() {
  return (
    <footer className="relative bg-midnight-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-gugi font-bold tracking-wider">
                NORTH PARK
                <span className="text-desert-sun"> STUDIOS</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4 w-96">
              Professional web design and development for businesses that demand
              excellence.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "Instagram", "Dribbble", "LinkedIn"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-desert-sun hover:text-gray-300 transition-colors"
                  >
                    {social}
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="">
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
            © {new Date().getFullYear()} North Park Studios LLC. All rights
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
  );
}
