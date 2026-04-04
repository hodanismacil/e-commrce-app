
 import React from 'react';
 import {Button }from '../../ui/button';
const Contact: React.FC = () => {

  return (
    <div className="py-20  min-h-screen">
      <div className="max-w-5xl mx-auto px-6 bg-[#062823] rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row">
        
      
        <div className="bg-[#14b83d] p-12 text-[#dcdee6] md:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="mb-8 opacity-80 font-medium text-lg">Halkan noogu soo dir fariin, kooxdayada ayaa  soo jawaabi doonta.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/50 p-3 rounded-full">🍁</div>
                <span className="font-semibold text-sm">hargeisa, somalinad</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/50 p-3 rounded-full">📞</div>
                <span className="font-semibold text-sm">+252 61 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/50 p-3 rounded-full">✉️</div>
                <span className="font-semibold text-sm">hello@eduflex.com</span>
              </div>
            </div>
          </div>
          
          {/* Social icons placeholder */}
          <div className="flex gap-4 mt-10">
            <div className="w-10 h-10 bg-white rounded-full"></div>
            <div className="w-10 h-10 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Midig: Foomka (The Form) */}
        <div className="p-12 md:w-2/3">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-50 ml-2">Full Name</label>
                <input type="text" placeholder="Gali magacaaga" className="w-full p-4 bg-[#1DB954] border-none rounded-2xl focus:ring-2 focus:ring-[#cbd5f6] outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-50 ml-2">Email</label>
                <input type="email" placeholder="example@email.com" className="w-full p-4 bg-[#1DB954] border-none rounded-2xl focus:ring-2 focus:ring-[#eecbf6] outline-none" />
              </div>
            </div>
            
            <div className="space-y-2"> 
              <label className="text-sm font-bold text-gray-700 ml-2">Message</label>
                <textarea placeholder="Gali fariintaada" className="w-full p-4 bg-[#1DB954] border-none rounded-2xl focus:ring-2 focus:ring-[#cbd5f6] outline-none h-32 resize-none"></textarea>
            </div>

            <Button  type="submit" className="bg-[#1DB954] text-[#e5e7f3] px-10 py-4 rounded-full font-bold w-full md:w-auto hover:bg-[#1aa84c] transition-all">
              Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;