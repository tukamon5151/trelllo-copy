// ===
// @modules
import { SimpleGridProps, SimpleGrid } from '@chakra-ui/react'
import { BoardCoverSelectionItem } from '../../atoms/BoardCoverSelectionItem'
import { getAbsoluteUrl } from '../../../lib/getAbsoluteUrl'
import { BoardColor } from '../../../dto/board'

// ===
// @interface

export type Props = {
  selectedColor?: string
  selectedImage?: string
} & SimpleGridProps

// ===
// @view
export const BoardCoverGridSelector: React.VFC<Props> = ({
  selectedColor,
  selectedImage,
  ...other
}) => {
  const Colors: BoardColor[] = [
    'green',
    'blue',
    'red',
    'tomato',
    'pink',
    'gray',
    'purple',
  ]
  const Images = ['/board-cover.png']
  return (
    <SimpleGrid columns={3} spacing={1} {...other}>
      {Colors.map((color) => (
        <BoardCoverSelectionItem
          variant="square"
          ownColor={color}
          selectedColor={selectedColor}
          selectedImage={selectedImage}
          key={color}
        />
      ))}
      {Images.map((image) => (
        <BoardCoverSelectionItem
          variant="square"
          ownImage={getAbsoluteUrl(image)}
          selectedColor={selectedColor}
          selectedImage={getAbsoluteUrl(selectedImage)}
          key={color}
        />
      ))}
    </SimpleGrid>
  )
}
