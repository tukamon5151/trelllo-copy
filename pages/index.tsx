import Head from 'next/head'
import { Top } from '../components/templates/Top'
import { useSession, signOut } from 'next-auth/client'
import { Spinner, Box, Button } from '@chakra-ui/react'

const Home: React.FC = () => {
  const [session, loading] = useSession()
  console.log(session);

  if (session) {
    return (
      <Box>
        <Box mb={10}>ログインしてますねあなた</Box>
        <Box mb={10}>{String(session)}</Box>
        <Button onClick={() => signOut()}>ログアウト</Button>
      </Box>
    )
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
