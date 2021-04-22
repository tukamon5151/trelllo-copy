// ===
// @modules
import { Icon, Center, CenterProps } from '@chakra-ui/react'
import { AiOutlineStar } from 'react-icons/ai'

// ===
// @interface

export interface Props extends CenterProps {
  isStar: boolean
  iconWidth?: string | number
}

// ===
// @view
export const BoardStar: React.VFC<Props> = ({
  isStar,
  iconWidth = 8,
  ...other
}) => {
  return (
    <Center {...other}>
      <Icon
        as={AiOutlineStar}
        color={isStar ? 'yellow' : 'white'}
        w={iconWidth}
        _hover={{
          transform: 'scale(1.1)',
        }}
      />
    </Center>
  )
}
