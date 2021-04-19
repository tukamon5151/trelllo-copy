// ===
// @modules
import { Square, SimpleGridProps, SimpleGrid } from '@chakra-ui/react'

// ===
// @interface

export interface Props extends SimpleGridProps {
  color?: string
  image?: string
}

// ===
// @view
export const BoardCoverSelector: React.VFC<Props> = ({
  color,
  image,
  ...other
}) => {
  return (
    <SimpleGrid columns={3} spacing={1} bg="tomato" {...other}>
      <Square size={8}>あ</Square>
      <Square size={8}>あ</Square>
      <Square size={8}>あ</Square>
      <Square size={8}>あ</Square>
      <Square size={8}>あ</Square>
      <Square size={8}>あ</Square>
      <Square size={8}>あ</Square>
      <Square size={8}>あ</Square>
      <Square size={8}>あ</Square>
    </SimpleGrid>
  )
}
