// ===
// @modules
import { LoginLayout } from '../LoginLayout/LoginLayout'
import { User } from '../../../hooks/useUser'

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
    <div>
      <LoginLayout loading={loading} user={user}>
        プロフィール
      </LoginLayout>
    </div>
  )
}
