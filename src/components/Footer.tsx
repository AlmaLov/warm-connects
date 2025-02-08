
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
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="max-w-[250px]">
              <img 
                src="/lovable-uploads/77eae424-bf83-4e27-bfc6-94069b3b7bc8.png" 
                alt="Step by Step School" 
                className="w-full"
              />
            </div>

            {/* Address */}
            <div>
              <h4 className="font-serif text-black text-lg mb-2">Address</h4>
              <p className="font-serif text-black text-base leading-relaxed">
                Step By Step School, Plot A-10, Sector - 132,<br />
                Taj Expressway, Noida – 201 303
              </p>
            </div>

            {/* Phone */}
            <div>
              <h4 className="font-serif text-black text-lg mb-2">Phone</h4>
              <p className="font-serif text-black text-base">
                0120-5087300
              </p>
            </div>

            {/* Accreditation Icons */}
            <div className="flex items-center space-x-6">
              <img 
                src="/lovable-uploads/bcb7c699-7ee5-432a-93c4-d485974d8b54.png" 
                alt="Accreditation 1" 
                className="h-12 w-12"
              />
              <img 
                src="/lovable-uploads/3ccd8266-39d6-4245-afa5-37125563aca7.png" 
                alt="Accreditation 2" 
                className="h-12 w-12"
              />
              <img 
                src="/lovable-uploads/f8535f7e-c4ec-4149-9736-469e30cd13ba.png" 
                alt="Accreditation 3" 
                className="h-12 w-12"
              />
              <div className="h-12 w-12 bg-gray-200 rounded-full" aria-label="Accreditation 4" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-serif font-bold text-[#9F021D] text-2xl mb-6 uppercase">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="font-serif text-[#9F021D] hover:text-black transition-colors text-base"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="w-full max-w-[400px] h-[300px] overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.6766799866397!2d77.49399731507862!3d28.46894198248047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1d0b93c6a87%3A0x9c126e8c8ab63882!2sStep%20By%20Step%20School!5e0!3m2!1sen!2sin!4v1624956433123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-[#9F021D] py-3">
        <p className="text-white font-serif text-sm text-center">
          © 2025 | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
