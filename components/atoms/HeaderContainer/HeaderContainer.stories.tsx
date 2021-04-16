import { HeaderContainer } from './HeaderContainer'

export default {
  title: 'atoms/HeaderContainer',
  component: HeaderContainer,
}

export const Base = (args: Record<string, unknown>): React.ReactElement => (
  <HeaderContainer {...args}>コンテナ</HeaderContainer>
)
