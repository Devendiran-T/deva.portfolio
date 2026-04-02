import { useState } from 'react'
import { navLinks, personalInfo } from '../constants'

const Navbar = () => {
  const [active, setActive] = useState('')

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary border-b border-[#4f9eff22] px-6 backdrop-blur-sm">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={() => { setActive(''); window.scrollTo(0, 0) }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer">
            {personalInfo.name} &nbsp;
            <span className="sm:block hidden text-secondary font-normal text-sm">
              | {personalInfo.role.split('|')[0].trim()}
            </span>
          </p>
        </a>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-[#4f9eff]' : 'text-[#8da5c4]'} hover:text-[#4f9eff] text-[18px] font-medium cursor-pointer transition`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
