import React from "react";
import Magnet from './Magnet';

const StickyStackedCards = () => {
  const cards = [
    {
      tag: "Ecommerce",
      title: "THE ARVAN",
      description:
        "A Modern And Elegant Website For Arvan, Showcasing High-End Fashion With A Minimal, Responsive Design That Highlights Products And Brand Identity.",
      image: "img/arvan.png",
      link: "https://www.thearvan.com",
    },
    {
      tag: "Ecommerce",
      title: "Raas Creation",
      description:
        "Raas Creation is an ethnic fashion brand website with a powerful admin panel and minimal UI design crafted by WebDrave.",
      image: "img/Raas.png",
      link: "https://raascreation.com/", // Add the link here
    },
    {
      tag: "Showcasing Site",
      title: "Petals Foundation",
      description:
        "Petals Foundation is a simple, elegant showcasing website designed by WebDrave to highlight the NGO's mission and initiatives.",
      image: "img/Petals.png",
      link: "https://petalsfoundation.in/", // Add the link here
    },
    {
      tag: "Finance CRM / SaaS Website",
      title: "Navi Mudra",
      description:
        "A CRM platform built for financial service providers to manage leads, loan applications, and customer interactions efficiently.",
      image: "img/nm.png",
      link: "https://www.navimudra.com/", // Add the link here
    },
    {
      tag: "Travel / Tourism Website",
      title: "Anaya Escapes",
      description:
        "A travel agency curating personalized domestic and international trips designed for comfort, culture, and memorable experiences.",
      image: "img/ae.png",
      link: "hhttps://www.anayaescapes.com/", // Add the link here
    },
    {
      tag: "Ecommerce & Wellness",
      title: "Tranquility Lux",
      description:
        "An elegant e-commerce platform for wellness products, featuring a modern design that emphasizes tranquility and luxury. The site offers a seamless shopping experience with a focus on eco-friendly and sustainable products.",
      image: "img/tran.png",
      link: "https://www.tranquilitylux.com",
    },
    {
      tag: "Coming Soon",
      title: "Deuce",
      description: "An exciting new project that's currently in development. Stay tuned for updates!",
      image: "img/Deuce.png",
      comingSoon: true,
      link: "#"
    },
  ];

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      className="relative bg-black min-h-[240vh] py-[10vh] px-4 md:px-8"
    >
      {/* Header Section */}
      <Magnet padding={50} disabled={false} magnetStrength={100}>
        <div className="text-left mb-10">
          <div>
            <p className="text-sm font-spacebold uppercase tracking-wide text-heading">
              2. Projects We Have Worked On
            </p>
            <h2 className="text-4xl font-spacelight mt-2 leading-snug">
              A <span className="text-purple"> glimpse</span> into what we’ve
              built — websites, apps, and <br />
              <span className="text-purple">experiences</span> that{" "}
              <span className="text-purple">speak</span> for themselves.
            </h2>
          </div>
        </div>
      </Magnet>

      <div className="max-w-[95vw] mx-auto relative">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`sticky top-[8vw] z-[${i + 1}] backdrop-blur-md bg-purple/5 border border-purple rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-10 shadow-2xl ${card.comingSoon ? 'relative' : ''}`}
            style={{
              minHeight: "480px",
              marginTop: i === 0 ? 0 : "8vh",
              filter: card.comingSoon ? 'blur(0px)' : 'none',
              opacity: card.comingSoon ? 0.7 : 1,
            }}
          >
            {card.comingSoon && (
              <div className="absolute inset-0 bg-black/70 z-10 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-4xl md:text-6xl font-spacebold text-white mb-4 block">Coming Soon</span>
                  <p className="text-white/80 text-lg">We're working on something amazing!</p>
                </div>
              </div>
            )}
            {/* Left Side - Text */}
            <div className="flex-1 flex flex-col justify-center space-y-5 text-white">
              <span className="inline-block border border-white/30 px-8 py-4 text-sm font-spacelight rounded-md w-fit text-[4vw] md:text-sm">
                {card.tag}
              </span>
              <h2 className="text-[10vw] md:text-7xl font-spacebold">
                {card.title}
              </h2>
              <p className="text-white/70 font-spacelight leading-relaxed text-[4vw] md:text-base">
                {card.description}
              </p>
              <a
                href={card.link} // Use the link property here
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-fit px-6 py-3 bg-purple hover:shadow-[3px_3px_0_#ffffff] active:scale-[97%] active:shadow-[2px_2px_0_#ffffff] text-white text-[3.5vw] md:text-sm font-spacelight rounded-md transition-shadow duration-300"
              >
                Visit The Site
              </a>
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
