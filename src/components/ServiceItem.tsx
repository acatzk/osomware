import Image from 'next/image'
import { IList } from '~/type'
import { motion } from 'framer-motion'
import { FunctionComponent } from 'react'

 const ServiceItem:FunctionComponent<{ icon, text: IList }> = ({ icon, text }) => {
  return (
    <motion.div 
      whileHover={{ y: -6 }}
      className="flex flex-col flex-wrap items-center justify-center max-w-md rounded-lg  cursor-default hover:shadow-xl py-8 space-y-6 px-4 transition ease-in-out duration-200"
    >
      <div className="flex-shrink-0">
        <Image 
          src={ icon } 
          width={150}
          height={135}
          layout="intrinsic"
        />
      </div>
      <h1 className="text-center text-sm md:text-lg font-medium text-primary-blue px-0 sm:px-12 ">{ text }</h1>
    </motion.div>
  )
}

export default ServiceItem