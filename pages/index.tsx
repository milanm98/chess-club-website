import Head from 'next/head'
import type { NextPage } from 'next'
import LandingPageCarousel from '../components/landing-page-carousel'
import Posts from '../components/posts'
import Layout from '../components/layout'
import Header from '../components/header'
import AboutUs from '../components/about-us'
import Contact from '../components/contact'
import Tournaments from '../components/tournaments'

const Home: NextPage = () => {
  return (
    <main className="app-background-color">
      <Head>
        <title>Š.K. Gimnazijalac</title>
        <meta
          name="description"
          content="Sahovski klub Gimnazijalac Backa Palanaka"
        />
        <meta name="keywords" content="sah klub, gimnazijalac" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta charSet="utf-8"></meta>
      </Head>
      <Layout>
        <LandingPageCarousel />
        <Header />
        <Posts />
        <AboutUs />
        <Tournaments />
        <Contact />
      </Layout>
    </main>
  )
}

export default Home
