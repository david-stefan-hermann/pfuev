'use client'

import { Box, Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { PiHorseLight } from 'react-icons/pi'

interface HeroData {
    title: string
    subtitle: string
    description: string
    cta: HeroCta[]
    image?: string
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
    const [windowHeight, setWindowHeight] = useState(0)
    const [headerHeight, setHeaderHeight] = useState(100)

    useEffect(() => {
        setWindowHeight(window.innerHeight)
    },[])

    useEffect(() => {
        const headerElement = document.getElementById('header')
        if (headerElement) {
            const newHeight = headerElement.offsetHeight
            setHeaderHeight(newHeight)
        }
    })

    return (
        <Stack px={8} py={{base: '8', md: '0'}} minH={{base: '', md: windowHeight - headerHeight}} pb={{base: '8', md: headerHeight}} direction={{ base: 'column', md: 'row' }}>
            <Flex flex={1} align='center' justify={{base: 'left', md: 'center'}}>
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
            </Flex>
            {HERO_DATA.image && (
                <Flex flex={1}>
                    <Box display="flex"p={8} alignItems="center">
                        <Image
                            maxH="2xl"
                            alt='Login Image'
                            objectFit='contain'
                            src={HERO_DATA.image}
                            fallback={<PiHorseLight color='black' size="80%" />}
                        />
                    </Box>
                </Flex>
            )}
        </Stack>
    )
}

export default Hero

