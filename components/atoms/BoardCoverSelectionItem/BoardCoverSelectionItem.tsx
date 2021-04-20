// ===
// @modules
import {
  Square,
  Box,
  AspectRatio,
  BoxProps,
  SquareProps,
  Icon,
  Center,
} from '@chakra-ui/react'
import { AiOutlineCheck } from 'react-icons/ai'
import { useMemo } from 'react'
import { useSetCover } from './useSetCover'

// ===
// @interface

export type Props = {
  variant: 'square' | 'box'
  selectedColor?: string
  selectedImage?: string
  ownColor?: string
  ownImage?: string
} & (BoxProps | SquareProps)

// ===
// @view
export const BoardCoverSelectionItem: React.VFC<Props> = ({
  variant,
  selectedColor,
  selectedImage,
  ownColor,
  ownImage,
  ...other
}) => {
  const setCover = useSetCover()
  const isSelected = useMemo(
    () => selectedImage === ownImage && selectedColor === ownColor,
    [selectedImage, selectedColor],
  )

  const commonStyleOption = {
    bgColor: isSelected && ownImage ? 'rgba(0,0,0,.15)' : ownColor,
    bgImage: ownImage ? `url(${ownImage})` : '',
    bgSize: 'cover',
    bgPosition: '50%',
    borderRadius: 3,
    cursor: 'pointer',
    _hover: {
      ':before': {
        bg: 'rgba(0,0,0,.15)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        content: '""',
        display: 'block',
        zIndex: 0,
        borderRadius: 3,
      },
    },
  }

  const Check = () =>
    isSelected ? (
      <Center>
        <Icon as={AiOutlineCheck} size={8} color="white" fontWeight="bold" />
      </Center>
    ) : (
      <></>
    )

  const onClick = () => setCover({ color: ownColor, image: ownImage })

  if (variant === 'square') {
    return (
      <Square
        position="relative"
        {...commonStyleOption}
        size={8}
        {...other}
        onClick={onClick}
      >
        <Check />
      </Square>
    )
  }

  return (
    <Box
      position="relative"
      {...commonStyleOption}
      {...other}
      onClick={onClick}
    >
      <AspectRatio ratio={16 / 9}>
        <Check />
      </AspectRatio>
    </Box>
  )
}
