import NavBar from '~/components/NavBar'

export default function Layout ({ children }) {
  return (
    <div className="container mx-auto max-w-7xl w-full">
      <NavBar />
      <main>
        { children }
      </main>
    </div>
  )
}