import NavBar from '~/components/NavBar'

export default function Layout ({ children }) {
  return (
    <div className="container mx-auto max-w-7xl w-full px-4">
      <NavBar />
      <main>
        { children }
      </main>
    </div>
  )
}