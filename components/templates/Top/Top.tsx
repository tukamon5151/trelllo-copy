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
import { Link } from '../../atoms/Link'

// ===
// @interface

// ===
// @view
export const Top: React.FC = () => {
  return (
    <Box bgGradient="linear(purple.100, white)">
      <Center py={150} w={700} mx="auto">
        <VStack spacing={5}>
          <Heading as="h1" mb={5}>
            Trelloでチームの生産性をアップ。
          </Heading>
          <Text mb={5}>
            コラボレーション、プロジェクト管理、生産性の向上。高層ビルでも自宅のオフィスでも、Trelloならチームの仕事の進め方に合わせて全てを達成出来ます。
          </Text>
          <Link as={Button} colorScheme="blue" d="block" w={300} href="/">
            ログイン
          </Link>
        </VStack>
      </Center>
    </Box>
  )
}

// ===
// @styled
