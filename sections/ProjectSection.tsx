import React from 'react'
import Image from 'next/image'
import SectionTitle from './SectionTitle'
import { DotCircleIcon } from 'utils/Icons'
import SectionButton from './SectionButton'
import SectionSubtitle from './SectionSubtitle'
import SectionDescription from './SectionDescription'

const ProjectSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-9 mx-auto w-full px-4 md:px-0">
      <div className="flex flex-col items-center justify-center space-y-4">
        <SectionSubtitle>Our Projects</SectionSubtitle>
        <div className="relative flex items-center">
          <div className="flex-shrink-0 absolute right-0">
            <DotCircleIcon />
          </div>
          <SectionTitle>Take a look at what we`ve built</SectionTitle>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-10 py-12">
        <div>
          <Image
            src="/svgs/projects.svg"
            width={650}
            height={600}
            blurDataURL="/svgs/projects.svg"
            placeholder="blur"
            layout="intrinsic"
            alt="project-icon"
          />
        </div>
        <div className="flex flex-col space-y-10 max-w-md w-full">
          <div className="space-y-2 lg:space-y-8">
            <h1 className="text-lg md:text-2xl font-semibold text-primary-blue">
              Airclass: An E-Learning App For Non Native English Speakers
            </h1>
            <div className="flex flex-wrap items-center space-x-2 sm:space-x-4">
              <button className="bg-gray-100 text-primary-blue text-xs px-2.5 py-1.5 focus:outline-none hover:bg-gray-200">
                UX Research
              </button>
              <button className="bg-gray-100 text-primary-blue text-xs px-2.5 py-1.5 focus:outline-none hover:bg-gray-200">
                UI Design
              </button>
              <button className="bg-gray-100 text-primary-blue text-xs px-2.5 py-1.5 focus:outline-none hover:bg-gray-200">
                Development
              </button>
            </div>
          </div>
          <div className="space-y-8">
            <SectionDescription>
              Airclass is an english learning web app for filipino kids who
              wants to learn english in a more efficient and friendly way. Also
              this app is suitable for adults who needs to review their english
              speakers who want to learn english as well.
            </SectionDescription>
            <SectionButton>Read Case Study</SectionButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
