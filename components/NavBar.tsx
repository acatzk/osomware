import Link from 'next/link'
import { useState } from 'react'
import { links } from 'mock/data'
import { motion } from 'framer-motion'
import ActiveLink from 'utils/ActiveLink'
import { Transition } from '@headlessui/react'
import { MenuIcon, CloseIcon, LogoLarge, LogoSmall } from 'utils/Icons'

interface NavBarProps {
  className: string
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`${className} transition-all ease-in-out duration-300`}>
      <div className="container flex items-center justify-between py-4 md:py-8 px-4 md:px-4">
        <Link href="/">
          <a aria-label="logos">
            <span className="hidden lg:block">
              <LogoLarge />
            </span>
            <span className="block lg:hidden">
              <LogoSmall />
            </span>
          </a>
        </Link>
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary-blue block md:hidden p-1.5 rounded-full hover:bg-indigo-50 focus:bg-indigo-100 transition ease-in-out duration-200 focus:outline-none"
          >
            <MenuIcon className="w-7 h-7 fill-current text-primary-blue" />
          </button>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {links.map((link, i) => (
                <li key={i}>
                  <ActiveLink
                    href={link.to}
                    current="border-indigo-600 text-indigo-600"
                    default=""
                  >
                    <a
                      className={`
                        ${
                          link.text === 'Home'
                            ? 'border-b border-indigo-600 text-indigo-600'
                            : 'border-transparent'
                        }
                        font-medium py-2 transition ease-out duration-200
                      `}
                    >
                      {link.text}
                    </a>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Transition show={isOpen}>
        <nav className="absolute top-0 inset-x-0 p-2 z-50">
          <div className="shadow-lg rounded-lg border-t border-gray-100">
            <div className="bg-white shadow-sm rounded-lg pt-5 pb-8 px-5 space-y-7">
              <div className="flex justify-between items-center">
                <Link href="/">
                  <a className="flex items-center space-x-2">
                    <span className="hidden lg:block">
                      <LogoLarge />
                    </span>
                    <span className="block lg:hidden">
                      <LogoSmall />
                    </span>
                  </a>
                </Link>
                <div>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-400 rounded-full p-1 focus:outline-none hover:bg-indigo-50 focus:bg-indigo-100 focus:text-indigo-500 transition ease-in-out duration-200"
                  >
                    <CloseIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <nav>
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="flex flex-col space-x-0 space-y-3"
                >
                  {links.map((link, i) => (
                    <li key={i}>
                      <ActiveLink
                        href={link.to}
                        current="text-indigo-600 bg-indigo-100"
                        default=""
                      >
                        <a className="block pl-4 bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 font-medium py-2 rounded-lg transition ease-in-out duration-200">
                          {link.text}
                        </a>
                      </ActiveLink>
                    </li>
                  ))}
                </motion.ul>
              </nav>
            </div>
          </div>
        </nav>
      </Transition>
    </header>
  )
}

export default NavBar
