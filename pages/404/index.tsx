import { NextPage } from 'next'
import Error404 from '../../components/404'
import Layout from '../../components/layout'

const Custom404: NextPage = () => {
  return (
    <main className="app-background-color">
      <Layout>
        <Error404 />
      </Layout>
    </main>
  )
}

export default Custom404
