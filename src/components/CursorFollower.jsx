// src/components/Cursor.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    // Run the check on load and on resize
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Hide the cursor on mobile devices
      if (cursorRef.current) {
        cursorRef.current.style.display = "none";
      }
      return; // Exit early for mobile devices
    }

    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX + 10,
        y: e.clientY + 10,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const addHoverEffect = () => {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: "rgba(255,255,255,1)",
        mixBlendMode: "difference",
      });
    };

    const removeHoverEffect = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white",
        mixBlendMode: "normal",
      });
    };

    // Hover Targets
    const hoverElementsOne = document.querySelectorAll(
      "button, a, .magnet, .cursor-hover, img"
    );

    hoverElementsOne.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverElementsOne.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, [isMobile]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
    ></div>
  );
};

export default Cursor;