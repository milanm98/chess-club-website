import Head from 'next/head'
import type { NextPage } from 'next'
import LandingPageCarousel from '../components/landing-page-carousel'
import Posts from '../components/posts'
import Layout from '../components/layout'
import Header from '../components/header'
import AboutUs from '../components/about-us'

const Home: NextPage = () => {
  return (
    <main className="app-background-color">
      <Head>
        <title>Š.K. Gimnazijalac</title>
        <meta
          name="description"
          content="Sahovski klub Gimnazijalac Backa Palanaka"
        />
        <meta
          name="keywords"
          content="Sahovski klub Gimnazijalac Backa Palanaka"
        />
      </Head>
      <Layout>
        <LandingPageCarousel />
        <Header />
        <Posts />
        <AboutUs />
      </Layout>
    </main>
  )
}

export default Home
