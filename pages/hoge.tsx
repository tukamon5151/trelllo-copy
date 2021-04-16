// ===
// @modules
// ===
import { Spinner } from '@chakra-ui/react'
import { useUser } from '../hooks/useUser'

// ===
// @Types
// ===

// ===
// @Component
// ===

const Hoge: React.FC = () => {
  const { user, loading } = useUser()
  if (!user || loading) {
    return <Spinner />
  }

  return <div>ログインしてますねあなたは</div>
}
export default Hoge
