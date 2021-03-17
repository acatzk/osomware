import Head from 'next/head'
import { motion } from 'framer-motion' 
import Layout from '~/layouts/default'
import ValuesCard from '~/components/ValuesCard'
import ServicesCard from '~/components/ServicesCard'

export default function Home() {

  const ourValues = [
    {
      icon: '/svgs/values/values1.svg',
      text: 'Research and Discovery'
    },
    {
      icon: '/svgs/values/values2.svg',
      text: 'Validating and Shaping Idea'
    },
    {
      icon: '/svgs/values/values3.svg',
      text: 'Design and Prototyping'
    },
    {
      icon: '/svgs/values/values4.svg',
      text: 'Development'
    },
    {
      icon: '/svgs/values/values5.svg',
      text: 'Testing and Quality Assurance'
    },
    {
      icon: '/svgs/values/values6.svg',
      text: 'Maintenance and Support'
    },
  ]

  const services = [
    {
      icon: '/images/services/services1.png',
      text: 'Software Development'
    },
    {
      icon: '/images/services/services2.png',
      text: 'Multimedia Arts and Design'
    },
    {
      icon: '/images/services/services3.png',
      text: 'Web Development'
    },
    {
      icon: '/images/services/services4.png',
      text: 'Web Design & Development'
    },
    {
      icon: '/images/services/services5.png',
      text: 'User Experience Design'
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
        <section className="flex items-center justify-center py-16 mx-auto w-full px-2 md:px-0">
          <div className="flex flex-col space-y-8 px-2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-snug tracking-wide text-primary-blue max-w-xl lg:max-w-full">Software Development that fits your needs</h1>
            <div className="space-y-3">
              <p className="text-secondary-blue">Full scale project development - Concept,</p>
              <p className="text-secondary-blue">Architecture, Planning, UX/UI Design, Development</p>
              <p className="text-secondary-blue">QA and Project Management</p>
            </div>
            <div className="space-x-3 sm:space-x-4">
              <motion.button 
                className="bg-primary-indigo hover:opacity-80 focus:opacity-100 text-white px-4 xl:px-9 py-3 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
                whileHover={{ y: -4 }}
              >
                Get a quote
              </motion.button>
              <motion.button 
                className="text-secondary-blue hover:text-white hover:bg-primary-indigo px-7 xl:px-12 py-3 border hover:border-primary-indigo rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
                whileHover={{ y: -4 }}
              >
                Portfolio
              </motion.button>
            </div>
          </div>
          <div className="flex-shrink-0 hidden lg:block">
            <img src="/svgs/hero.svg" className="max-w-md md:max-w-2xl" />
          </div>
        </section>
        
        {/* ABOUS US SECTION */}
        <section className="flex items-center justify-center py-9 mx-auto w-full px-4 md:px-0">
          <div className="flex-shrink-0 hidden lg:block">
            <img src="/svgs/tree.svg" />
          </div>
          <div className="flex flex-col space-y-8 w-full max-w-xl lg:max-w-md">
            <div className="space-y-4">
              <SectionSubtitle>About Us</SectionSubtitle>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 absolute -ml-8">
                    <DotCircleIcon />
                  </div>
                  <SectionTitle>What makes us different?</SectionTitle>
                </div>
                <div className="block lg:hidden">
                  <img src="/svgs/tree.svg" className="w-40" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <SectionDescription>Osomware offers out customers a wealth of technical and business expertise. We create diverse, complex, web and mobile solutions for any business need.</SectionDescription>
              <SectionDescription>Out knowledge and experience translate to added value and peace of mind for our customers. With Syberry you get quality software and perfect service every time.</SectionDescription>
            </div>
            <div>
              <SectionButton>Learn More</SectionButton>
            </div>
          </div>
        </section>

        {/* OUR VALUES SECTION */}
        <section className="flex flex-col items-center justify-center py-9 mx-auto w-full px-4 md:px-0">
          <div className="flex flex-col items-center justify-center space-y-4">
            <SectionSubtitle>Our Values</SectionSubtitle>
            <div className="relative flex items-center">
              <div className="flex-shrink-0 absolute right-0 -mr-4">
                <DotCircleIcon />
              </div>
              <SectionTitle>Quality is our priority</SectionTitle>
            </div>
          </div>
          <div className="max-w-4xl pt-12">
            <SectionDescription>All our processes are customer-oriented, designed to reduce the cost of business operations, address IT resourcing challenges, and offer you a competitive edge. We start with a deep analysis of your requirements and continue our relationship with post-launch support and updates.</SectionDescription>
          </div>
          <div className="px-0 sm:px-4 md:px-6 lg:px-10 xl:px-16 py-14">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 lg:grap-5 xl:gap-8 w-full">
              {ourValues.map((values, i) => <ValuesCard key={i} {...values} />)}
            </div>
          </div>
        </section>

        {/*  OUR PROJECT SECTION */}
        <section className="flex flex-col items-center justify-center py-9 mx-auto w-full px-4 md:px-0">
          <div className="flex flex-col items-center justify-center space-y-4">
            <SectionSubtitle>Our Projects</SectionSubtitle>
            <div className="relative flex items-center">
              <div className="flex-shrink-0 absolute right-0">
                <DotCircleIcon />
              </div>
              <SectionTitle className="text-center">Take a look at what we've built</SectionTitle>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-10 py-12">
            <div>
              <img src="/svgs/projects.svg" />
            </div>
            <div className="flex flex-col space-y-10 max-w-md w-full">
              <div className="space-y-2 lg:space-y-8">
                <h1 className="text-lg md:text-2xl font-semibold text-primary-blue">Airclass: An E-Learning App For Non Native English Speakers</h1>
                <div className="flex flex-wrap items-center space-x-2 sm:space-x-4">
                  <button className="bg-gray-100 text-primary-blue text-xs px-2.5 py-1.5 focus:outline-none hover:bg-gray-200">UX Research</button>
                  <button className="bg-gray-100 text-primary-blue text-xs px-2.5 py-1.5 focus:outline-none hover:bg-gray-200">UI Design</button>
                  <button className="bg-gray-100 text-primary-blue text-xs px-2.5 py-1.5 focus:outline-none hover:bg-gray-200">Development</button>
                </div>
              </div>
              <div className="space-y-8">
                <SectionDescription>Airclass is an english learning web app for filipino kids who wants to learn english in a more efficient and friendly way. Also this app is suitable for adults who needs to review their english speakers who want to learn english as well.</SectionDescription>
                <SectionButton>Read Case Study</SectionButton>
              </div>
            </div>
          </div>
        </section>

        {/* OUR SERVICES */}
        <section className="flex flex-col items-center justify-center py-9 mx-auto w-full px-4 md:px-0">
          <div className="flex flex-col items-center justify-center space-y-4 max-w-2xl">
            <SectionSubtitle>Our Services</SectionSubtitle>
            <div className="relative flex items-center text-center">
              <div className="flex-shrink-0 absolute left-0 -mr-6 -top-4">
                <DotCircleIcon />
              </div>
              <SectionTitle>We have the skills and experience to serve you</SectionTitle>
            </div>
          </div>
          <div className="max-w-2xl pt-12">
            <SectionDescription>We help clients to design and develop future-proof, significant and secure digital products that are centered around users needs and fulfill client's business goals.</SectionDescription>
          </div>
          <div className="py-14 w-full max-w-5xl">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 xl:gap-16 w-full">
              {services.map((service, i) => <ServicesCard key={i} {...service} />)}
            </div>
          </div>
        </section>
      
        {/* OUR VISION SECTION */}
        <section className="flex flex-row-reverse items-center justify-center py-9 mx-auto w-full px-4">
          <div className="flex-shrink-0 hidden lg:block">
            <img src="/images/team.png" className="w-full max-w-lg" />
          </div>
          <div className="flex flex-col space-y-16 w-full max-w-xl">
            <div className="space-y-4">
              <SectionSubtitle>Our Vision</SectionSubtitle>
              <div className="relative flex items-center">
                <div className="flex-shrink-0 absolute -ml-4">
                  <DotCircleIcon />
                </div>
                <SectionTitle>Meet Our Awesome Team</SectionTitle>
              </div>
              <div className="block lg:hidden pt-8">
                <img src="/images/team.png" className="w-auto" />
              </div>
            </div>
            <div className="space-y-8 w-full max-w-none md:max-w-lg">
              <SectionDescription>Need an entire development team, maybe an additional development unit or just a small supplemental development team for special projects that area outside of your core business? If so, consider a dedicated team from Osomware</SectionDescription>
              <SectionDescription>You can ramp up in a hurry by leveraging the methodologies.</SectionDescription>
            </div>
            <div>
              <SectionButton>Learn More</SectionButton>
            </div>
          </div>
        </section>
      
        {/* FEEDBACK SECTION */}
        <section className="flex flex-col items-center justify-center py-14 mx-auto w-full px-4 md:px-0">
          <div className="flex flex-col items-center justify-center space-y-4 max-w-lg text-center">
            <SectionSubtitle>Feedbacks</SectionSubtitle>
            <SectionTitle>Our clients appreciate what we do</SectionTitle>
          </div>
          <div className="flex flex-col items-center py-14 space-y-4 max-w-3xl">
            <div className="flex-shrink-0">
              <img src="/svgs/stars.svg" />
            </div>
            <div className="flex items-center justify-center space-x-2  md:space-x-10">
              <button className="hidden md:block rounded-full bg-white shadow-lg hover:shadow-xl focus:shadow-lg focus:outline-none">
                <svg 
                  className="w-10 h-10 fill-current text-primary-blue"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </button>
              <SectionDescription>
                <span className="line-clamp-5">Adipisicing exercitation eu proident ex cillum excepteur cupidatat in commodo id veniam magna duis quis. Tempor et excepteur veniam dolor amet nulla ipsum anim consectetur est proident aliquip esse. Aute irure magna enim laboris excepteur labore ea dolore eiusmod id laboris. Ex officia dolore est consequat ullamco est </span>
              </SectionDescription>
              <button className="hidden md:block rounded-full bg-white shadow-lg hover:shadow-xl focus:shadow-lg focus:outline-none">
                <svg 
                  className="w-10 h-10 fill-current text-primary-blue" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col py-16 space-y-16">
            <h1 className="text-center text-2xl lg:text-4xl xl:text-5xl font-extrabold leading-snug tracking-wide text-primary-blue max-w-xl lg:max-w-full">Have a project in mind?</h1>
            <div className="text-center">
              <motion.button 
                className="bg-primary-indigo hover:opacity-80 focus:opacity-100 text-white px-4 xl:px-12 py-3 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
                whileHover={{ y: -4 }}
              >
                Talk to US
              </motion.button>
            </div>
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

function DotCircleIcon () {
  return <img src="/svgs/circles.svg" className="w-full h-full" />
}

function SectionButton ({ children }) {
  return (
    <motion.button 
      className="flex items-center space-x-3 bg-primary-indigo hover:opacity-80 focus:opacity-100 text-white px-4 xl:px-6 py-3 rounded-lg text-lg font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
      whileHover={{ y: -4 }}
    >
      <span>{ children }</span>
      <div>
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z"/>
          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
        </svg>
      </div>
    </motion.button>
  )
}