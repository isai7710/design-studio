export default function Footer() {
  return (
    <footer className="relative bg-midnight-blue text-white py-12 px-6">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Company info */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-gugi font-bold mb-4">
              NORTH PARK
              <span className="text-desert-sun"> STUDIOS</span>
            </h1>
            <p className="text-gray-300 max-w-md text-center md:text-left">
              Professional web design and development for businesses that demand
              excellence.
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-300 text-center md:text-right">
              <p className="mb-2">123 North Park Ave</p>
              <p className="mb-2">Orem, UT 90210</p>
              <p className="mb-2">
                <a
                  href="mailto:info@northparkweb.com"
                  className="hover:text-desert-sun transition-colors"
                >
                  info@northparkweb.com
                </a>
              </p>
              <p>
                <a
                  href="tel:8015555555"
                  className="hover:text-desert-sun transition-colors"
                >
                  (801) 555-5555
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-blue"></div>

        {/* Copyright and links */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            c {new Date().getFullYear()} North Park Studios LLC. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-300 text-sm hover:text-desert-sun transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 text-sm hover:text-desert-sun transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
