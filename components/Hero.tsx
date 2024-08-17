'use client'

import { Box, Button, Container, Flex, Heading, HStack, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { PiHorseLight } from 'react-icons/pi'

interface HeroData {
    title: string
    subtitle: string
    description: string
    cta: HeroCta[]
    image: string
    showButtons?: boolean
}

interface HeroCta {
    title: string
    href: string
}

interface HeroProps {
    data: HeroData
}

const Hero: React.FC<HeroProps> = (props) => {
    const HERO_DATA = props.data

    return (
        <Box>
            <Container maxW='7xl' p={8} py={10} as={HStack} spacing={12}>
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

                        {HERO_DATA.cta.map((cta, index) => (
                            <Button
                                key={index}
                                rounded='full'
                                size='lg'
                                as="a"
                                colorScheme={index == 0 ? 'blue' : 'gray'}
                                href={cta.href}>
                                {cta.title}
                            </Button>
                        ))}
                    </Stack>
                </Stack>

                <Box display="flex" alignItems="center">
                    <Image
                        maxH="2xl"
                        alt='Login Image'
                        objectFit='contain'
                        src={HERO_DATA.image}
                        fallback={<PiHorseLight color='black' size="80%" />}
                    />
                </Box>
            </Container>
        </Box>
    )
}

export default Hero

