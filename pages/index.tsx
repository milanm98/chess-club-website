import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import LandingPageCarousel from '../components/landing-page-carousel'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Š.K. Gimnazijalac</title>
        <meta
          name="sahovsi klub gimnazijalac backa palanaka"
          content="sahovsi klub gimnazijalac backa palanaka"
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <Navbar />
      <LandingPageCarousel />
      <Footer />
    </div>
  )
}

export default Home
