import React from 'react'
import Image from 'next/image'
import SectionTitle from './SectionTitle'
import SectionButton from './SectionButton'
import { DotCircleIcon } from 'utils/Icons'
import SectionSubtitle from './SectionSubtitle'
import SectionDescription from './SectionDescription'

const VisionSection: React.FC = () => {
  return (
    <section className="flex flex-row-reverse items-center justify-center py-9 mx-auto w-full px-4">
      <div className="flex-shrink-0 hidden lg:block">
        <Image
          src="/images/team.png"
          width={500}
          height={350}
          layout="intrinsic"
          className="w-full max-w-lg"
          blurDataURL="/images/team.png"
          placeholder="blur"
          alt="team-image"
        />
      </div>
      <div className="flex flex-col space-y-16 w-full max-w-xl">
        <div className="space-y-4">
          <SectionSubtitle>Our Vision</SectionSubtitle>
          <div className="relative flex items-center">
            <div className="flex-shrink-0 absolute -ml-4">
              <DotCircleIcon />
            </div>
            <SectionTitle>Meet Our Awesome Team</SectionTitle>
          </div>
          <div className="block lg:hidden pt-8">
            <Image
              src="/images/team.png"
              width={600}
              height={400}
              layout="intrinsic"
              blurDataURL="/images/team.png"
              placeholder="blur"
              alt="team-image-small"
            />
          </div>
        </div>
        <div className="space-y-8 w-full max-w-none md:max-w-lg">
          <SectionDescription>
            Need an entire development team, maybe an additional development
            unit or just a small supplemental development team for special
            projects that area outside of your core business? If so, consider a
            dedicated team from Osomware
          </SectionDescription>
          <SectionDescription>
            You can ramp up in a hurry by leveraging the methodologies.
          </SectionDescription>
        </div>
        <div>
          <SectionButton>Learn More</SectionButton>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
