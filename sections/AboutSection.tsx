import React from 'react'
import Image from 'next/image'
import SectionTitle from './SectionTitle'
import SectionButton from './SectionButton'
import { DotCircleIcon } from 'utils/Icons'
import SectionSubtitle from './SectionSubtitle'
import SectionDescription from './SectionDescription'

const AboutSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center py-9 mx-auto w-full px-4 md:px-0">
      <div className="relative w-[670px] h-[540px] flex-shrink-0 hidden lg:block">
        <Image
          src="/svgs/tree.svg"
          blurDataURL="/svgs/tree.svg"
          placeholder="blur"
          layout="fill"
          alt="tree-large-image"
        />
      </div>
      <div className="flex flex-col space-y-8 w-full max-w-xl lg:max-w-md">
        <div className="space-y-4">
          <SectionSubtitle>About Us</SectionSubtitle>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 absolute -ml-8">
                <DotCircleIcon />
              </div>
              <SectionTitle>What makes us different?</SectionTitle>
            </div>
            <div className="relative w-[100px] h-[100px] block lg:hidden">
              <Image
                src="/svgs/tree.svg"
                blurDataURL="/svgs/tree.svg"
                placeholder="blur"
                layout="fill"
                alt="tree-small-image"
              />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <SectionDescription>
            Osomware offers out customers a wealth of technical and business
            expertise. We create diverse, complex, web and mobile solutions for
            any business need.
          </SectionDescription>
          <SectionDescription>
            Out knowledge and experience translate to added value and peace of
            mind for our customers. With Syberry you get quality software and
            perfect service every time.
          </SectionDescription>
        </div>
        <div>
          <SectionButton>Learn More</SectionButton>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
