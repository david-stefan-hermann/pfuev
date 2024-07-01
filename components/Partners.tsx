'use client'

import { Box, Container, Flex, Heading, Image, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { PiHorseLight } from "react-icons/pi"
import { DefaultSection } from '@/components'

interface CardProps {
    heading: string
    description: string
    icon: string
    href: string
}

const Card: React.FC<CardProps> = ({ heading, description, icon, href }) => {
    return (
        <Box
            maxW={{ base: 'full', md: '275px' }}
            w='full'
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            p={5}>
            <Stack align='start' spacing={2}>
                <Flex
                    w={28}
                    h={28}
                    align='center'
                    justify='center'
                    color='white'
                    rounded='full'
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    <Image
                        src={icon}
                        alt="Partner Logo"
                        fallback={<PiHorseLight color='black' size="80%" />}
                    />
                </Flex>
                <Box mt={2}>
                    <Heading size="md">{heading}</Heading>
                    <Text mt={1} textAlign="left" style={{ hyphens: "auto" }}>
                        {description}
                    </Text>
                </Box>
                {
                    href &&
                    <Link href={href} color='blue.500' isExternal>
                        mehr erhfahren
                    </Link>
                }
            </Stack>
        </Box>
    )
}

const Partners: React.FC = () => {
    return (
        <DefaultSection
            title={PARTNERS_TITLE.title}
            subtitle={PARTNERS_TITLE.subtitle}
            bg={true}
        >
            <Container maxW='5xl'>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                    {
                        PARTNERS_DATA.map((partner, index) => (
                            <Card
                                key={index}
                                heading={partner.heading}
                                icon={partner.logo}
                                description={partner.description}
                                href={partner.href}
                            />
                        ))
                    }
                </Flex>
            </Container>
        </DefaultSection>
    )
}

export default Partners

const PARTNERS_TITLE = {
    title: 'Unsere Partner',
    subtitle: `Unsere Partnerorganisationen des PFÜV spielen eine entscheidende Rolle bei der Sicherstellung höchster
        Standards in der Pferdegesundheit und - leistung.Jede regionale Organisation bringt ihre spezielle
        Expertise ein und trägt zur kontinuierlichen Verbesserung und Weiterentwicklung unserer
        Dienstleistungen bei.Gemeinsam mit unseren Partnern setzen wir Maßstäbe in der Pferdeinspektion und
        bieten ein umfassendes Netzwerk an Unterstützung und Innovation.`,
}

const PARTNERS_DATA = [
    {
        heading: 'PFÜV Nord',
        description: 'Die führende Organisation für Pferdegesundheit und -inspektion im Norden. PFÜV Nord setzt Maßstäbe in der Gesundheitsprüfung und Leistungsanalyse.',
        logo: '/partners/nord.png',
        href: '',
    },
    {
        heading: 'PFÜV Süd',
        description: 'PFÜV Süd bietet umfassende Zertifizierungs- und Überprüfungsdienste für Pferde in der südlichen Region, spezialisiert auf nachhaltige Methoden.',
        logo: '/partners/sued.png',
        href: '',
    },
    {
        heading: 'PFÜV Pferdland',
        description: 'Lokale Reichweite und Standards zeichnen PFÜV Pferdland aus, der vertrauenswürdige Partner für Pferdeinspektion im Rheinland.',
        logo: '/partners/pferdl.png',
        href: '',
    },
    {
        heading: 'PFÜV Austria',
        description: 'Als zuverlässiger Partner für Pferdebesitzer und Züchter in Österreich steht PFÜV Austria für höchste Qualität in der Pferdeinspektion und Zertifizierung',
        logo: '/partners/aust.png',
        href: '',
    },
    {
        heading: 'PFÜV Schweiz',
        description: 'PFÜV Schweiz AG kombiniert modernste Technologien und erfahrene Experten, um die Gesundheit und Leistung von Pferden in der Schweiz zu gewährleisten.',
        logo: '/partners/swiss.png',
        href: '',
    },
]