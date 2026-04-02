import { experiences } from '../constants'
import FloatingCube from './bg3d/FloatingCube'

const Experience = () => {
  return (
    <section
      id="work"
      className="section-bg relative px-6 py-20"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(135deg, rgba(2,6,23,0.82) 0%, rgba(5,13,40,0.75) 100%)' }}
      />

      {/* 3D floating cubes — centered */}
      <div
        className="absolute w-[600px] h-[600px] opacity-40 pointer-events-none z-[2]"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <FloatingCube />
      </div>

      <div className="max-w-7xl mx-auto relative z-[3]">
        <p className="text-[#8da5c4] text-[17px] uppercase tracking-wider">What I have done so far</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience
        </h2>

        <div className="mt-10 flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-[#020617aa] backdrop-blur-sm rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="text-white font-bold text-[20px]">{exp.title}</h3>
                  <p className="text-[#4f9eff] text-[16px]">{exp.company_name}</p>
                </div>
                <span className="text-[#8da5c4] text-sm">{exp.date}</span>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-2">
                {exp.points.map((pt, j) => (
                  <li key={j} className="text-[#8da5c4] text-[14px] leading-[24px]">{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
