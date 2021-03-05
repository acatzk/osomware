import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Osomware</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-2xl font-semibold text-indigo-600">Hello Index Page</div>
    </>
  )
}
