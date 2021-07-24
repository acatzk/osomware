import Image from 'next/image'
import Sticky from 'react-stickynode'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'
import React, { useState } from 'react'

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
          quality={75}
          layout="fill"
          className="object-cover inset-0 w-full h-full opacity-50"
          alt="background-image"
        />
      </div>
      <div className="relative">
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
