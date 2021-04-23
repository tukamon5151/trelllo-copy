// ===
// @modules
// ===
import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useLogin } from '../../../lib/client/hooks/useLogin'
import { LoginLayout } from '../../../components/templates/LoginLayout/LoginLayout'
import { BoardShow } from '../../../components/templates/BoardShow'
import { useBoardShow } from './useBoardShow'

// ===
// @Types
// ===

// ===
// @Component
// ===

const Board: NextPage = () => {
  return (
    <Box h="100vh">
      <LoginLayout {...useLogin()}>
        <BoardShow {...useBoardShow()} />
      </LoginLayout>
    </Box>
  )
}

// ===
// @export
// ===
export default Board
