// ===
// @modules
import { Heading, Box, Spinner } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { ProfileForm } from '../../organizations/ProfileForm/ProfileForm'
import { User } from '../../../model/client/User'
import { MypageProvider } from '../../../hooks/useMypage'

// ===
// @interface
interface Props {
  user: User
  setUser: Dispatch<SetStateAction<User>>
}

// ===
// @view
export const Profile: React.FC<Props> = ({ user, setUser }) => {
  if (!user) return <Spinner />

  return (
    <MypageProvider value={{ user, setUser }}>
      <Box mx="auto" w="700px">
        <Heading mb={10}>Settings</Heading>
        <Box mb={10} bg="blue.200" p={5}>
          なんかタブがあって、いつか実装される
        </Box>
        <ProfileForm />
      </Box>
    </MypageProvider>
  )
}
