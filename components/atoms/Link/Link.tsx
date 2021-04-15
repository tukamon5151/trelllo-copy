// ===
// @modules
import NextLink from 'next/link'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

// ===
// @interface

// ===
// @view
export const Link: React.FC<LinkProps> = (props) => {
  return (
    <NextLink href={props.href}>
      <ChakraLink {...props} />
    </NextLink>
  )
}

// ===
// @styled
