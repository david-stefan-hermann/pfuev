'use client'

import { Box, Flex, SimpleGrid, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react'
import { PiHorseLight, PiMaskHappyLight, PiGlobeHemisphereWestLight } from "react-icons/pi"
import { DefaultSection } from '@/components'

interface StatsCardProps {
    title: string
    stat: string
    icon?: React.ReactNode
}

const StatsCard: React.FC<StatsCardProps> = (props) => {
    const { title, stat, icon } = props
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py='5'
            shadow='xl'
            border='1px solid'
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded='lg'>
            <Flex justifyContent='space-between'>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight='medium' isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize='2xl' fontWeight='medium'>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my='auto'
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent='center'>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    )
}

const BasicStatistics: React.FC = () => {
    return (
        <DefaultSection
            title={STATS_TITLE.title}
            subtitle={STATS_TITLE.subtitle}
            bg={false}
        >
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                {STATS_DATA.map((stat, index) => (
                    <StatsCard
                        key={index}
                        title={stat.title}
                        stat={stat.stat}
                        icon={stat.icon}/>
                ))}
            </SimpleGrid>
        </DefaultSection>
    )
}

export default BasicStatistics

const STATS_TITLE = {
    title: 'Was wir vorzeigen können',
    subtitle: 'Wir sind stolz darauf, die Nummer 1 in der DACH-Region zu sein!'
}

const STATS_DATA = [
    {
        title: 'Wir prüfen pro Jahr',
        stat: '50.000 Pferde',
        icon: <PiHorseLight size='3em' />
    },
    {
        title: 'Arbeiten in',
        stat: '3 verschiedenen Ländern',
        icon: <PiGlobeHemisphereWestLight size='3em' />
    },
    {
        title: 'Mit einer Kundenzufriedenheit von',
        stat: '69% +',
        icon: <PiMaskHappyLight size='3em' />
    }
]