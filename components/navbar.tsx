import Link from 'next/link'
import { useState } from 'react'
import Links from '../settings/navbar-settings.json'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="shadow-md w-full fixed top-0 left-0 z-20 ">
      <div className="nav-background-color md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <Link href="/">
            <span className="text-xl nav-text-color mr-1 pt-2 uppercase font-mono">
              Š.K. Gimnazijalac
            </span>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
        >
          {open ? <button>&#x2715;</button> : <button>&#x2630;</button>}
        </div>

        <ul
          className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  shadow-lg md:shadow-none transition-all duration-500 ease-in ${
            open ? 'top-20' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-4 text-xl md:my-0 my-7">
              <Link key={link.name} href={`/${link.link}`}>
                <a className="nav-text-color hover:text-gray-400 duration-500">
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
