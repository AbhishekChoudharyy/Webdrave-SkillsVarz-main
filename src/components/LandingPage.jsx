import React from 'react';
import { ArrowRight } from 'lucide-react';
import CircularText from './CircularText';
import Video from './landingvideo';
import RoundedButton from './Button';
import Magnet from './Magnet'

const Landingpage = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden text-white flex items-center justify-center">
      {/* Background (abstract flowing design) */}
      <div className="absolute inset-0 z-0 opacity-80">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="videos/bg video.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className=" relative z-10 flex flex-col items-center text-center px-4">
        <p className="font-spacelight text-sm uppercase tracking-[0.2em] text-gray-400 mb-2">
          Creative Web Design Agency!!
        </p>
        <h1 className="font-spacebold text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-8 max-w-5xl">
          CREATIVE <span class='text-purple'>MINDS</span>. POWERFUL <span class='text-purple'>CODE</span>. WELCOME TO <span class='text-purple'>WEBDRAVE</span>.
        </h1>
        <div className="font-spaceregular flex flex-wrap gap-4 justify-center">

          <Magnet padding={50} disabled={false} magnetStrength={10}>
            <RoundedButton label="Contact" icon={ArrowRight} />
          </Magnet>

          <Magnet padding={50} disabled={false} magnetStrength={10}>
            <RoundedButton label="Explore us" icon={ArrowRight} />
          </Magnet>
        </div>
      </div>

      <div className='absolute bottom-40 left-60 max-sm:top-30 max-sm:left-41'>
        <Video />
      </div>

      {/* Scroll text circle */}

    </section>
  );
};

export default Landingpage;
