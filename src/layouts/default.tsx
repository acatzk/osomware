import Image from 'next/image'
import NavBar from '~/components/NavBar'
import Footer from '~/components/Footer'

export default function Layout ({ children }) {
  return (
    <>
      <div className="font-sans block lg:hidden absolute -top-32 -left-40">
        <Image 
          src="/svgs/buble.svg"  
          width={1000}
          height={1000}
          quality={25}
          layout="intrinsic"
        />
      </div>
      <div className="relative mx-auto max-w-7xl w-full">
        <NavBar />
        <main>
          { children }
        </main>
      </div>
      <Footer />
    </>
  )
}