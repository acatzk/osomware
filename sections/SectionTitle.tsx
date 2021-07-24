import React from 'react'

const SectionTitle: React.FC = ({ children }) => {
  return (
    <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-primary-blue leading-snug">
      {children}
    </div>
  )
}

export default SectionTitle
