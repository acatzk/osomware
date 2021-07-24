import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'utils/Icons'

const SectionButton: React.FC = ({ children }) => {
  return (
    <motion.button
      className="flex items-center space-x-3 bg-primary-indigo hover:opacity-80 focus:opacity-100 text-white px-4 xl:px-6 py-3 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
      whileHover={{ y: -4 }}
    >
      <span>{children}</span>
      <ChevronRight className="w-6 h-6 fill-current" />
    </motion.button>
  )
}

export default SectionButton
