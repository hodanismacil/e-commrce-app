import { ShieldCheck, BadgeDollarSign, Laptop, Headset } from "lucide-react";
    
    const Home = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white font-sans">
      
   
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12 lg:px-20 py-20">
        
       
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight leading-tight">
            G502 HERO WIRELESS
          </h1>

          <h2 className="text-lg md:text-xl text-gray-400 mb-6 font-medium">
            Logitech's High Performance Wireless Gaming Mouse
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
            The Razer Ouroboros is outfitted with the most advanced &
            configurable sensor yet, the all-new 8200dpi 4G laser sensor.
            It tracks so precisely, you always hit targets exactly where
            you need to.
          </p>

          <div className="text-[#39FF14] text-2xl font-bold mb-6">
            USD 99.99
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-3 px-8 rounded-sm flex items-center gap-2 transition-all">
              <span>🛒</span> ADD TO CART
            </button>

            <button className="border border-gray-600 hover:border-white py-3 px-8 rounded-sm transition-all">
              MORE DETAILS
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center gap- w-full min-h-[400px]">
          <section>
        {/* BIG TEXT */}
  <h2 className="text-[90px] md:text-[140px] font-black text-[#1DB954] opacity-80 rotate-90 select-none">
    G502
  </h2>
    </section>
  {/* PRODUCT IMAGE */}
  <img
    src="https://media.istockphoto.com/id/1248263998/photo/isolated-high-tech-open-laptop-with-abstract-vibrant-color-screen-on-a-dark-background.jpg?s=2048x2048&w=is&k=20&c=G0hEy5x2echFe_CwiyQzJr6SGBO3g0uIWX0UYyNwB1Q="
    alt="Logitech G502"
    className="w-[280px] md:w-[380px] h-auto z-10 rounded-xl drop-shadow[0_35px_35px_rgba(29,185,84,0.3)] hover:scale-105 transition duration-300  relative"
  />


