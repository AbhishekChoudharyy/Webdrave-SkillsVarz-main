import React, { useState } from 'react';

const WhyChooseWebdraveDark = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const benefits = [
    {
      id: 1,
      number: '1.',
      text: 'Pricing based on client budget.',
      image: 'img/wcu1.png'
    },
    {
      id: 2,
      number: '2.',
      text: 'Transparent and Timely Delivery',
      image: 'img/wcu2.png'
    },
    {
      id: 3,
      number: '3.',
      text: 'High Focus On Creativity and User Experience',
      image: 'img/wcu3.png'
    },
    {
      id: 4,
      number: '4.',
      text: 'Strong Client Communication & Support',
      image: 'img/wcu4.png'
    }
  ];

  return (
    <section data-scroll data-scroll-section
    data-scroll-speed="0.1" className="relative w-full py-20 bg-black font-sans overflow-hidden">
      
      <div className="max-w-[1] mx-auto px-10">
        {/* Header */}
        <div className="text-left mb-10">
          <div>
            <p className="text-sm font-spacebold uppercase tracking-wide text-heading">4. Why Choose WebDrave</p>
            <h2 className="text-4xl font-spacelight mt-2 leading-snug">We combine <span class='text-purple'>creativity</span>, <span class='text-purple'>commitment</span>, and <br /><span class='text-purple'>clear communication</span> to launch your vision to the next level.
            </h2>
          </div>
        </div>
        
        {/* Benefits List */}
        <div className="flex flex-col gap-3">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className={`relative rounded-lg flex items-center border border-purple py-20 px-10 transition-all duration-900 ease-[cubic-bezier(0.25,0.8,0.25,1)] overflow-hidden bg-[#0A0A0A] z-10
                ${hoveredItem === benefit.id ? 'tshadow-[-10px_0_30px_rgba(126,34,206,0.3)] bg-purple' : ''}`}
              onMouseEnter={() => setHoveredItem(benefit.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image that appears from left on hover */}
              <div className={`absolute left-[-250px] top-1/2 -translate-y-1/2 w-fit h-fit z-0 transition-all duration-1500 ease-[cubic-bezier(0.25,0.8,0.25,1)] 
                ${hoveredItem === benefit.id ? 'left-[20px] opacity-100' : 'opacity-0'}`}>
                <img 
                  src={benefit.image} 
                  alt={benefit.text} 
                  className="w-full h-full object-cover rounded-xl border-2 border-purple shadow-lg"
                  loading="lazy"
                />
              </div>
              
              {/* Number */}
              <span className={`font-spacelight text-[32px] leading-[1.2] text-white min-w-[40px] transition-all duration-1200 ease
                ${hoveredItem === benefit.id ? 'ml-[270px]' : ''}`}>
                {benefit.number}
              </span>
              
              {/* Text */}
              <p className={`font-spacelight text-[32px] leading-[1.2] text-white m-0 ml-5 flex-grow transition-all duration-1500 ease
                ${hoveredItem === benefit.id ? 'translate-x-8 ml-[270px]' : ''}`}>
                {benefit.text}
              </p>
              
              {/* Arrow Indicator */}
              <div className={`w-fit h-fit ml-5 transition-all duration-400 ease opacity-90 -rotate-0
                ${hoveredItem === benefit.id ? 'translate-x-5 -rotate-30 opacity-100' : ''}`}>
                <svg width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseWebdraveDark;