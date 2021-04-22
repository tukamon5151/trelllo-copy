// @Modules
import { forwardRef } from 'react'
import { Link, LinkProps, Icon } from '@chakra-ui/react'
import { CgHome } from 'react-icons/cg'
import { RoundSquareButton } from '../../atoms/RoundSquareButton'

// @Interfaces
export type Props = { iconWidth?: string | number } & LinkProps

// @Component
export const HomeButton = forwardRef<HTMLAnchorElement, Props>(
  function HomeButton({ href, iconWidth, ...other }, ref) {
    return (
      <Link href={href} ref={ref} {...other}>
        <RoundSquareButton size="100%">
          <Icon as={CgHome} w={iconWidth} />
        </RoundSquareButton>
      </Link>
    )
  },
)
