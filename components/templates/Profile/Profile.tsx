// ===
// @modules
import { Heading, Box } from '@chakra-ui/react'
import { LoginLayout } from '../LoginLayout/LoginLayout'
import { User } from '../../../hooks/useUser'
import { ProfileForm } from '../../organizations/ProfileForm/ProfileForm'

// ===
// @interface

export interface Props {
  loading: boolean
  user: User
}

// ===
// @view
export const Profile: React.FC<Props> = ({ loading, user }) => {
  return (
    <LoginLayout loading={loading} user={user}>
      <Box mx="auto" w="700px">
        <Heading mb={10}>Settings</Heading>
        <Box mb={10} bg="blue.200" p={5}>
          なんかタブがあって、いつか実装される
        </Box>
        <ProfileForm user={user} />
      </Box>
    </LoginLayout>
  )
}
