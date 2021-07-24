import React from 'react'
import { values } from 'mock/data'
import SectionTitle from './SectionTitle'
import { DotCircleIcon } from 'utils/Icons'
import ValueList from 'components/ValueList'
import SectionSubtitle from './SectionSubtitle'
import SectionDescription from './SectionDescription'

const ValuesSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-9 mx-auto w-full px-4 md:px-0">
      <div className="flex flex-col items-center justify-center space-y-4">
        <SectionSubtitle>Our Values</SectionSubtitle>
        <div className="relative flex items-center">
          <div className="flex-shrink-0 absolute right-0 -mr-4">
            <DotCircleIcon />
          </div>
          <SectionTitle>Quality is our priority</SectionTitle>
        </div>
      </div>
      <div className="max-w-4xl pt-12">
        <SectionDescription>
          All our processes are customer-oriented, designed to reduce the cost
          of business operations, address IT resourcing challenges, and offer
          you a competitive edge. We start with a deep analysis of your
          requirements and continue our relationship with post-launch support
          and updates.
        </SectionDescription>
      </div>
      <div className="px-0 sm:px-4 md:px-6 lg:px-10 xl:px-16 py-14">
        <ValueList values={values} />
      </div>
    </section>
  )
}

export default ValuesSection
