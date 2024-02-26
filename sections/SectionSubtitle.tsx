import React, { ReactNode } from 'react'

type SectionSubtitleProps = {
  children: ReactNode
}

export default function SectionSubtitle({ children }: SectionSubtitleProps): JSX.Element {
  return <div className="font-bold text-light-blue">{children}</div>
}
