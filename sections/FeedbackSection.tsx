import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import SectionSubtitle from './SectionSubtitle'
import SectionDescription from './SectionDescription'
import { ChevronLeft, ChevronRight } from 'utils/Icons'

const FeedbackSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-14 mx-auto w-full px-4 md:px-0">
      <div className="flex flex-col items-center justify-center space-y-4 max-w-lg text-center">
        <SectionSubtitle>Feedbacks</SectionSubtitle>
        <SectionTitle>Our clients appreciate what we do</SectionTitle>
      </div>
      <div className="flex flex-col items-center py-14 space-y-4 max-w-3xl">
        <div className="flex-shrink-0">
          <Image
            src="/svgs/stars.svg"
            width={200}
            height={50}
            blurDataURL="/svgs/stars.svg"
            placeholder="blur"
            layout="intrinsic"
            alt="star-icon"
          />
        </div>
        <div className="flex items-center justify-center space-x-2  md:space-x-10">
          <button
            className="hidden md:block rounded-full bg-white shadow-lg hover:shadow-xl focus:shadow-lg focus:outline-none"
            aria-label="arrow-left"
          >
            <ChevronLeft className="w-10 h-10 fill-current text-primary-blue" />
          </button>
          <SectionDescription>
            <span className="line-clamp-5">
              Adipisicing exercitation eu proident ex cillum excepteur cupidatat
              in commodo id veniam magna duis quis. Tempor et excepteur veniam
              dolor amet nulla ipsum anim consectetur est proident aliquip esse.
              Aute irure magna enim laboris excepteur labore ea dolore eiusmod
              id laboris. Ex officia dolore est consequat ullamco est{' '}
            </span>
          </SectionDescription>
          <button
            className="hidden md:block rounded-full bg-white shadow-lg hover:shadow-xl focus:shadow-lg focus:outline-none"
            aria-label="arrow-right"
          >
            <ChevronRight className="w-10 h-10 fill-current text-primary-blue" />
          </button>
        </div>
      </div>
      <div className="flex flex-col py-16 space-y-16">
        <h1 className="text-center text-2xl lg:text-4xl xl:text-5xl font-extrabold leading-snug tracking-wide text-primary-blue max-w-xl lg:max-w-full">
          Have a project in mind?
        </h1>
        <div className="text-center">
          <motion.button
            className="bg-primary-indigo hover:opacity-80 focus:opacity-100 text-white px-4 xl:px-12 py-3 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
            whileHover={{ y: -4 }}
          >
            Talk to US
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection
