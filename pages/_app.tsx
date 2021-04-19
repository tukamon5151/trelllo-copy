import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { BoardsProviderContainer } from '../components/Provider/BoardProviderContainer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider>
        <BoardsProviderContainer>
          <Component {...pageProps} />
        </BoardsProviderContainer>
      </ChakraProvider>
    </NextAuthProvider>
  )
}

export default MyApp
