'use client'

import { Box, Stack, HStack, Text, VStack, useColorModeValue, List, ListItem, ListIcon, Button } from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import { DefaultSection } from '@/components'

interface Props {
    title: string
    price: string
    duration: string
    button: boolean
    popular: boolean
    features: string[]
}

const PriceWrapper: React.FC<Props> = (item) => {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius='xl'>
            <Box pt={4} pb={2} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                    {item.title}
                </Text>
                <HStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="600">
                        {item.duration ? "€" : "ab €"}
                    </Text>
                    <Text fontSize="5xl" fontWeight="900">
                        {item.price}
                    </Text>
                    <Text fontSize="3xl" color="gray.500">
                        {item.duration}
                    </Text>
                </HStack>
            </Box>
            <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius='xl'>
                <List spacing={3} textAlign="start" px={12}>
                    {item.features.map((feature, index) => (
                        <ListItem key={index}>
                            <ListIcon as={FaCheckCircle} color="green.500" />
                            {feature}
                        </ListItem>
                    ))}
                </List>
                {
                    item.button &&
                    <Box w="80%" pt={7}>
                        <Button w="full" colorScheme="blue" variant="outline" as="a" href='/#kontakt'>
                            Jetzt Anfragen
                        </Button>
                    </Box>
                }
            </VStack>
        </Box>
    )
}

const Pricing: React.FC = () => {
    return (
        <DefaultSection
            title={PRICING_TITLE.title}
            subtitle={PRICING_TITLE.subtitle}
        >
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={4}>
                {PRICING_DATA.map((item, index) => (
                    <PriceWrapper key={index} {...item} />
                ))}
            </Stack>
        </DefaultSection>
    )
}

export default Pricing

const PRICING_TITLE = {
    title: 'Preise nach Ihren Bedürfnissen',
    subtitle: 'Besuchen Sie uns vor Ort und wählen Sie das für Sie passende Angebot aus.',
}

const PRICING_DATA = [
    {
        title: 'Privat',
        price: '149',
        duration: 'einmalig',
        button: false,
        popular: false,
        features: [
            '1 Gesundheitscheck',
            '1 Leistungscheck',
            '1 Zertifikat für 2 Jahre',
        ],
    },
    {
        title: 'Privat +',
        price: '19',
        duration: 'monatlich',
        button: false,
        popular: true,
        features: [
            '3 Gesundheitschecks im Jahr',
            '3 Leistungschecks im Jahr',
            '3 Zertifikate - automatisch verlängert',
            'jedes weitere Pferd: 5€/Monat',
        ],
    },
    {
        title: 'Gewerbe',
        price: '0',
        duration: '',
        button: true,
        popular: false,
        features: [
            'unlimitierte Gesundheitschecks',
            'unlimitierte Leistungschecks',
            'unlimitierte Zertifikate',
            'unlimitierte Pferde',
            '24/7 Support'
        ],
    },
]