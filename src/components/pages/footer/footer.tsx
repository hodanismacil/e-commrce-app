
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

import {  MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white border-t border-[#1DB954]/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-[#1DB954]">TechZone</h2>
            <p className="text-gray-400 mt-4 leading-7 text-sm">
              Discover premium laptops, mobiles, and smartwatches designed
              for performance, style, and modern living.
            </p>

          <div className="flex gap-4 text-2xl">
           
  < FaFacebookF className="text-white hover:text-[#1DB954] cursor-pointer transition" />
  <FaInstagram className="text-white hover:text-[#1DB954] cursor-pointer transition" />
  <FaTwitter className="text-white hover:text-[#1DB954] cursor-pointer transition" />
  <FaYoutube className="text-white hover:text-[#1DB954] cursor-pointer transition" />
  <FaWhatsapp className="text-white hover:text-[#1DB954] cursor-pointer transition" />
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="/" className="hover:text-[#1DB954] transition">Home</a>
              </li>
              <li>
                <a href="/products" className="hover:text-[#1DB954] transition">Products</a>
              </li>
              <li>
                <a href="/cart" className="hover:text-[#1DB954] transition">Cart</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#1DB954] transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Categories</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-[#1DB954] transition cursor-pointer">Laptops</li>
              <li className="hover:text-[#1DB954] transition cursor-pointer">Mobiles</li>
              <li className="hover:text-[#1DB954] transition cursor-pointer">Smart Watches</li>
              <li className="hover:text-[#1DB954] transition cursor-pointer">Accessories</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#1DB954] mt-1" size={18} />
                <span>Hargeisa, Somaliland</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-[#1DB954] mt-1" size={18} />
                <span>+252 63 0000000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[#1DB954] mt-1" size={18} />
                <span>support@techzone.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 TechZone. All rights reserved.</p>
          <p className="mt-3 md:mt-0">
            Designed with 💚 for modern tech shopping
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;