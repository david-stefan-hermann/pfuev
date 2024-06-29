'use client'

import { ChakraProvider } from '@chakra-ui/react'

const Providers: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return <ChakraProvider>{children}</ChakraProvider>
}

export { Providers }