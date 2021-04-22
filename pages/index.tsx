import Head from 'next/head'
import { NextPage } from 'next'
import { useSession } from 'next-auth/client'
import { Spinner } from '@chakra-ui/react'
import { Top } from '../components/templates/Top'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) {
    return <Spinner />
  }

  useEffect(() => {
    if (session) router.push('/boards')
  }, [session, router])

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
