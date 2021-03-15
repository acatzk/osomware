import Head from 'next/head'
import Layout from '~/layouts/default'

export default function Home() {

  const ourValues = [
    {
      icon: '/svgs/values1.svg',
      text: 'Research and Discovery'
    },
    {
      icon: '/svgs/values2.svg',
      text: 'Validating and Shaping Idea'
    },
    {
      icon: '/svgs/values3.svg',
      text: 'Design and Prototyping'
    },
    {
      icon: '/svgs/values4.svg',
      text: 'Development'
    },
    {
      icon: '/svgs/values5.svg',
      text: 'Testing and Quality Assurance'
    },
    {
      icon: '/svgs/values6.svg',
      text: 'Maintenance and Support'
    },
  ]

  return (
    <>
      <Head>
        <title>Osomware</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* HERO SECTION */}
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
        
        {/* ABOUS US SECTION */}
        <section className="flex items-center justify-center py-9 container mx-auto w-full px-4 md:px-0">
          <div className="flex-shrink-0 hidden lg:block">
            <img src="/svgs/tree.svg" />
          </div>
          <div className="flex flex-col space-y-8 w-full max-w-xl lg:max-w-md">
            <div className="space-y-4">
              <SectionSubtitle>About Us</SectionSubtitle>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 absolute -ml-8">
                    <img src="/svgs/circles.svg" className="w-full h-full" />
                  </div>
                  <SectionTitle>What makes us different?</SectionTitle>
                </div>
                <div className="flex-shrink-0 block lg:hidden">
                  <img src="/svgs/tree.svg" className="w-40" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <SectionDescription>Osomware offers out customers a wealth of technical and business expertise. We create diverse, complex, web and mobile solutions for any business need.</SectionDescription>
              <SectionDescription>Out knowledge and experience translate to added value and peace of mind for our customers. With Syberry you get quality software and perfect service every time.</SectionDescription>
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

        {/* OUR VALUES SECTION */}
        <section className="flex flex-col items-center justify-center py-9 container mx-auto w-full px-4 md:px-0">
          <div className="flex flex-col items-center justify-center space-y-4">
            <SectionSubtitle>Our Values</SectionSubtitle>
            <div className="relative flex items-center">
              <div className="flex-shrink-0 absolute right-0 -mr-4">
                <img src="/svgs/circles.svg" className="w-full h-full" />
              </div>
              <SectionTitle>Quality is our priority</SectionTitle>
            </div>
          </div>
          <div className="max-w-4xl pt-12">
            <SectionDescription>All our processes are customer-oriented, designed to reduce the cost of business operations, address IT resourcing challenges, and offer you a competitive edge. We start with a deep analysis of your requirements and continue our relationship with post-launch support and updates.</SectionDescription>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 lg:grap-6 xl:gap-8 w-full px-0 sm:px-4 md:px-6 lg:px-10 xl:px-16 py-14">
            {ourValues.map((values, i) => <ValuesCard key={i} {...values} />)}
          </div>
        </section>
      </Layout>
    </>
  )
}

function SectionTitle ({ children }) {
  return <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-primary-blue leading-snug">{ children }</div>
}

function SectionSubtitle ({ children }) {
  return <div className="font-bold text-light-blue">{ children }</div>
}

function SectionDescription ({ children }) {
  return <p className="text-secondary-blue leading-loose">{ children }</p>
}

function ValuesCard ({ icon, text }) {
  return (
    <div className="flex-none max-w-1/6 rounded-lg shadow-lg">
      <div className="flex flex-col items-center justify-center py-8 space-y-6 px-4">
        <div className="flex-shrink-0">
          <img src={icon} />
        </div>
        <h1 className="text-center text-sm font-medium text-primary-blue">{ text }</h1>
      </div>
    </div>
  )
}