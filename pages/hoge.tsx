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
  const { loading } = useUser()
  if (loading) {
    return <Spinner />
  }

  return <div>ログインしてますねあなたは</div>
}
export default Hoge
