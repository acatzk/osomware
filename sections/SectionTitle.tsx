import React, { ReactNode } from 'react'

type SectionTitleProps = {
  children: ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps): JSX.Element {
  return (
    <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-primary-blue leading-snug">
      {children}
    </div>
  )
}
