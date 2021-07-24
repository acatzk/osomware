import Image from 'next/image'
import dynamic from 'next/dynamic'
import Sticky from 'react-stickynode'
import NavBar from 'components/NavBar'
import React, { useState } from 'react'

const Footer = dynamic(() => import('components/Footer'), {
  ssr: false,
})

const Layout: React.FC = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false)

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true)
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false)
    }
  }

  return (
    <React.Fragment>
      <div className="block lg:hidden">
        <Image
          src="/svgs/buble.svg"
          layout="fill"
          blurDataURL="/svgs/buble.svg"
          placeholder="blur"
          className="object-cover inset-0 w-full h-full opacity-60"
          quality={75}
          alt="background-image"
        />
      </div>
      <div className="relative antialiased">
        <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
          <NavBar
            className={`${
              isSticky
                ? 'sticky top-0 z-10 bg-white/60 shadow backdrop-blur-sm'
                : 'bg-transparent shadow-none'
            }`}
          />
        </Sticky>
        <main className="container">{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
