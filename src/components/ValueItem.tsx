import { motion } from 'framer-motion'

export default function ValueItem ({ icon, text }) {
  return (
    <motion.div 
      whileHover={{ y: -6 }}
      className="flex-none max-w-1/6 rounded-lg cursor-default hover:shadow-xl transition ease-in-out duration-200"
    >
      <div className="flex flex-col items-center justify-center py-8 space-y-6 px-4">
        <div className="flex-shrink-0">
          <img src={icon} />
        </div>
        <h1 className="text-center text-sm font-medium text-primary-blue">{ text }</h1>
      </div>
    </motion.div>
  )
}