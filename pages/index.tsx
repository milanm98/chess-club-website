import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import LandingPageCarousel from '../components/landing-page-carousel'
import Posts from '../components/posts'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Š.K. Gimnazijalac</title>
        <meta
          name="Sahovski klub Gimnazijalac Backa Palanaka"
          content="Sahovski klub Gimnazijalac Backa Palanaka"
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <Navbar />
      <LandingPageCarousel />
      <Posts />
      <Footer />
    </div>
  )
}

export default Home
