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
        <div className="flex items-center justify-center py-16 container mx-auto w-full px-4 md:px-0">
          <div className="flex flex-col space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-snug tracking-wide text-primary-blue max-w-xl lg:max-w-full">Software Development that fits your needs</h1>
            <div className="space-y-3">
              <p className="text-secondary-blue">Full scale project development - Concept,</p>
              <p className="text-secondary-blue">Architecture, Planning, UX/UI Design, Development</p>
              <p className="text-secondary-blue">QA and Project Management</p>
            </div>
            <div className="space-x-4">
              <button className="bg-primary-indigo hover:opacity-80 focus:opacity-100 text-white px-9 py-3 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200">
                Get a quote
              </button>
              <button className="text-secondary-blue hover:text-white hover:bg-primary-indigo px-12 py-3 border hover:border-primary-indigo rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200">
                Portfolio
              </button>
            </div>
          </div>
          <div className="flex-shrink-0 hidden lg:block">
            <img src="/svgs/hero.svg" className="max-w-md md:max-w-2xl" />
          </div>
        </div>
      </Layout>
    </>
  )
}
