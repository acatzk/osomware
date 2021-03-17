import { motion } from 'framer-motion'

export default function Footer () {
  return (
    <footer className="bg-gray-darker">
      <div className="hidden md:block">
        <div className="flex items-center justify-between py-14  mx-auto max-w-7xl px-6">
          <div className="flex-shrink-0">
            <img src="/svgs/main-logo.svg" />
          </div>
          <div className="flex items-center space-x-6">
            <h1 className="text-white text-lg font-medium">Get a free consultation</h1>
            <motion.button 
              className="bg-primary-indigo hover:opacity-80 focus:opacity-100 text-white px-4 xl:px-12 py-3 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
              whileHover={{ y: -4 }}
            >
              Contact
            </motion.button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-14 max-w-7xl mx-auto px-6 space-x-0 md:space-x-12 lg:space-x-24">
          <div className="col-span-2 md:col-auto">
            <div className="flex flex-col space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-xl text-white text-left mr-7">Subscribe to our news letter</h1>
                <div className="block md:hidden flex-shrink-0">
                  <img src="/svgs/main-logo2.svg" />
                </div>
              </div>
              <div className="flex items-center border-b border-indigo-300 opacity-75 py-2">
                <input 
                  className="appearance-none bg-transparent border-none w-full text-white py-1 leading-tight focus:outline-none" 
                  type="text" 
                  placeholder="Email Address" />
                </div>
            </div>
          </div>
          <div className="text-white space-y-4 text-sm">
            <h1 className="text-base font-semibold">Services</h1>
            <ul className="space-y-4">
              {['Web Development', 'Web Design', 'UX/UI Design', 'Multimedia'].map((link, i) => (
                <li key={i}>
                  <a className="hover:underline cursor-pointer">{ link }</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white space-y-4 text-sm">
            <h1 className="text-base font-semibold">About</h1>
            <ul className="space-y-4">
              {['Our Story', 'Locatioh', 'Team', 'Carrers'].map((link, i) => (
                <li key={i}>
                  <a className="hover:underline cursor-pointer">{ link }</a>
                </li>
              ))}
            </ul>
          </div>  
          <div className="text-white space-y-4 text-sm">
            <h1 className="text-base font-semibold">Help</h1>
            <ul className="space-y-4">
              {['FAQs', 'Contact Us'].map((link, i) => (
                <li key={i}>
                  <a className="hover:underline cursor-pointer">{ link }</a>
                </li>
              ))}
            </ul>
          </div>  
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between pb-24 max-w-7xl mx-auto px-6">
        <div>
          <ul className="flex items-center space-x-10">
            <li><a className="text-sm text-white cursor-pointer hover:underline">Terms & Condition</a></li>
            <li><a className="text-sm text-white cursor-pointer hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <SocialButton>
            <FacebookLogo />
          </SocialButton>
          <SocialButton>
            <TwitterLogo />
          </SocialButton>
          <SocialButton>
            <InstagramLogo />
          </SocialButton>
        </div>
      </div>
    </footer>
  )
}

function SocialButton ({ children }) {
  return <button className="p-2 hover:text-gray-400 rounded-full focus:outline-none transition ease-in-out duration-200">{ children }</button>
}

function FacebookLogo () {
  return (
    <svg className="w-5 h-5 fill-current text-white hover:text-gray-300" viewBox="0 0 24 24">
      <path
        d="M9.95235 3.29509H11.954V0.139742C11.6087 0.0967442 10.421 0 9.03787 0C6.1519 0 4.17494 1.643 4.17494 4.66274V7.44186H0.990234V10.9693H4.17494V19.845H8.07953V10.9701H11.1354L11.6205 7.44269H8.07862V5.01251C8.07953 3.99297 8.38284 3.29509 9.95235 3.29509Z" />
    </svg>
  )
}

function TwitterLogo () {
  return (
    <svg className="w-5 h-5 fill-current text-white hover:text-gray-300" viewBox="0 0 24 24">
      <path
        d="M24.4985 2.11613C23.5946 2.475 22.6314 2.71288 21.6273 2.82838C22.6603 2.27013 23.4488 1.39287 23.8195 0.3355C22.8563 0.85525 21.7928 1.22238 20.6595 1.42725C19.745 0.545875 18.4415 0 17.0195 0C14.2607 0 12.0396 2.02675 12.0396 4.51137C12.0396 4.86888 12.073 5.21263 12.1551 5.53988C8.01223 5.357 4.34641 3.55988 1.88379 0.82225C1.45386 1.49738 1.20167 2.27012 1.20167 3.102C1.20167 4.664 2.0904 6.04862 3.41514 6.85025C2.61452 6.8365 1.8291 6.62613 1.16369 6.29475C1.16369 6.3085 1.16369 6.32638 1.16369 6.34425C1.16369 8.536 2.89102 10.3565 5.15614 10.7759C4.75051 10.8763 4.30843 10.9244 3.84963 10.9244C3.5306 10.9244 3.20853 10.9079 2.90621 10.8474C3.55187 12.6335 5.38402 13.9466 7.56254 13.9893C5.86712 15.1896 3.71442 15.9129 1.38397 15.9129C0.975311 15.9129 0.583359 15.8964 0.191406 15.851C2.3988 17.1394 5.01485 17.875 7.836 17.875C17.0059 17.875 22.0192 11 22.0192 5.04075C22.0192 4.84137 22.0116 4.64887 22.001 4.45775C22.99 3.8225 23.821 3.02913 24.4985 2.11613Z" />
    </svg>
  )
}

function InstagramLogo () {
  return (
    <svg className="w-5 h-5 fill-current text-white hover:text-gray-300" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M8.28934 0H17.4045C21.599 0 25.0005 3.07862 25.0005 6.875V15.125C25.0005 18.9214 21.599 22 17.4045 22H8.28934C4.09484 22 0.693359 18.9214 0.693359 15.125V6.875C0.693359 3.07862 4.09484 0 8.28934 0ZM17.4046 19.9375C20.3367 19.9375 22.7218 17.7787 22.7218 15.125V6.875C22.7218 4.22125 20.3367 2.0625 17.4046 2.0625H8.28938C5.35732 2.0625 2.97217 4.22125 2.97217 6.875V15.125C2.97217 17.7787 5.35732 19.9375 8.28938 19.9375H17.4046Z" />
      <path fillRule="evenodd" clipRule="evenodd"
        d="M6.77002 11C6.77002 7.96263 9.49087 5.5 12.8467 5.5C16.2026 5.5 18.9235 7.96263 18.9235 11C18.9235 14.0374 16.2026 16.5 12.8467 16.5C9.49087 16.5 6.77002 14.0374 6.77002 11ZM9.04871 11C9.04871 12.8948 10.7533 14.4375 12.8468 14.4375C14.9403 14.4375 16.6449 12.8948 16.6449 11C16.6449 9.10388 14.9403 7.5625 12.8468 7.5625C10.7533 7.5625 9.04871 9.10388 9.04871 11Z" />
      <ellipse cx="19.3792" cy="5.08737" rx="0.809875" ry="0.732875" fill="white" />
    </svg>
  )
}
