import type { NextPage } from 'next'
import Head from 'next/head'
import LandingPageCarousel from '../components/landing-page-carousel'
import Posts from '../components/posts'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Š.K. Gimnazijalac</title>
        <meta
          name="Sahovski klub Gimnazijalac Backa Palanaka"
          content="Sahovski klub Gimnazijalac Backa Palanaka"
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Layout>
        <LandingPageCarousel />
        <Posts />
      </Layout>
    </>
  )
}

export default Home
