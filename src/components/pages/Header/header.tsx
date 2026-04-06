import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className=" shadow-sm sticky top-0 z-50">
      {/* NAVBAR responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between " >
        <h1 className="text-xl sm:text-2xl font-bold text-green-500">
          TechZone
        </h1>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-white  ">
          <Link to="/" className="text-white hover:text-green-500 transition">
            Home
          </Link>
           <Link to="/Products" className="text-white hover:text-green-500 transition">
            products
          </Link>
           <Link to="/Carts" className="text-white hover:text-green-500 transition">
              Carts
          </Link>
            <Link to="/Categories" className="text-white hover:text-green-500 transition">Categories</Link>

            <Link to="/Contact" className="text-white hover:text-green-500 transition">Contact</Link>
           
        </nav>

        < Link to="/login" className="hidden sm:block bg-green-500 text-white px-4 sm:px-5 py-2 rounded-xl hover:bg-black transition text-sm">Login</Link>
      </div>
    </div>
  );
};

export default Header;