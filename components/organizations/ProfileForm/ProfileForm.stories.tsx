import { Story } from '@storybook/react'
import { MypageProvider } from '../../../hooks/useMypage'
import { Base as Profile } from '../../templates/Profile/Profile.stories'
import { ProfileForm } from './ProfileForm'

export default {
  title: 'organizations/ProfileForm',
  component: ProfileForm,
  decorators: [
    (Story: Story): React.ReactElement => (
      <MypageProvider value={Profile.args}>
        <Story />
      </MypageProvider>
    ),
  ],
}

export const Base = (args: Record<string, unknown>): React.ReactElement => (
  <ProfileForm {...args} />
)
