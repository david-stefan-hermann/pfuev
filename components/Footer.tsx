'use client'

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image,
    Heading
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Logo: React.FC = () => {
    return (
        <Image src="/logo.png" height="20" alt="Pfüv Logo" />
    )
}

const SocialButton: React.FC<{ children: ReactNode, label: string, href: string }> = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded='full'
            w={8}
            h={8}
            cursor='pointer'
            as='a'
            href={href}
            target='_blank'
            display='inline-flex'
            alignItems='center'
            justifyContent='center'
            transition='background 0.3s ease'
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const Footer: React.FC = () => {
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.700')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW='6xl'
                py={4}
                spacing={4}
                justify='center'
                align='center'>
                <Logo />
                <Stack direction='row' spacing={6}>
                    <Box as="a" href='/#'>
                        Home
                    </Box>
                    <Box as="a" href='/#pfuev'>
                        Über uns
                    </Box>
                    <Box as="a" href='/#partner'>
                        Unsere Partner
                    </Box>
                    <Box as="a" href='/#kontakt'>
                        Kontakt
                    </Box>
                </Stack>
            </Container>
            <Container
                as={Stack}
                maxW='6xl'
                borderTopWidth={1}
                borderStyle='solid'
                borderColor={useColorModeValue('gray.300', 'gray.700')}>
                <Box
                    display="flex"
                    flexDirection={{ base: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    pt={4}
                    maxW='6xl'>
                    <Box
                        display="flex"
                        flex="3"
                        flexDirection="column"
                        justifyContent="">
                        <Heading size="md">Impressum</Heading>
                        <Text fontStyle="italic">
                            David Hermann
                        </Text>
                        <Text>
                            12345 Pferdhausen
                        </Text>
                        <Text>
                            Tel.: 01234 56789
                        </Text>
                        <Text>
                            E-Mail: david.hermann@pfuev.org
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center">
                        <Image src="/footer/1.png" height="" alt="GF" />
                    </Box>
                </Box>
            </Container>
            <Box
                borderTopWidth={1}
                borderStyle='solid'
                borderColor={useColorModeValue('gray.300', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW='6xl'
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© 2024 PFÜV - Pferdischer Überwachungsverein</Text>
                    <Stack direction='row' spacing={6}>
                        <SocialButton label='Github' href='https://github.com/david-stefan-hermann'>
                            <FaGithub />
                        </SocialButton>
                        <SocialButton label='LinkedIn' href='https://www.linkedin.com/in/david-hermann-cs/'>
                            <FaLinkedin />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}

export default Footer