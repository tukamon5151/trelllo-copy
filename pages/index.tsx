import Head from 'next/head'
import { Top } from '../components/templates/Top'
import { useSession } from 'next-auth/client'
import { Spinner } from '@chakra-ui/react'

const Home: React.FC = () => {
  const [session, loading] = useSession()

  if (session) {
    return <div>ログインしてますねあなた</div>
  }

  if (loading) {
    return <Spinner />
  }

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
