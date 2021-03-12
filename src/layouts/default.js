import NavBar from '~/components/NavBar'

export default function Layout ({ children }) {
  return (
    <>
      <div className="block lg:hidden absolute -top-32 -left-40">
        <img src="/svgs/buble.svg"  />
      </div>
      <div className="container mx-auto max-w-7xl w-full ">
        <NavBar />
        <main className="relative">
          { children }
        </main>
      </div>
    </>
  )
}