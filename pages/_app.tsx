import '../styles/globals.css'
import 'reflect-metadata'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { BaseProvider } from '../components/Provider/BaseProvider'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider>
        <BaseProvider>
          <Component {...pageProps} />
        </BaseProvider>
      </ChakraProvider>
    </NextAuthProvider>
  )
}

export default MyApp
