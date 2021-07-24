import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Layout from 'layouts/default'

const HeroSection = dynamic(() => import('sections/HeroSection'), {
  ssr: false,
})

const AboutSection = dynamic(() => import('sections/AboutSection'), {
  ssr: false,
})

const ValuesSection = dynamic(() => import('sections/ValuesSection'), {
  ssr: false,
})

const ProjectSection = dynamic(() => import('sections/ProjectSection'), {
  ssr: false,
})

const ServicesSection = dynamic(() => import('sections/ServicesSection'), {
  ssr: false,
})

const VisionSection = dynamic(() => import('sections/VisionSection'), {
  ssr: false,
})

const FeedbackSection = dynamic(() => import('sections/FeedbackSection'), {
  ssr: false,
})

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Osomware</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <ProjectSection />
        <ServicesSection />
        <VisionSection />
        <FeedbackSection />
      </Layout>
    </React.Fragment>
  )
}

export default Index
