import { projects } from '../constants'
import BrainMesh from './bg3d/BrainMesh'

const ProjectCard = ({ name, description, tags, source_code_link }) => (
  <div
    className="p-5 rounded-2xl w-full sm:w-[360px]"
    style={{ background: 'rgba(2,6,23,0.55)' }}
  >
    <div className="relative w-full h-[180px] bg-[#071020] rounded-xl flex items-center justify-center">
      <span className="text-[#4f9eff] text-5xl font-mono">{'</>'}</span>
    </div>
    <div className="mt-5">
      <h3
        className="text-white font-bold text-[20px]"
        style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
      >
        {name}
      </h3>
      <p
        className="mt-2 text-[#ccd6f6] text-[14px] leading-[22px]"
        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
      >
        {description}
      </p>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag.name} className={`text-[13px] ${tag.color}`}>
          #{tag.name}
        </span>
      ))}
    </div>
    <a
      href={source_code_link}
      target="_blank"
      rel="noreferrer"
      className="mt-4 inline-block text-sm text-[#4f9eff] hover:underline"
    >
      View on GitHub →
    </a>
  </div>
)

const Projects = () => {
  return (
    <section
      id="projects"
      style={{ position: 'relative', padding: '80px 24px', overflow: 'hidden' }}
    >
      {/* ── z-0: Full-screen 3D brain — NO opacity, NO overlay ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}>
        <BrainMesh />
      </div>

      {/* ── z-10: Content on top ── */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '80rem', margin: '0 auto' }}>
        <p
          className="text-[#8da5c4] text-[17px] uppercase tracking-wider"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,1)' }}
        >
          My work
        </p>
        <h2
          className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,1)' }}
        >
          Projects
        </h2>
        <p
          className="mt-3 text-[#ccd6f6] text-[17px] max-w-3xl leading-[30px]"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}
        >
          Real-world projects demonstrating my skills in AI, ML, Computer Vision, and Full Stack development.
        </p>
        <div className="mt-10 flex flex-wrap gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
