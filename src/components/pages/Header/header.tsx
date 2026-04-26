import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <div className=" shadow-sm sticky top-0 z-50">
      {/* NAVBAR responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-green-500">
          TechZone
        </h1>

        {/* Desktop Links (Halkan ayaan ku daray si ay shaashadda weyn ugu muuqdaan) */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-white">
          <Link to="/" className="hover:text-green-500 transition">Home</Link>
          <Link to="/categories" className="hover:text-green-500 transition">Categories</Link>
          <Link to="/products" className="hover:text-green-500 transition">Products</Link>
          <Link to="/Carts" className="hover:text-green-500 transition">Carts</Link>
          <Link to="/contact" className="hover:text-green-500 transition">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          {/* Login Button (Desktop) */}
          <Link to="/login" className="hidden sm:block bg-green-500 text-white px-5 py-2 rounded-xl hover:bg-black transition text-sm">
            Login
          </Link>

          {/* Mobile Menu Button - KAN AYAA KA MAQNAA! */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <nav className="flex flex-col gap-6 p-6 bg-gray-900 absolute top-full left-0 w-full md:hidden text-white shadow-xl">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-green-400 border-b border-gray-800 pb-2">Home</Link>
            <Link to="/categories" onClick={() => setMenuOpen(false)} className="hover:text-green-400 border-b border-gray-800 pb-2">Categories</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-green-400 border-b border-gray-800 pb-2">Products</Link>
            <Link to="/Carts" onClick={() => setMenuOpen(false)} className="hover:text-green-400 border-b border-gray-800 pb-2">Carts</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-green-400 pb-2">Contact</Link>
            <Link to="/login" onClick={() => setMenuOpen(false)} className="bg-green-500 text-center py-3 rounded-lg">Login</Link>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;