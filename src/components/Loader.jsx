import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  const loaderRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(loaderRef.current, {
      opacity: 0,
      scale: 3,
      duration: 0.8,
      ease: "power3.out",
    })
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.6,
      delay: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center animate-pulse z-100" ref={loaderRef}>
      <img src="/img/logo.svg"/> 
    </div>
  );
};

export default Loader;