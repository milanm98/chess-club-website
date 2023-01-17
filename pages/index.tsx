import type { NextPage } from 'next'
import LandingPageCarousel from '../components/landing-page-carousel'
import Posts from '../components/posts'
import Layout from '../components/layout'
import Header from '../components/header'
import AboutUs from '../components/about-us'
import Contact from '../components/contact'
import Tournaments from '../components/tournaments'
import Seo from '../components/seo'

const Home: NextPage = () => {
  return (
    <main className="app-background-color">
      <Layout>
        <Seo />
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
