// ===
// @modules
import { Spinner } from '@chakra-ui/react'
import { Header } from '../../organizations/Header/Header'
import { User } from '../../../hooks/useUser'

// ===
// @interface
export interface Props {
  user?: User
  loading: boolean
}

// ===
// @view
export const LoginLayout: React.FC<Props> = ({ children, user, loading }) => {
  if (!user || loading) return <Spinner />

  return (
    <>
      <Header user={user} />
      {children}
    </>
  )
}
