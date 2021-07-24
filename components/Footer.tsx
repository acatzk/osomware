import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FacebookLogo, TwitterLogo, InstagramLogo } from 'utils/Icons'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-darker">
      <div className="hidden md:block">
        <div className="flex items-center justify-between py-14  mx-auto max-w-7xl px-6">
          <div className="flex-shrink-0">
            <Image
              width={190}
              height={90}
              src="/svgs/main-logo.svg"
              alt="main-logo"
            />
          </div>
          <div className="flex items-center space-x-6">
            <h1 className="text-white text-lg font-medium">
              Get a free consultation
            </h1>
            <motion.button
              className="bg-primary-indigo hover:opacity-80 focus:opacity-100 text-white px-4 xl:px-12 py-3 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
              whileHover={{ y: -4 }}
            >
              Contact
            </motion.button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-14 max-w-7xl mx-auto px-6 space-x-0 md:space-x-12 lg:space-x-24">
          <div className="col-span-2 md:col-auto">
            <div className="flex flex-col space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-xl text-white text-left mr-7">
                  Subscribe to our news letter
                </h1>
                <div className="block md:hidden flex-shrink-0">
                  <Image
                    width={80}
                    height={60}
                    src="/svgs/main-logo2.svg"
                    alt="logo-1"
                  />
                </div>
              </div>
              <div className="flex items-center border-b border-indigo-300 opacity-75 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-white py-1 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
            </div>
          </div>
          <div className="text-white space-y-4 text-sm">
            <h1 className="text-base font-semibold">Services</h1>
            <LinkList
              links={[
                'Web Development',
                'Web Design',
                'UX/UI Design',
                'Multimedia',
              ]}
            />
          </div>
          <div className="text-white space-y-4 text-sm">
            <h1 className="text-base font-semibold">About</h1>
            <LinkList links={['Our Story', 'Locatioh', 'Team', 'Carrers']} />
          </div>
          <div className="text-white space-y-4 text-sm">
            <h1 className="text-base font-semibold">Help</h1>
            <LinkList links={['FAQs', 'Contact Us']} />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between pb-24 max-w-7xl mx-auto px-6">
        <div>
          <ul className="flex items-center space-x-10">
            <li>
              <a
                href="#"
                className="text-sm text-white cursor-pointer hover:underline"
                aria-label="term-and-condition"
              >
                Terms & Condition
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white cursor-pointer hover:underline"
                aria-label="privacy-policy"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <SocialButton>
            <FacebookLogo className="w-5 h-5 fill-current text-white hover:text-gray-300" />
          </SocialButton>
          <SocialButton>
            <TwitterLogo className="w-5 h-5 fill-current text-white hover:text-gray-300" />
          </SocialButton>
          <SocialButton>
            <InstagramLogo className="w-5 h-5 fill-current text-white hover:text-gray-300" />
          </SocialButton>
        </div>
      </div>
    </footer>
  )
}

function SocialButton({ children }) {
  return (
    <button
      className="p-2 hover:text-gray-400 rounded-full focus:outline-none transition ease-in-out duration-200"
      aria-label="social-buttons"
    >
      {children}
    </button>
  )
}

function LinkList({ links }) {
  return (
    <ul className="space-y-4">
      {links.map((link, i) => (
        <ListItem key={i} link={link} />
      ))}
    </ul>
  )
}

function ListItem({ link }) {
  return (
    <li>
      <a
        href="#"
        className="hover:underline cursor-pointer"
        aria-label="business-link"
      >
        {link}
      </a>
    </li>
  )
}

export default Footer
