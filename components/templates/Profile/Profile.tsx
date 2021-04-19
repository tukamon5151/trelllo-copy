// ===
// @modules
import { Heading, Box, Spinner } from '@chakra-ui/react'
import { ProfileForm } from '../../organizations/ProfileForm/ProfileForm'
import { User } from '../../../model/client/User'

// ===
// @interface
export interface Props {
  user: User
}

// ===
// @view
export const Profile: React.FC<Props> = ({ user }) => {
  if (!user) return <Spinner />

  return (
    <Box mx="auto" w="700px">
      <Heading mb={10}>Settings</Heading>
      <Box mb={10} bg="blue.200" p={5}>
        なんかタブがあって、いつか実装される
      </Box>
      <ProfileForm />
    </Box>
  )
}
