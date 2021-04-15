// ===
// @modules
import {
  Center,
  VStack,
  Box,
  Button,
  Input,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react'
import { Link } from '../../atoms/Link/Link'

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
          <Flex>
            <Input
              placeholder="メールアドレス"
              mr={5}
              bg={'white'}
              d="block"
              w="100%"
            />
            <Button colorScheme="blue" d="block" w={300}>
              アカウントを作成
            </Button>
          </Flex>
          <Box>
            <Link href="/">ログイン</Link>
          </Box>
        </VStack>
      </Center>
    </Box>
  )
}

// ===
// @styled
