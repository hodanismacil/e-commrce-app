
import { ShieldCheck, BadgeDollarSign, Laptop, Headset } from "lucide-react";
    

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-8 items-center text-center mt-6">
      <p className="text-3xl font-bold text-[#1DB954]">Categories</p>
      <h1 className="text-2xl md:text-3xl font-semibold mt-5 text-white">
      Which type of gear are you looking for?
      </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Find the perfect devices for gaming, creative work, and everyday office use.
        </p>
        
         {/* {cards categorys} */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 text-center">
          <div  className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300">
                <div className="bg-[#2a2a2a]  rounded-2xl w-full flex items-center justify-center relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1604586398467-32924c78b879?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gaming" className=" relative  z-10 w-[170] h-[150] object-contain drop-shadow--[0_0_20px_rgba(29,185,84,0.35)]" />
                </div>
              <h1 className="text-xl font-bold text-white mt-4">Gaming</h1>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                     High-performance devices built for speed, power, and immersive gaming.

              </p>
            </div>
             <div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300">
                <div className="bg-[#2a2a2a]  rounded-2xl w-full flex items-center justify-center relative overflow-hidden">
                  <img src="https://media.istockphoto.com/id/1241812076/photo/gamepad-with-neon-blue-pink-light-gaming-concept.jpg?s=2048x2048&w=is&k=20&c=lwJErdYrpkcxlLbF10y0PVhlurjet2d7YHgv7AeGVDc=" alt="Gaming" className=" relative  z-10 w-[170] h-[150] object-contain drop-shadow--[0_0_20px_rgba(29,185,84,0.35)]" />
                </div>
              <h1 className="text-xl font-bold text-white mt-4">Gaming</h1>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                     High-performance devices built for speed, power, and immersive gaming.

              </p>
            </div>
             <div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300">
                <div className="bg-[#2a2a2a]  rounded-2xl w-full flex items-center justify-center relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gaming" className=" relative  z-10 w-[170] h-[150] object-contain drop-shadow--[0_0_20px_rgba(29,185,84,0.35)]" />
                </div>
              <h1 className="text-xl font-bold text-white mt-4">Gaming</h1>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                     High-performance devices built for speed, power, and immersive gaming.

              </p>
            </div>

          </div>


        </section>
      {/* {graphis design} */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 text-center">
            <p className="text-[#39FF14] font-semibold tracking-widest text-sm">
                EXPLORE OUR CATEGORIES
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mt-3">
                Find the perfect devices for gaming, creative work, and everyday office use.
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Explore our premium collection of gaming, office, and design gear
                made for performance and style.
            </p>   

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300">
            <div className="bg-[#2a2a2a]  rounded-2xl w-full flex items-center justify-center relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gaming" className=" relative  z-10 w-[170] h-[150] object-contain drop-shadow--[0_0_20px_rgba(29,185,84,0.35)]" />
            </div>
          <h1 className="text-xl font-bold text-white mt-4">Graphic Design</h1>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            Creative tools and premium laptops designed for editing and design work.
          </p>

      </div>
      <div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300">
            <div className="bg-[#2a2a2a]  rounded-2xl w-full flex items-center justify-center relative overflow-hidden">
              <img src="https://media.istockphoto.com/id/1188848418/photo/responsive-design-ux-website.jpg?s=2048x2048&w=is&k=20&c=Y4W_am47LitzMtx4Txwjnc8duwmuwBbEuU9xUJpCh28=" alt="Gaming" className=" relative  z-10 w-[170] h-[150] object-contain drop-shadow--[0_0_20px_rgba(29,185,84,0.35)]" />
            </div>
          <h1 className="text-xl font-bold text-white mt-4">Graphic Design</h1>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            Creative tools and premium laptops designed for editing and design work.
          </p>

      </div>
      <div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300">
            <div className="bg-[#2a2a2a]  rounded-2xl w-full flex items-center justify-center relative overflow-hidden">
              <img src="https://media.istockphoto.com/id/1483748248/photo/digital-wireframe-design-for-web-or-mobile-app-ui-on-laptop-scrutinize.jpg?s=2048x2048&w=is&k=20&c=-UaAuYRNEkFR46nB9duJlrYVwWAI9gH-KpLrSBKN6uA=" alt="Gaming" className=" relative  z-10 w-[170] h-[150] object-contain drop-shadow--[0_0_20px_rgba(29,185,84,0.35)]" />
            </div>
          <h1 className="text-xl font-bold text-white mt-4">Graphic Design</h1>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            Creative tools and premium laptops designed for editing and design work.
          </p>


      </div>
     </div>

        
            

            </section>
            {/* {mobile} */}
            <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 text-center">
                <h2 className="text-[#39FF14] font-semibold tracking-widest text-sm">Mobile Devices</h2>
                <p className="text-gray-400 mt-4">
                    Discover our range of smartphones and tablets designed for performance and style.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300">
                        <div className="bg-[#2a2a2a]  rounded-2xl w-full flex items-center justify-center relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?q=80&w=1301&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mobile" className=" relative  z-10 w-[170] h-[150] object-contain drop-shadow--[0_0_20px_rgba(29,185,84,0.35)]" />
                        </div>
                        <h1 className="text-xl font-bold text-[#39FF14] mt-4">Smartphones</h1>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                            Stay connected with our latest smartphone models, designed for performance and style.
                        </p>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300">
                        <div className="bg-[#2a2a2a]  rounded-2xl w-full flex items-center justify-center relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1589102361623-e1b443030843?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tablet" className=" relative  z-10 w-[170] h-[150] object-contain drop-shadow--[0_0_20px_rgba(29,185,84,0.35)]" />
                        </div>
                        <h1 className="text-xl font-bold text-[#39FF14] mt-4">Tablets</h1>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                            Experience seamless performance and stunning visuals with our latest tablet models.
                        </p>
                    </div>
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 hover:scale-105 transition duration-300">
                        <div className="bg-[#2a2a2a]  rounded-2xl w-full flex items-center justify-center relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1697490057407-34c996cab84f?q=80&w=895&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Smartwatch" className=" relative  z-10 w-[170] h-[150] object-contain drop-shadow--[0_0_20px_rgba(29,185,84,0.35)]" />
                        </div>
                        <h1 className="text-xl font-bold text-[#39FF14] mt-4">Smartwatches</h1>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                            Stay connected and track your fitness with our latest smartwatch models.
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6   mt-30">
    
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
             
    </div>
  );
};

export default Categories;