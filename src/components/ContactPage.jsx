import React from 'react';
import Magnet from './Magnet'

const ContactSection = () => {
  return (
    <section data-scroll data-scroll-section
    data-scroll-speed="0.1" className="w-100vh min-h-screen bg-[#171717] py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-10 relative overflow-hidden">


      {/* Header */}
      <div className="z-10 text-center mb-10">
          <div>
            <p className="text-sm font-spacebold uppercase tracking-wide text-heading">6. Get In Touch</p>
            <h2 className="text-6xl font-spacebold mt-2 leading-snug uppercase">Contact With Us Now For your dream website.
            </h2>
          </div>
        </div>

      {/* Form */}
      <div class='w-full flex flex-col md:flex-row items-center justify-between gap-8'>
      <div className="w-[50%] mx-auto">
        <div className="mb-12 border-b border-[#8C8C8C] pb-2">
          <label className="block text-sm sm:text-base md:text-lg uppercase text-[#919191] tracking-wider mb-1">
            Full Name
          </label>
          <input 
            type="text" 
            className="w-full bg-transparent text-white outline-none text-lg sm:text-xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="border-b border-[#8C8C8C] pb-2">
            <label className="block text-sm sm:text-base md:text-lg uppercase text-[#919191] tracking-wider mb-1">
              Email
            </label>
            <input 
              type="email" 
              className="w-full bg-transparent text-white outline-none text-lg sm:text-xl"
            />
          </div>
          <div className="border-b border-[#8C8C8C] pb-2">
            <label className="block text-sm sm:text-base md:text-lg uppercase text-[#919191] tracking-wider mb-1">
              Phone
            </label>
            <input 
              type="tel" 
              className="w-full bg-transparent text-white outline-none text-lg sm:text-xl"
            />
          </div>
        </div>

        <div className="border-b border-[#8C8C8C] pb-2 mb-12">
          <label className="block text-sm sm:text-base md:text-lg uppercase text-[#919191] tracking-wider mb-1">
            Message
          </label>
          <textarea
            rows="2"
            className="w-full bg-transparent text-white outline-none text-lg sm:text-xl resize-none"
          />
        </div>

        <button className="mt-4 w-fit px-10 py-4 bg-purple hover:shadow-[3px_3px_0_#ffffff] active:scale-[97%] active:shadow-[2px_2px_0_#ffffff] text-white text-md font-spacelight rounded-md transition-shadow duration-300 ">
                Submit
              </button>
      </div>
      <Magnet padding={50} disabled={false} magnetStrength={15}>
      <div><img class='hover:scale-[105%] transition-all duration-200' src="public\img\contact.png" alt="" srcset="" /></div></Magnet>
      </div>
     
    </section>
  );
};

export default ContactSection;