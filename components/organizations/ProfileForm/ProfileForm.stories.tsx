import { Story } from '@storybook/react'
import { Base as Profile } from '../../templates/Profile/Profile.stories'
import { MeProviderContainer } from '../../Provider/MeProviderContainer'
import { ProfileForm } from './ProfileForm'

export default {
  title: 'organizations/ProfileForm',
  component: ProfileForm,
  decorators: [
    (Story: Story): React.ReactElement => (
      <MeProviderContainer initialState={{ user: Profile.args }}>
        <Story />
      </MeProviderContainer>
    ),
  ],
}

export const Base = (args: Record<string, unknown>): React.ReactElement => (
  <ProfileForm {...args} />
)
