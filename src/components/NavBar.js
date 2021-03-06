import Link from 'next/link'
import ActiveLink from './ActiveLink'

export default function NavBar () {

  const links = [
    {
      text: 'Home',
      to: '/'
    },
    {
      text: 'Services',
      to: '/services'
    },
    {
      text: 'About',
      to: '/about'
    },
    {
      text: 'Case Studies',
      to: '/case-studies'
    },
    {
      text: 'Careers',
      to: '/careers'
    },
    {
      text: 'Contact',
      to: '/contact'
    }
  ]

  return (
    <header className="flex items-center justify-between py-7">
      <Link href="/">
        <a>
          <svg width="170" height="31">
            <path
              d="M30 7l-3 1c-1-5-5-8-9-8C13 0 8 5 8 10H7c-4 0-7 3-7 8 0 3 2 6 5 7h2a347 347 0 0025 0c4-1 6-5 6-9 0-5-4-9-8-9zm1 16H9l-3-1-3-1v-5c0-2 2-3 4-4l2 1a2 2 0 001-1h1v-2l1-4 4-3a7 7 0 016 1c3 2 3 5 3 6a1 1 0 001 1 1 1 0 001-1h3a7 7 0 014 2l2 4-2 4c1 0 0 0 0 0l-3 3z"
              fill="url(#paint0_linear)" />
            <path d="M23 18l-6-8a1 1 0 00-2 1l3 4-3 3a1 1 0 102 1l2-2 2 2a1 1 0 002-1z" fill="url(#paint1_linear)" />
            <path
              d="M54 23c5 0 9-3 9-8s-4-9-9-9c-4 0-8 4-8 9s4 8 8 8zm0-3c-2 0-4-2-4-5s2-5 4-5c3 0 5 2 5 5s-2 5-5 5zm15-5l1-1 1 1 3-2-4-2c-3 0-5 1-5 4 0 4 6 3 6 4l-2 1-2-1-3 1c1 2 3 3 5 3 3 0 5-1 5-4 0-4-5-3-5-4zm13 8c3 0 6-2 6-6s-3-6-6-6c-4 0-6 2-6 6s2 6 6 6zm0-3c-2 0-3-1-3-3s1-3 3-3c1 0 3 1 3 3s-2 3-3 3zm22-9l-4 1-3-1-3 1v-1h-4v12h4v-7l2-2 1 2v7h4v-7l2-2 2 2v7h3v-7c0-3-2-5-4-5zm20 0l-2 6-2-6h-3l-2 6-2-6h-4l4 12h3l2-6 2 6h4l4-12h-4zm13 0v1l-3-1c-4 0-6 2-6 6s2 6 6 6l3-1v1h4V11h-4zm-3 9c-1 0-3-1-3-3s2-3 3-3c2 0 3 1 3 3s-1 3-3 3zm13-7v-2h-4v12h4v-5c0-3 2-3 4-3v-4l-4 2zm8 5h9v-1c0-4-3-6-6-6-4 0-7 2-7 6s3 6 7 6l5-2-3-2-2 1c-1 0-2 0-3-2zm0-2c0-1 1-2 3-2 1 0 2 0 2 2h-5z"
              fill="#1E2D56" />
            <defs>
              <linearGradient id="paint0_linear" x1="42.2" y1=".5" x2="-1.6" y2="29.3" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0F9BE8" />
                <stop offset="1" stopColor="#6924FF" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="457.5" y1="703.1" x2="608.5" y2="711.7" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0B78FF" />
                <stop offset="1" stopColor="#5000FF" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </Link>
      <nav>
        <ul className="flex items-center space-x-6">
          {links.map((link, i) => (
            <li key={i}>
              <ActiveLink href={ link.to } current="border-indigo-600">
                <a className="font-medium border-b border-transparent hover:text-indigo-600 hover:border-indigo-600 py-1.5 transition ease-in-out duration-200">
                  { link.text }
                </a>
              </ActiveLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}