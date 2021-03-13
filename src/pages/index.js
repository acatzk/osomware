import Head from 'next/head'
import Layout from '~/layouts/default'

export default function Home() {
  return (
    <>
      <Head>
        <title>Osomware</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="flex items-center justify-center py-16 container mx-auto w-full px-4 md:px-0">
          <div className="flex flex-col space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-snug tracking-wide text-primary-blue max-w-xl lg:max-w-full">Software Development that fits your needs</h1>
            <div className="space-y-3">
              <p className="text-secondary-blue">Full scale project development - Concept,</p>
              <p className="text-secondary-blue">Architecture, Planning, UX/UI Design, Development</p>
              <p className="text-secondary-blue">QA and Project Management</p>
            </div>
            <div className="space-x-3 sm:space-x-4">
              <button className="bg-primary-indigo hover:opacity-80 focus:opacity-100 text-white px-4 xl:px-9 py-3 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200">
                Get a quote
              </button>
              <button className="text-secondary-blue hover:text-white hover:bg-primary-indigo px-7 xl:px-12 py-3 border hover:border-primary-indigo rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200">
                Portfolio
              </button>
            </div>
          </div>
          <div className="flex-shrink-0 hidden lg:block">
            <img src="/svgs/hero.svg" className="max-w-md md:max-w-2xl" />
          </div>
        </section>
        <section className="flex items-center justify-center py-9 container mx-auto w-full px-4 md:px-0">
          <div className="flex-shrink-0 hidden lg:block">
            <img src="/svgs/tree.svg" />
          </div>
          <div className="flex flex-col space-y-8 w-full max-w-xl lg:max-w-md">
            <div className="space-y-4">
              <div className="font-bold text-light-blue">
                About Us
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 absolute -ml-8">
                    <img src="/svgs/circles.svg" className="w-full h-full" />
                  </div>
                  <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-primary-blue leading-snug">What makes us different?</div>
                </div>
                <div className="flex-shrink-0 block lg:hidden">
                  <img src="/svgs/tree.svg" className="w-40" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-secondary-blue leading-loose">Osomware offers out customers a wealth of technical and business expertise. We create diverse, complex, web and mobile solutions for any business need.</p>
              <p className="text-secondary-blue leading-loose">Out knowledge and experience translate to added value and peace of mind for our customers. With Syberry you get quality software and perfect service every time.</p>
            </div>
            <div>
              <button className="flex items-center space-x-3 bg-primary-indigo hover:opacity-80 focus:opacity-100 text-white px-4 xl:px-6 py-3 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200">
                <span>Learn More</span>
                <div>
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
