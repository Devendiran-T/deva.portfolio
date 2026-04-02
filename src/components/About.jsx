import { motion } from 'framer-motion'
import { personalInfo, services, technologies, technicalSkills } from '../constants'
import AIBrain from './AIBrain'

const SKILLS = [
  'Python',
  'Machine Learning',
  'React.js',
  'Computer Vision (YOLO)',
  'Cloud (AWS / Azure)',
]

const STATS = [
  { value: '8.2', label: 'CGPA' },
  { value: '2+',  label: 'Internships' },
  { value: '3+',  label: 'Projects' },
  { value: '10+', label: 'Technologies' },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' } }),
}

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">

      {/* AIBrain — fixed left background, low opacity */}
      <div className="absolute left-[-60px] top-[50px] w-[480px] h-[480px] opacity-20 pointer-events-none z-0">
        <AIBrain />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* ── Section label ── */}
        <motion.p
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }} viewport={{ once: true }}
          className="text-[#4f9eff] text-[13px] uppercase tracking-[4px] font-semibold"
        >
          ✦ Introduction
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
          className="text-white font-black md:text-[58px] sm:text-[46px] text-[32px] leading-tight mt-1"
        >
          About <span className="text-[#4f9eff]">Me</span>
        </motion.h2>

        {/* ── Main two-column layout ── */}
        <div className="mt-10 flex flex-col lg:flex-row items-center gap-10">

          {/* LEFT — text content */}
          <div className="flex-1 flex flex-col gap-8">

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="text-[#8da5c4] text-[16px] leading-[30px] max-w-xl"
            >
              I'm <span className="text-white font-semibold">{personalInfo.name}</span>, a B.Tech AI &amp; Data Science
              student at <span className="text-[#4f9eff]">{personalInfo.college}</span> (Batch {personalInfo.duration}),
              with a CGPA of <span className="text-white font-semibold">{personalInfo.cgpa}</span>.
              I build intelligent systems using Python, Machine Learning, Deep Learning, and modern web technologies.
              Passionate about Computer Vision, Cloud Computing, and creating impactful AI-driven applications.
            </motion.p>

            {/* Floating stats row */}
            <div className="flex flex-wrap gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-[#0a1628] rounded-2xl px-6 py-4 text-center min-w-[90px] transition"
                >
                  <p className="text-[#4f9eff] text-[26px] font-black leading-none">{s.value}</p>
                  <p className="text-[#8da5c4] text-[12px] mt-1 uppercase tracking-wider">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Service tags */}
            <div className="flex flex-wrap gap-3">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-[#0a1628] rounded-full px-5 py-2 text-white text-sm font-medium transition"
                >
                  {s.title}
                </motion.div>
              ))}
            </div>

            {/* Core skills */}
            <div>
              <p className="text-[#8da5c4] text-[13px] uppercase tracking-[3px] mb-3">Core Skills</p>
              <ul className="flex flex-col gap-2">
                {SKILLS.map((skill, i) => (
                  <motion.li
                    key={skill}
                    custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="flex items-center gap-3 text-white text-[15px] font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4f9eff] shrink-0" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — 3D AI Brain */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }} viewport={{ once: true }}
            className="w-full lg:w-[480px] h-[420px] lg:h-[520px] shrink-0 relative"
          >
            {/* floating label badges */}
            <div className="absolute top-6 left-4 z-20 bg-[#0a1628cc] border border-[#4f9eff44] backdrop-blur-sm rounded-xl px-3 py-2 text-xs text-[#4f9eff] font-semibold animate-pulse">
              🧠 Neural Network
            </div>
            <div className="absolute bottom-10 left-2 z-20 bg-[#0a1628cc] border border-[#9b6bff44] backdrop-blur-sm rounded-xl px-3 py-2 text-xs text-[#9b6bff] font-semibold animate-pulse" style={{ animationDelay: '0.8s' }}>
              ⚡ Deep Learning
            </div>
            <div className="absolute top-1/2 right-2 z-20 bg-[#0a1628cc] border border-[#4f9eff44] backdrop-blur-sm rounded-xl px-3 py-2 text-xs text-[#4f9eff] font-semibold animate-pulse" style={{ animationDelay: '1.4s' }}>
              🤖 AI Model
            </div>
            <AIBrain />
          </motion.div>
        </div>

        {/* ── Technical Skills grid ── */}
        <div className="mt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="text-[#4f9eff] text-[13px] uppercase tracking-[4px] font-semibold mb-2"
          >
            ✦ Expertise
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
            className="text-white font-black text-[32px] mb-8"
          >
            Technical <span className="text-[#9b6bff]">Skills</span>
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSkills.map((group, i) => (
              <motion.div
                key={group.category}
                custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-[#0a1628] rounded-2xl p-5 transition group"
              >
                <p className="text-white font-semibold text-[14px] mb-3 flex items-center gap-2 group-hover:text-[#4f9eff] transition">
                  <span className="text-lg">{group.icon}</span> {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="bg-[#071020] text-[#4f9eff] text-[11px] px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Technologies ── */}
        <div className="mt-14">
          <p className="text-[#8da5c4] text-[13px] uppercase tracking-[3px] mb-4">Technologies</p>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, i) => (
              <motion.span
                key={tech.name}
                custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-[#071020] text-white px-4 py-2 rounded-full text-sm border border-[#4f9eff55] hover:border-[#4f9eff] hover:text-[#4f9eff] transition cursor-default"
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
    
  )
}

export default About
