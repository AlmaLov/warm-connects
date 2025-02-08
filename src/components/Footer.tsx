
import { Link } from "react-router-dom";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Logo and Tagline */}
            <div className="max-w-[300px]">
              <img 
                src="/lovable-uploads/f332db90-32f1-4dc2-8eaf-d78eb9326cd2.png" 
                alt="School Logo" 
                className="w-full"
              />
              <p className="text-white text-center mt-2 font-serif">Enlighten Our Minds</p>
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
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((index) => (
                <div 
                  key={index} 
                  className="w-10 h-10 bg-gray-200 rounded-full"
                  aria-label={`Accreditation icon ${index}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-serif font-bold text-lg text-[#9F021D] mb-4">
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

            {/* Map */}
            <div className="w-full max-w-[250px] h-[250px] overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.6766799866397!2d77.49399731507862!3d28.46894198248047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1d0b93c6a87%3A0x9c126e8c8ab63882!2sStep%20By%20Step%20School!5e0!3m2!1sen!2sin!4v1624956433123!5m2!1sen!2sin"
                width="250"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-[#9F021D] py-4 mt-8">
        <p className="text-white font-serif text-sm text-center">
          © 2025 | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
