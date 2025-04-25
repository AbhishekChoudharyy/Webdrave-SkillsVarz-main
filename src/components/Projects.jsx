import React from "react";
import Magnet from './Magnet'

const StickyStackedCards = () => {
  const cards = [
    {
      tag: "Full Stack",
      title: "THE ARVAN",
      description:
        "A Modern And Elegant Website For Arvan, Showcasing High-End Fashion With A Minimal, Responsive Design That Highlights Products And Brand Identity.",
      image: "img/arvan.png",
    },
    {
      tag: "Three.JS",
      title: "LAND ROVER REDESIGN",
      description:
        "A Premium Redesign Concept For Range Rover – Stunning Visuals, Seamless Motion UX/UI, Smooth Transitions, And A Bold High-End Luxury Experience.",
      image: "img/range rover.png",
    },
    {
      tag: "GSAP",
      title: "ROYAL ENFIELD REDESIGN",
      description:
        "A Rugged Yet Refined Redesign For Royal Enfield – Built To Thrill. A Bold Visual Experience As Powerful As The Ride Itself.",
      image: "img/royal enfield.png",
    },
  ];

  return (
    <div data-scroll data-scroll-section
    data-scroll-speed="0.1"  className="relative bg-black min-h-[240vh] py-[10vh] px-4 md:px-8">
      {/* Header Section */}
      <Magnet padding={50} disabled={false} magnetStrength={100}>
      <div className="text-left mb-10">
          <div>
            <p className="text-sm font-spacebold uppercase tracking-wide text-heading">2. Projects We Have Worked On</p>
            <h2 className="text-4xl font-spacelight mt-2 leading-snug">A <span className='text-purple'> glimpse</span> into what we’ve built — websites, apps, and <br />
             <span className='text-purple'>experiences</span> that <span className='text-purple'>speak</span> for themselves.
            </h2>
          </div>
        </div>
        </Magnet>

      <div className="max-w-[95vw] mx-auto relative">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`sticky top-[8vw] z-[${i + 1}] backdrop-blur-md bg-purple/5 border border-purple rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-10 shadow-2xl`} 
            style={{
              minHeight: "480px",
              marginTop: i === 0 ? 0 : "8vh",
            }}
          >
            {/* Left Side - Text */}
            <div className="flex-1 flex flex-col justify-center space-y-5 text-white">
              <span className="inline-block border border-white/30 px-8 py-4 text-sm font-spacelight rounded-md w-fit text-[4vw] md:text-sm">
                {card.tag}
              </span>
              <h2 className="text-[10vw] md:text-7xl font-spacebold">{card.title}</h2>
              <p className="text-white/70 font-spacelight leading-relaxed text-[4vw] md:text-base">
                {card.description}
              </p>
              <button className="mt-4 w-fit px-6 py-3 bg-purple hover:shadow-[3px_3px_0_#ffffff] active:scale-[97%] active:shadow-[2px_2px_0_#ffffff] text-white text-[3.5vw] md:text-sm font-spacelight rounded-md transition-shadow duration-300">
                Visit The Site
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="rounded w-[80vw] md:w-[30vw] flex-1 flex items-center justify-center overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="rounded-xl w-full h-auto border border-purple max-w-2xl object-cover transition-transform duration-300 transform hover:scale-105"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "80vw",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyStackedCards;