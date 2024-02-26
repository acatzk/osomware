import React, { ReactNode } from 'react'

type SectionDescriptionProps = {
  children: ReactNode
}

export default function SectionDescription({ children }: SectionDescriptionProps): JSX.Element {
  return <p className="text-secondary-blue leading-loose">{children}</p>
}
