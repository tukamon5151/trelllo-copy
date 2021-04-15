// ===
// @modules
import {
  Center,
  VStack,
  Box,
  Button,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { LoginModal } from '../../organizations/LoginModal/LoginModal'

// ===
// @interface

// ===
// @view
export const Top: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Box bgGradient="linear(purple.100, white)">
      <LoginModal onClose={onClose} isOpen={isOpen} />
      <Center py={150} w={700} mx="auto">
        <VStack spacing={5}>
          <Heading as="h1" mb={5}>
            Trelloでチームの生産性をアップ。
          </Heading>
          <Text mb={5}>
            コラボレーション、プロジェクト管理、生産性の向上。高層ビルでも自宅のオフィスでも、Trelloならチームの仕事の進め方に合わせて全てを達成出来ます。
          </Text>
          <Button colorScheme="blue" d="block" w={300} onClick={onOpen}>
            ログイン
          </Button>
        </VStack>
      </Center>
    </Box>
  )
}

// ===
// @styled
