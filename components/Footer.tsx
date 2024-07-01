'use client'

import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden, Image, Heading, Link } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { PiHorseLight } from 'react-icons/pi'

const Logo: React.FC = () => {
    return (
        <Link href='/'>
            <Image
                src={FOOTER_DATA.image}
                height="20"
                alt="Pfüv Logo"
                fallback={<PiHorseLight color='black' size="80%" />} />
        </Link>
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
                        <Heading size="md">{FOOTER_DATA.imprint.title}</Heading>
                        {FOOTER_DATA.imprint.data.map((item, index) => (
                            <Text key={index}>
                                {item}
                            </Text>
                        ))}
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center">
                        <Image
                            src={FOOTER_DATA.imprint.image}
                            height=""
                            alt="GF"
                            fallback={<PiHorseLight color='black' size="80%" />} />
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
                    <Text>{FOOTER_DATA.copyright}</Text>
                    <Stack direction='row' spacing={6}>
                        {FOOTER_DATA.social.map((item, index) => (
                            <SocialButton key={index} label={item.href} href={item.href}>
                                {item.icon}
                            </SocialButton>
                        ))}
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}

export default Footer

const FOOTER_DATA = {
    image: '/logo.png',
    copyright: '© 2024 PFÜV - Pferdischer Überwachungsverein',
    imprint: {
        title: 'Impressum',
        image: '/footer/1.png',
        data: [
            'David Hermann',
            '12345 Pferdhausen',
            'Tel.: 01234 56789',
            'Email: info@pfuev.org'
        ]
    },
    links: [
        {
            title: 'Home',
            href: '/#'
        },
        {
            title: 'Über uns',
            href: '/#pfuev'
        },
        {
            title: 'Unsere Partner',
            href: '/#partner'
        },
        {
            title: 'Kontakt',
            href: '/#kontakt'
        }
    ],
    social: [
        {
            icon: <FaGithub />,
            href: 'https://github.com/david-stefan-hermann'
        },
        {
            icon: <FaLinkedin />,
            href: 'https://www.linkedin.com/in/david-hermann-cs/'
        }
    ],
}