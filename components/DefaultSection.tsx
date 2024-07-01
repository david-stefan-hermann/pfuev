import { Box, Center, Container, Heading, Stack, VStack, useColorModeValue, Text } from "@chakra-ui/react"

interface DefaultSectionProps {
    title?: string
    subtitle?: string
    bg?: boolean
    children?: React.ReactNode
}

const DefaultSection: React.FC<DefaultSectionProps> = (props) => {
    const bg = props.bg ? useColorModeValue('gray.100', 'gray.700') : ''
    return (
        <Box bg={bg}>
            <Container maxW='7xl' py={10} as={Stack} spacing={12}>
                {(props.title || props.subtitle) && <Center w="full" textAlign="center">
                    <VStack spacing={2}>
                        {props.title && <Heading>{props.title}</Heading>}
                        {props.subtitle && <Text fontSize="lg" color='gray.500'>{props.subtitle}</Text>}
                    </VStack>
                </Center>}
                {props.children}
            </Container>
        </Box>
    )
}

export default DefaultSection