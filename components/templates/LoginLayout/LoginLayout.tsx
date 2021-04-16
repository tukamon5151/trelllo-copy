// ===
// @modules
import { Spinner } from '@chakra-ui/react'
import { Header } from '../../organizations/Header/Header'
import { useUser } from '../../../hooks/useUser'

// ===
// @interface

// ===
// @view
export const LoginLayout: React.FC = ({ children }) => {
  const { user, loading } = useUser()
  if (!user || loading) return <Spinner />

  return (
    <>
      <Header user={user} />
      {children}
    </>
  )
}
