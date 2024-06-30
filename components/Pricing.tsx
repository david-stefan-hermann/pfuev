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
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

interface Props {
    title: string
    price: string
    duration: string
    button: boolean
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
        <Box py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    Plans that fit your need
                </Heading>
                <Text fontSize="lg" color={'gray.500'}>
                    Start with 14-day free trial. No credit card needed. Cancel at anytime.
                </Text>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}>
                {PRICING_DATA.map((item, index) => (
                    <PriceWrapper key={index} {...item} />
                ))}
            </Stack>
        </Box>
    )
}

export default Pricing

const PRICING_DATA = [
    {
        title: 'Privat',
        price: '149',
        duration: 'einmalig',
        button: false,
        features: [
            '1 Gesundheitscheck',
            'Lorem, ipsum dolor.',
            '5TB Lorem, ipsum dolor.'
        ],
    },
    {
        title: 'Privat +',
        price: '19',
        duration: 'monatlich',
        button: false,
        features: [
            'unlimited build minutes',
            'Lorem, ipsum dolor.',
            '5TB Lorem, ipsum dolor.',
            '5TB Lorem, ipsum dolor.',
            '5TB Lorem, ipsum dolor.',
        ],
    },
    {
        title: 'Gewerbe',
        price: '0',
        duration: 'auf Anfrage',
        button: true,
        features: ['unlimited build minutes', 'Lorem, ipsum dolor.', '5TB Lorem, ipsum dolor.'],
    },
]