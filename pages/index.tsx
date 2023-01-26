import type { NextPage } from 'next'
import Seo from '../components/seo'
import Posts from '../components/posts'
import Layout from '../components/layout'
import AboutUs from '../components/about-us'
import Contact from '../components/contact'
import Tournaments from '../components/tournaments'
import HeroSection from '../components/hero-section'

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo />
      <HeroSection />
      <Posts />
      <AboutUs />
      <Tournaments />
      <Contact />
    </Layout>
  )
}

export default Home
