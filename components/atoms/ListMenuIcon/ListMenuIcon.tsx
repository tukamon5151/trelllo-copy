// @Modules
import { forwardRef } from 'react'
import { Icon, IconProps } from '@chakra-ui/react'
import { BiDotsHorizontal } from 'react-icons/bi'

// @Interfaces
export type Props = Omit<IconProps, 'css'>

// @Component
export const ListMenuIcon = forwardRef<SVGSVGElement, Props>(
  function ListMenuIcon(props, ref) {
    return (
      <Icon cursor="pointer" {...props} ref={ref}>
        <BiDotsHorizontal />
      </Icon>
    )
  },
)
