import { motion } from 'framer-motion'
import { personalInfo } from '../constants'
import NeuralCanvas from './NeuralCanvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">

      {/* 3D Neural network — right side */}
      <div className="absolute right-0 top-0 w-full sm:w-[55%] h-full pointer-events-none z-0">
        <NeuralCanvas />
      </div>

      {/* Left content */}
      <div className="absolute inset-0 top-[100px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 z-10">
        {/* accent line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4f9eff] shadow-glow" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="max-w-xl">
          <h1 className="font-black text-white lg:text-[72px] sm:text-[56px] xs:text-[46px] text-[36px] lg:leading-[88px] mt-2">
            Hi, I'm{' '}
            <span className="text-[#4f9eff]">{personalInfo.name}</span>
          </h1>

          {/* Role */}
          <p className="font-semibold lg:text-[28px] sm:text-[22px] text-[18px] mt-3">
            <span className="text-[#9b6bff]">AI & ML Engineer</span>
          </p>

          <p className="text-[#8da5c4] text-[16px] max-w-md leading-[28px] mt-4">
            {personalInfo.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#8da5c4]">
            <span>📍 {personalInfo.location}</span>
            <span>🎓 {personalInfo.college.split(',')[0]}</span>
            <span>📊 CGPA: {personalInfo.cgpa}</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-[#0077b5] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#005f8e] transition"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="bg-[#4f9eff] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#3a88e8] transition shadow-glow"
            >
              GitHub
            </a>
            {/* Replace the href below with your raw GitHub PDF URL once uploaded:
                https://raw.githubusercontent.com/Devendiran-T/portfolio/main/public/resume.pdf */}
            <a
              href={personalInfo.resumeUrl || '#'}
              download="Devendiran_T_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-[#9b6bff] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#7c4fd4] transition shadow-glow"
            >
              ⬇ Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#4f9eff] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-[#4f9eff] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
