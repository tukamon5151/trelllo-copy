// ===
// @modules
// ===
import { NextPage } from 'next'
import { useUser } from '../hooks/useUser'
import { Profile } from '../components/templates/Profile'

// ===
// @Component
// ===

const Mypage: NextPage = () => {
  const { user, loading } = useUser()

  return <Profile loading={loading} user={user} />
}

// ===
// @Styles
// ===

// ===
// @export
// ===

export default Mypage
