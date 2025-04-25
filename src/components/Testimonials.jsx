import React, { useRef, useEffect, useState } from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Khushwant Singh",
            role: "Co-Founder WebDrave",
            text: "WebDrave exceeded our expectations! Their design and development skills brought our brand to life online.",
            bgColor: "bg-white",
            textColor: "text-black",
            starColor: "#5B68E4",
        },
        {
            id: 2,
            name: "Dev Dheer",
            role: "UI Designer",
            text: "Super professional, quick turnaround, and top-tier quality. The team nailed our vision perfectly.",
            bgColor: "bg-[#5B68E4]",
            textColor: "text-white",
            starColor: "#FFFFFF",
        },
        {
            id: 3,
            name: "Abhishek Chaudhary",
            role: "CEO of WebDrave",
            text: "Incredible attention to detail and creative solutions. Our website traffic increased by 200% after their redesign.",
            bgColor: "bg-white",
            textColor: "text-black",
            starColor: "#5B68E4",
        },
        {
            id: 4,
            name: "Aditya Bansal",
            role: "Creative Developer",
            text: "The most reliable development team we've worked with. They deliver on time and exceed expectations.",
            bgColor: "bg-[#5B68E4]",
            textColor: "text-white",
            starColor: "#FFFFFF",
        },
        {
            id: 5,
            name: "Koushal Jha",
            role: "SEO Expert",
            text: "Transformed our mobile app experience completely. User engagement skyrocketed after their redesign.",
            bgColor: "bg-white",
            textColor: "text-black",
            starColor: "#5B68E4",
        },
    ];

    const repeated = [...testimonials, ...testimonials]; // Repeat testimonials for infinite scroll effect
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    // Auto scroll logic
    useEffect(() => {
        let animationFrameId;
        const scrollSpeed = 0.5;

        const scroll = () => {
            if (!isPaused && scrollRef.current) {
                scrollRef.current.scrollLeft += scrollSpeed;

                // Reset scroll for infinite effect
                if (
                    scrollRef.current.scrollLeft >=
                    scrollRef.current.scrollWidth / 2
                ) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        scroll();

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    // Drag-to-pan logic
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleDown = (e) => {
            isDragging.current = true;
            startX.current = e.pageX || e.touches[0].pageX;
            scrollLeft.current = container.scrollLeft;
            container.style.cursor = 'grabbing';
        };

        const handleMove = (e) => {
            if (!isDragging.current) return;
            const x = e.pageX || e.touches[0].pageX;
            const walk = (x - startX.current) * 1.5;
            container.scrollLeft = scrollLeft.current - walk;
        };

        const handleUp = () => {
            isDragging.current = false;
            container.style.cursor = 'grab';
        };

        container.addEventListener('mousedown', handleDown);
        container.addEventListener('mousemove', handleMove);
        container.addEventListener('mouseup', handleUp);
        container.addEventListener('mouseleave', handleUp);

        container.addEventListener('touchstart', handleDown);
        container.addEventListener('touchmove', handleMove);
        container.addEventListener('touchend', handleUp);

        return () => {
            container.removeEventListener('mousedown', handleDown);
            container.removeEventListener('mousemove', handleMove);
            container.removeEventListener('mouseup', handleUp);
            container.removeEventListener('mouseleave', handleUp);

            container.removeEventListener('touchstart', handleDown);
            container.removeEventListener('touchmove', handleMove);
            container.removeEventListener('touchend', handleUp);
        };
    }, []);

    return (
        <section className="relative w-full py-16 bg-black">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-right mb-10">
                <div>
             <p className="text-sm font-spacebold uppercase tracking-wide text-heading">5. What Our Clients Say</p>
             <h2 className="text-4xl font-spacelight mt-2 leading-snug">Hear it from those who’ve <span class='text-purple'>worked</span> with<br /> us — real <span class='text-purple'>feedback</span>, real results.
             </h2>
             </div>
             </div>

                {/* Slider */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-scroll scrollbar-hide cursor-grab"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    style={{ scrollBehavior: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                >
                    {repeated.map((t, index) => (
                        <div key={index} className="w-[300px] h-[400px] flex-shrink-0">
                            <div className={`${t.bgColor} rounded-xl h-full p-6 flex flex-col relative`}>
                                <div className="flex gap-2 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5 0L14.081 7.9463H22.4616L15.6903 12.8574L18.2713 20.8037L11.5 15.8926L4.72871 20.8037L7.3097 12.8574L0.538408 7.9463H8.91899L11.5 0Z"
                                                fill={t.starColor}
                                            />
                                        </svg>
                                    ))}
                                </div>
                                <h3 className={`text-xl font-spacebold ${t.textColor} mb-4`}>{t.name}</h3>
                                <p className={`text-lg font-spaceregular ${t.textColor} mb-4`}>{t.role}</p>
                                <p className={`text-sm font-spacelight ${t.textColor}`}>{t.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
