import { ChakraProvider } from '@chakra-ui/react'
import { withNextRouter } from 'storybook-addon-next-router'


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withChakra = (Story: Function) => {
  return (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  )
}

export const decorators = [withChakra, withNextRouter]
