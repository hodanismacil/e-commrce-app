import { Headset, BadgeDollarSign, Laptop } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../utils/cart";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      category: "Smart Watch",
      name: "PH Watch",
      price: 499,
      image:
        "https://plus.unsplash.com/premium_photo-1681566925270-e339197dbe66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Stylish watch built for fitness, work, and everyday lifestyle.",
    },
    {
      id: 2,
      category: "Laptop",
      name: "HP Laptop",
      price: 499,
      image:
        "https://png.pngtree.com/png-clipart/20240518/original/pngtree-illustration-of-a-laptop-with-a-green-screen-on-the-desktop-png-image_15122781.png",
      description:
        "Powerful laptops for work, gaming, productivity, and creative design.",
    },
    {
      id: 3,
      category: "Laptop",
      name: "Gaming Laptop",
      price: 499,
      image:
        "https://plus.unsplash.com/premium_photo-1733317312273-a37561012283?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Premium gaming laptop built for performance and smooth speed.",
    },
    {
      id: 4,
      category: "Mobile",
      name: "iphone pro Mobile",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1758770478125-4850521fd941?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Stylish mobile built for work and everyday lifestyle.",
    },
    {
      id: 5,
      category: "Mobile",
      name: "Samsung Mobile Pro",
      price: 599,
      image:
        "https://media.istockphoto.com/id/604023846/photo/smartphone-mobile-phone-realistic-3d-rendering-isolated-on-white.webp?s=2048x2048&w=is&k=20&c=rV_8VskoRQqt5sHQEorgyBZqGnxd8njmatOCgEefUZ0=",
      description:
        "Modern smartphone with premium style and clean performance.",
    },
    {
      id: 6,
      category: "Mobile",
      name: "iPhone",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Premium iPhone for performance, style, and everyday use.",
    },
    {
      id: 7,
      category: "Smart Watch",
      name: "Apple Watch",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Stylish smartwatch built for fitness and everyday life.",
    },
    {
      id: 8,
      category: "Smart Watch",
      name: "Apple Watch Sport",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Smartwatch with modern features and premium design.",
    },
    {
      id: 9,
      category: "Smart Watch",
      name: "Apple Watch Ultra",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1767903622395-5677faed2b7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Premium smartwatch for work, health, and style.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-[#111] min-h-screen">
      {/* Heading */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="text-center mb-14">
          <p className="text-[#39ff14] font-semibold tracking-[4px] text-sm uppercase">
            Product
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Which type of gear are you looking for?
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Explore our premium collection of laptops, mobiles, and smartwatches
            designed for performance and style.
          </p>
        </div>

        {/* Product Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#1a1a1a] rounded-3xl p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="bg-[#2a2a2a] rounded-[28px] h-[220px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute w-32 h-32 bg-[#1DB954]/20 rounded-full blur-3xl"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 w-[170px] h-[150px] object-contain drop-shadow-[0_0_20px_rgba(29,185,84,0.35)]"
                />
              </div>

              <h4 className="text-[#39ff14] text-sm mt-6 font-semibold uppercase tracking-wide">
                {product.category}
              </h4>
              <h3 className="text-white text-2xl font-bold mt-2">
                {product.name}
              </h3>
              <p className="text-[#39FF14] text-2xl font-bold mt-2">
                ${product.price}
              </p>
              <p className="text-gray-400 text-sm mt-3 leading-7">
                {product.description}
              </p>
              <p className="text-gray-400 text-sm mt-3 leading-7">✨✨✨</p>

              <button
                type="button"
                onClick={() => {
                  addToCart(product);
                  navigate("/carts");
                }}
                className="mt-6 bg-[#1DB954] text-black px-4 py-3 rounded-lg hover:bg-[#1ed760] transition w-full font-semibold"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-[#222] rounded-2xl p-6 flex gap-4 items-start hover:scale-[1.02] transition duration-300">
          <Headset className="text-[#1DB954] w-14 h-14 shrink-0 drop-shadow-[0_0_20px_rgba(29,185,84,0.4)]" />
          <div>
            <h3 className="text-white font-semibold text-lg">Good Price</h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Get excellent value with competitive pricing on premium gear
              without compromising on quality or performance.
            </p>
          </div>
        </div>

        <div className="bg-[#222] rounded-2xl p-6 flex gap-4 items-start hover:scale-[1.02] transition duration-300">
          <BadgeDollarSign className="text-[#1DB954] w-14 h-14 shrink-0 drop-shadow-[0_0_20px_rgba(29,185,84,0.4)]" />
          <div>
            <h3 className="text-white font-semibold text-lg">
              Lifetime Guarantee
            </h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Our dedicated support team is available anytime to help you with
              setup, troubleshooting, and product guidance.
            </p>
          </div>
        </div>

        <div className="bg-[#222] rounded-2xl p-6 flex gap-4 items-start hover:scale-[1.02] transition duration-300">
          <Laptop className="text-[#1DB954] w-14 h-14 shrink-0 drop-shadow-[0_0_20px_rgba(29,185,84,0.4)]" />
          <div>
            <h3 className="text-white font-semibold text-lg">
              Free Software Updates
            </h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Stay up to date with the latest features, improvements, and
              enhancements to keep your devices performing at their best.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;