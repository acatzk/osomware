import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center py-16 mx-auto w-full px-2 md:px-4">
      <div className="flex flex-col space-y-8 px-2">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-snug tracking-wide text-primary-blue max-w-xl xl:max-w-full">
          Software Development that fits your needs
        </h1>
        <div className="space-y-3">
          <p className="text-secondary-blue">
            Full scale project development - Concept,
          </p>
          <p className="text-secondary-blue">
            Architecture, Planning, UX/UI Design, Development
          </p>
          <p className="text-secondary-blue">QA and Project Management</p>
        </div>
        <div className="space-x-3 sm:space-x-4">
          <motion.button
            className="bg-primary-indigo hover:opacity-80 focus:opacity-100 text-white px-4 xl:px-9 py-3 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
            whileHover={{ y: -4 }}
          >
            Get a quote
          </motion.button>
          <motion.button
            className="text-secondary-blue hover:text-white hover:bg-primary-indigo px-7 xl:px-12 py-3 border hover:border-primary-indigo rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
            whileHover={{ y: -4 }}
          >
            Portfolio
          </motion.button>
        </div>
      </div>
      <div className="flex-shrink-0 hidden xl:block">
        <Image
          src="/svgs/hero.svg"
          width={670}
          height={540}
          layout="intrinsic"
          alt="hero-icon"
        />
      </div>
    </section>
  )
}

export default HeroSection
