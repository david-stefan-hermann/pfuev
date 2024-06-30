'use client'

import { ChatIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
    Box,
    Heading,
    Image,
    Text,
    useColorModeValue,
    Container,
    VStack,
    Stack,
    Button,
    Center,
    Link,
} from '@chakra-ui/react'
import { PiHorseLight } from 'react-icons/pi';

const SingleService: React.FC<SingleServiceProps> = (service) => {
    return (
        <Container as={Stack} maxW={"full"} py={16} bg={service.id % 2 ? useColorModeValue('gray.100', 'gray.700') : ""}>
            <Container as={Stack} maxW={'5xl'} spacing={12}>
                <Box
                    display="flex"
                    flexDirection={{ base: 'column', sm: 'row' }}
                    justifyContent="space-between">
                    <Box
                        display="flex"
                        flex="2"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '0' }}>
                        <Heading marginTop="1">
                            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                {service.title}
                            </Text>
                        </Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            {service.subtitle}
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        marginRight="3"
                        position="relative"
                        alignItems="center">
                        <Box
                            width={{ base: '100%', sm: '85%' }}
                            zIndex="2"
                            marginLeft={{ base: '0', sm: '5%' }}
                            marginTop="5%">
                            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image
                                    borderRadius="lg"
                                    src={service.image}
                                    alt="Dienstleistungsbild"
                                    objectFit="contain"
                                    fallback={<PiHorseLight color='black' size={"80%"} />}
                                />
                                {
                                    service.author &&
                                    <Link href={service.attribution} isExternal>
                                        <Text fontSize="sm" color="gray.500" textAlign="right">
                                            {service.author}
                                            <ExternalLinkIcon ml={1} mb={1} />
                                        </Text>
                                    </Link>
                                }
                            </Box>
                        </Box>
                        <Box zIndex="1" width="100%" position="absolute" height="100%">
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(blue.600 1px, transparent 1px)',
                                    'radial(blue.300 1px, transparent 1px)',
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.4"
                                height="100%"
                            />
                        </Box>
                    </Box>
                </Box>

                <VStack spacing="2" alignItems="flex-start">
                    {service.content.map((content, index) => (
                        <ServiceParagraph key={index} heading={content.heading} text={content.text} />
                    ))}
                </VStack>

                <Center>
                    <Button as={"a"} colorScheme={"blue"} variant={"solid"} rounded={"full"} href="/#kontakt">
                        <ChatIcon mr={2} mt={1} />
                        Jetzt Kontaktieren
                    </Button>
                </Center>
            </Container>
        </Container>
    )
}

export default SingleService

const ServiceParagraph: React.FC<SingleServiceContent> = ({ heading, text }) => {
    return (
        <>
            <Heading size={"lg"}>{heading}</Heading>
            <Text as="p" fontSize="lg" py={4}>{text}</Text>
        </>
    )
}

interface SingleServiceContent {
    heading: string
    text: string
}

interface SingleServiceProps {
    id: number
    title: string
    subtitle: string
    image: string
    author: string
    attribution: string
    content: SingleServiceContent[]
}