</div>

      </div>


    


      {/* PRODUCTS SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 text-center">
        <p className="text-[#39FF14] font-semibold tracking-widest text-sm">
          PRODUCTS
        </p>

        <h1 className="text-3xl md:text-4xl font-bold mt-3">
          Which type of gear are you looking for?
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore our premium collection of gaming, office, and design gear
          made for performance and style.
        </p>

        {/* PRODUCT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300">
            <img
              src="https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg"
              alt="Gaming Mouse"
              className="w-40 h-40 object-cover mx-auto rounded-xl"
            />
            <h3 className="text-xl font-semibold mt-5">Gaming</h3>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300">
            <img
              src="https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg"
              alt="Graphic Design"
              className="w-40 h-40 object-cover mx-auto rounded-xl"
            />
            <h3 className="text-xl font-semibold mt-5">Graphic Design</h3>
          </div>

          <div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300">
            <img
              src="https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg"
              alt="Office Gear"
              className="w-40 h-40 object-cover mx-auto rounded-xl"
            />
            <h3 className="text-xl font-semibold mt-5">Office & Others</h3>
          </div>
        </div>
      </section >

      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 text-center">

       
        
        <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20">
  {/* Title */}
  <div className="text-center mb-12">
    <p className="text-[#1DB954] font-semibold tracking-[0.2em] text-sm">
      SERVICES
    </p>
    <h2 className="text-3xl md:text-4xl font-bold mt-3">
      We provide more than high-tech products!
    </h2>
    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      Discover premium service, affordable prices, and reliable support
      designed to enhance your experience.
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Card 1 */}
    <div className="bg-[#222] rounded-2xl p-6 flex gap-4 items-start hover:scale-[1.02] transition duration-300">
      <ShieldCheck className="text-[#1DB954] w-14 h-14 shrink-0 drop-shadow-[0_0_20px_rgba(29,185,84,0.4)]" />
      <div>
        <h3 className="text-white font-semibold text-lg">Lifetime Guarantee</h3>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          Enjoy long-lasting confidence with products built for durability,
          performance, and reliability you can trust every day.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-[#222] rounded-2xl p-6 flex gap-4 items-start hover:scale-[1.02] transition duration-300">
      <BadgeDollarSign className="text-[#1DB954] w-14 h-14 shrink-0 drop-shadow-[0_0_20px_rgba(29,185,84,0.4)]" />
      <div>
        <h3 className="text-white font-semibold text-lg">Good Price</h3>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          Get excellent value with competitive pricing on premium gear
          without compromising on quality or performance.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-[#222] rounded-2xl p-6 flex gap-4 items-start hover:scale-[1.02] transition duration-300">
      <Laptop className="text-[#1DB954] w-14 h-14 shrink-0 drop-shadow-[0_0_20px_rgba(29,185,84,0.4)]" />
      <div>
        <h3 className="text-white font-semibold text-lg">Free Software Updates</h3>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          Stay up to date with the latest features, improvements, and
          enhancements to keep your devices performing at their best.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-[#222] rounded-2xl p-6 flex gap-4 items-start hover:scale-[1.02] transition duration-300">
      <Headset className="text-[#1DB954] w-14 h-14 shrink-0 drop-shadow-[0_0_20px_rgba(29,185,84,0.4)]" />
      <div>
        <h3 className="text-white font-semibold text-lg">24/7 Support</h3>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          Our dedicated support team is available anytime to help you with
          setup, troubleshooting, and product guidance.
        </p>
      </div>
    </div>
  </div>
</section>
  
        

      </section>


      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 flex gap-5">
      
        <div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">
  <img
     src="https://qskinz.com/cdn/shop/files/07VeroneseGreen_3315a8a7-57d9-4d3f-ab6b-4f598e6b4071.png?v=1707834967&width=1080"
    alt="Laptop"
    className="relative z-10 w-28 h-36 object-contain drop-shadow-[0_0_20px_rgba(29,185,84,0.35)]"
  />
  <h3 className="text-xl font-semibold mt-5">ph</h3>
  <p className="text-[#39FF14] font-bold mt-2">$499</p>
  <p className="text-gray-400 text-sm mt-2">
    Powerful laptops for work, gaming, and creative design.
  </p>
  <button className="mt-5 bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold py-2 px-5 rounded-md transition">
    View More
  </button>
</div>

        <div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">
  <img
    src="https://png.pngtree.com/png-clipart/20240518/original/pngtree-illustration-of-a-laptop-with-a-green-screen-on-the-desktop-png-image_15122781.png"
    alt="Laptop"
    className="w-40 h-40 object-contain mx-auto drop-shadow-[0_0_20px_rgba(29,185,84,0.35)]"
  />
  <h3 className="text-xl font-semibold mt-5">Laptop</h3>
  <p className="text-[#39FF14] font-bold mt-2">$499</p>
  <p className="text-gray-400 text-sm mt-2">
    Powerful laptops for work, gaming, and creative design.
  </p>
  <button className="mt-5 bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold py-2 px-5 rounded-md transition">
    View More
  </button>
</div>
<div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">
  <img
    src="https://png.pngtree.com/png-clipart/20240202/original/pngtree-3d-green-screen-smartphone-iphone-with-transparent-background-png-image_14218199.png"
    alt="Mobile"
    className="w-40 h-40 object-contain mx-auto drop-shadow-[0_0_20px_rgba(29,185,84,0.35)]"
  />
  <h3 className="text-xl font-semibold mt-5">Mobile</h3>
  <p className="text-[#39FF14] font-bold mt-2">$40.77</p>
  <p className="text-gray-400 text-sm mt-2">
    Powerful mobile for work, gaming, and creative design.
  </p>
  <button className="mt-5 bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold py-2 px-5 rounded-md transition">
    View More
  </button>
</div>

      </section>


    </div>
  );
};

export default Home;