
import { Link } from "react-router-dom";
import { MapPin, Star, ExternalLink } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Admissions",
    "Join Us",
    "Publications",
    "Blogs",
    "Reach Us",
    "ERP Login",
    "Statutory Compliances",
    "General Information",
    "Transfer Certificate",
    "Disclaimer",
  ];

  return (
    <footer className="bg-[#FFFDE8] relative">
      <div className="container mx-auto px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Logo and Tagline */}
            <div className="max-w-[300px]">
              <img 
                src="/lovable-uploads/fbc0653e-edfe-4c0c-952d-3e7baeab3401.png" 
                alt="Step By Step School Logo" 
                className="w-full"
              />
              <p className="text-[#9F021D] text-center mt-4 font-serif">Enlighten Our Minds</p>
            </div>

            {/* Address */}
            <div className="font-serif text-black text-base">
              <p>
                Step By Step School, Plot A-10, Sector - 132,<br />
                Taj Expressway, Noida – 201 303
              </p>
            </div>

            {/* Phone Number */}
            <div className="font-serif font-bold text-black text-base">
              <p>0120–5087300</p>
            </div>

            {/* Accreditation Icons */}
            <div className="flex items-center space-x-6">
              {[1, 2, 3, 4].map((index) => (
                <div 
                  key={index} 
                  className="w-[40px] h-[40px] bg-gray-200 rounded-full flex items-center justify-center"
                  aria-label={`Accreditation icon ${index}`}
                >
                  {index === 1 && <span className="font-bold text-sm">IB</span>}
                  {index === 2 && <span className="font-bold text-sm">RS</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black -mx-6" />

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-serif font-bold text-lg text-[#9F021D] mb-6">
                QUICK LINKS
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="font-serif text-base text-[#9F021D] hover:text-black transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Map Section */}
            <div className="mt-8">
              <div className="w-[300px] h-[300px] relative bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.676414770624!2d77.41565631507847!3d28.463714982486906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1b6f36a8a33%3A0x55581c95a44973d6!2sSTEP%20BY%20STEP%20SCHOOL!5e0!3m2!1sen!2sin!4v1647338762806!5m2!1sen!2sin"
                  width="300"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Step By Step School Location"
                />
                
                {/* Reviews Overlay */}
                <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-full shadow-md flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">4.0</span>
                  <span className="text-sm text-gray-600">| 253 reviews</span>
                </div>

                {/* View Larger Map Link */}
                <a
                  href="https://goo.gl/maps/XYZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-full shadow-md flex items-center space-x-1 text-sm hover:bg-gray-50 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View larger map</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-[#9F021D] py-4">
        <p className="text-white font-serif text-sm text-center">
          © 2025 | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
