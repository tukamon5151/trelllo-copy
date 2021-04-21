// ===
// @modules
import { Icon, Center, CenterProps } from '@chakra-ui/react'
import { AiOutlineStar } from 'react-icons/ai'

// ===
// @interface

export interface Props extends CenterProps {
  isStar: boolean
  onAdd: React.MouseEventHandler
  onRemove: React.MouseEventHandler
}

// ===
// @view
export const BoardStar: React.VFC<Props> = ({
  isStar,
  onAdd,
  onRemove,
  ...other
}) => {
  return (
    <Center {...other}>
      <Icon
        as={AiOutlineStar}
        color={isStar ? 'yellow' : 'white'}
        onClick={isStar ? onRemove : onAdd}
        _hover={{
          transform: 'scale(1.1)',
        }}
      />
    </Center>
  )
}
