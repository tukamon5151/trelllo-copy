// ===
// @modules
import { Spinner } from '@chakra-ui/react'
import { Header } from '../../organizations/Header/Header'
import { CurrentUserProvider } from '../../../hooks/useCurrentUser'
import { CurrentUser } from '../../../model/client/CurrentUser'

// ===
// @interface
interface Props {
  currentUser: CurrentUser
  loading: boolean
}

// ===
// @view
export const LoginLayout: React.FC<Props> = ({
  children,
  currentUser,
  loading,
}) => {
  if (!currentUser || loading) return <Spinner />

  return (
    <CurrentUserProvider value={currentUser}>
      <Header />
      {children}
    </CurrentUserProvider>
  )
}
