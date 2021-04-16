import Head from 'next/head'
import { signOut, useSession } from 'next-auth/client'
import { Spinner, Box, Button, List, ListItem, Avatar } from '@chakra-ui/react'
import { Top } from '../components/templates/Top'

const Home: React.FC = () => {
  const [session, loading] = useSession()

  if (session) {
    const { user } = session
    return (
      <Box>
        <Box mb={10}>ログインしてますねあなた</Box>
        <List mb={10}>
          <ListItem>userId: {user.id}</ListItem>
          <ListItem>email: {user.email}</ListItem>
          <ListItem>name: {user.name}</ListItem>
          <ListItem>
            <Avatar src={user.image} name={user.name} />
          </ListItem>
        </List>
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
