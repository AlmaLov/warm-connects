
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

            {/* School Image */}
            <div className="mt-8">
              <img 
                src="/lovable-uploads/2d5a0107-a133-48fa-bbae-06adf2964c2e.png"
                alt="Step By Step School Location"
                className="w-[300px] h-[300px] object-cover rounded-lg"
              />
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
