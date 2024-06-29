'use client'

import {
    Box,
    chakra,
    Flex,
    Heading,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    PiHorseLight,
    PiMaskHappyLight,
    PiGlobeHemisphereWestLight
} from "react-icons/pi"

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
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    )
}
const BasicStatistics: React.FC = () => {
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <Heading textAlign={'center'} py={10} fontWeight={'bold'}>
                Die NR. 1 der DACH Region!
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard title={'Wir prüfen pro Jahr'} stat={'50.000 Pferde'} icon={<PiHorseLight size={'3em'} />} />
                <StatsCard title={'Arbeiten in'} stat={'3 verschiedenen Ländern'} icon={<PiGlobeHemisphereWestLight size={'3em'} />} />
                <StatsCard title={'Mit einer Kundenzufriedenheit von'} stat={'69% +'} icon={<PiMaskHappyLight size={'3em'} />} />
            </SimpleGrid>
        </Box>
    )
}

export default BasicStatistics