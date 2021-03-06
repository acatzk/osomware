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
        <div className="text-2xl font-semibold text-indigo-600">Hello Index Page</div>
      </Layout>
    </>
  )
}
