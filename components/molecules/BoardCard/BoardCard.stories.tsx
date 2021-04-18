import { BoardCard, Props } from './BoardCard'

export default {
  title: 'molecules/BoardCard',
  component: BoardCard,
}

const board = {
  id: 1,
  title: 'タイトル',
  color: 'blue',
  star: true,
}

const Template = (args: Props): React.ReactElement => <BoardCard {...args} />

export const Base = Template.bind({})
Base.args = {
  board,
}

export const CoverImage = Template.bind({})
CoverImage.args = {
  board: {
    ...board,
    image: '/board-cover.png',
    color: '',
  },
}

export const NonStar = Template.bind({})
NonStar.args = {
  board: {
    ...board,
    star: false,
  },
}
