import Footer from './footer'
import Navbar from './navbar'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main className="my-20">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
