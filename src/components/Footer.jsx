import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <footer className="bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center justify-center">
            <img src="/logo_refresh.png" alt="MBSoftech Logo" className="h-12 mb-4" />
            <span className="text-sm text-white md:text-base lg:text-lg font-bold tracking-wide px-1 md:px-2">M & MB SOFT TECH</span>
            </div>
            <p className="text-gray-400 text-sm leading-6">
              MBSoftech is a leading provider of innovative IT solutions, delivering software,
              design, and consulting services with a focus on excellence.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
              <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#1DA1F2]" /> +977-981543563
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#1DA1F2]" /> info@mbsoftech.com.np
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#1DA1F2]" /> Shankamul, Kathmandu, Nepal
              </li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-600 transition"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MBSoftech. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  