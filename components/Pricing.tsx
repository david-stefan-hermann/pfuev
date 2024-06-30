'use client'

import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
    Container,
    Center,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

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
            borderRadius={'xl'}>
            <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                    {item.title}
                </Text>
                <HStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="600">
                        €
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
                borderBottomRadius={'xl'}>
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
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
            <Center w={"full"} textAlign={"center"}>
                <VStack spacing={2}>
                    <Heading>Preise nach Ihren Bedürfnissen</Heading>
                    <Text fontSize="lg" color={'gray.500'}>
                        Besuchen Sie uns vor Ort und wählen Sie das für Sie passende Angebot aus.
                    </Text>
                </VStack>
            </Center>
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
        </Container>
    )
}

export default Pricing

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
            '2 Gesundheitschecks im Jahr',
            '2 Leistungschecks im Jahr',
            '1 Zeriifikat automatisch verlängert',
            'jedes weitere Pferd: 5€/Monat',
        ],
    },
    {
        title: 'Gewerbe',
        price: '0',
        duration: 'auf Anfrage',
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