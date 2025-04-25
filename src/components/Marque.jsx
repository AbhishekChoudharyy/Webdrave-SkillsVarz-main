import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-20 bg-black rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[14vw] leading-none font-spacebold uppercase py-[3vw] -mt-[1.5vw] -mb-[1vw] font-semibold pr-[1r]"
        >
          DESIGNING THE <span class="text-[#5B68E4]">FUTURE -</span>
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[14vw] leading-none font-spacebold uppercase py-[3vw] -mt-[1.5vw] -mb-[1vw] font-semibold pr-[1r]"
        >
          DESIGNING THE FUTURE
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;