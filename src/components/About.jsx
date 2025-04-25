"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Magnet from './Magnet'

function StorySection() {
  return (
    
    <div className="w-[95vw] container mx-auto px-4 mb-20">
      <div className="text-right mb-10">
          <div>
            <p className="text-sm font-spacebold uppercase tracking-wide text-heading">3. Who We Are</p>
            <h2 className="text-4xl font-spacelight mt-2 leading-snug">From sleek <span class='text-purple'>UI/UX</span> to powerful backend systems, we handle<br /> it all <span class='text-purple'>—</span> with a spark of <span class='text-purple'>INNOVATION</span> in every pixel.<br /> We don’t follow <span class='text-purple'>TRENDS</span> — we set them.
            </h2>
          </div>
        </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-6xl text-white font-spacebold mb-6">Our Story</h2>
          <p className="text-white/90 font-spacelight mb-4">
          What began as a spark of creativity between passionate minds has evolved into WebDrave — a full-service creative web development agency. We craft stunning digital experiences that bring brands to life and connect them with the world.
          </p>
          <p className="text-white/90 font-spacelight mb-6">
            Our approach combines strategic thinking, creative design, and technical expertise to deliver solutions that
            drive results and exceed expectations.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="text-purple h-5 w-5" />
              <span className="text-white/75 font-spacelight cursor-pointer hover:text-white transition-all duration-200">Creative-first web design & development</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="text-purple h-5 w-5" />
              <span className="text-white/75 font-spacelight cursor-pointer hover:text-white transition-all duration-200">Skilled team of UI/UX designers, developers & SEO experts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-purple h-5 w-5" />
              <span className="text-white/75 font-spacelight cursor-pointer hover:text-white transition-all duration-200">Tailored solutions focused on your growth</span>
            </div>
          </motion.div>
        </motion.div>
        
      <Magnet padding={50} disabled={false} magnetStrength={20}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-[40vw] rounded-lg overflow-hidden shadow-xl"
        >
          <img src="public\img\About.png" alt="Our agency team" className="w-full h-full hover:scale-[105%] transition-all duration-300" />
        </motion.div>
        </Magnet>
      </div>
    </div>
  )
}

export default StorySection
