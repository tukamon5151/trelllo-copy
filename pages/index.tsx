import Head from 'next/head'
import { Top } from '../components/templates/Top'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <meta title="top" />
      </Head>
      <Top />
    </>
  )
}

export default Home
