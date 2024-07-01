'use client'

import { Box, Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { PiHorseLight } from 'react-icons/pi'

const Hero: React.FC = () => {
    return (
        <Stack minH='90vh' direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align='center' justify='center'>
                <Stack spacing={6} w='full' maxW='lg'>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as='span'
                            position='relative'
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'blue.400',
                                zIndex: -1,
                            }}>
                            {HERO_DATA.title}
                        </Text>
                        <br />{' '}
                        <Text color='blue.400' as='span'>
                            {HERO_DATA.subtitle}
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color='gray.500'>
                        {HERO_DATA.description}
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button
                            rounded='full'
                            size='lg'
                            colorScheme='blue'
                            as="a"
                            href="#kontakt">
                            {HERO_DATA.cta}
                        </Button>
                        <Button
                            rounded='full'
                            size='lg'
                            as="a"
                            href="#partner">
                            Partner
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Box display="flex" alignItems="center">
                    <Image
                        maxH="2xl"
                        alt='Login Image'
                        objectFit='contain'
                        src={HERO_DATA.image}
                        fallback={<PiHorseLight color='black' size="80%" />}
                    />
                </Box>
            </Flex>
        </Stack>
    )
}

export default Hero

const HERO_DATA = {
    title: 'PFÜV',
    subtitle: 'Pferdischer Überwachungsverein',
    description: 'Willkommen beim PFÜV, dem führenden Verein für die Überprüfung und Inspektion von Pferden. Wir sorgen dafür, dass Ihre Pferde stets in bester Verfassung sind.',
    cta: 'Jetzt Kontaktieren',
    image: '/hero/logo.png'
}