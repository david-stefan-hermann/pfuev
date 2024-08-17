"use client"

import { Box, Heading, Image, Text, useColorModeValue, Container, VStack, Stack, Button, Center, Link, HStack } from '@chakra-ui/react'
import { PiHorseLight } from 'react-icons/pi'

interface GodProps {
    id: number
    god: God
}

interface God {
    name: string
    description: string
    image: string
}

const God: React.FC<GodProps> = (godProps) => {
    const bg = useColorModeValue('gray.100', 'gray.700')
    const conditionalBg = godProps.id % 2 ? bg : ""

    return (
        <Container as={Stack} maxW="full" pt={8} pb={16} bg={conditionalBg}>
            <Container as={Stack} maxW='5xl' spacing={12}>
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
                            <HStack>
                                <Text color='gray.600'>
                                    {godProps.id + 1}.
                                </Text>
                                <Text>
                                    {godProps.god.name}
                                </Text>
                            </HStack>
                        </Heading>
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
                                    src={godProps.god.image}
                                    alt="Bild eines Gottes"
                                    objectFit="contain"
                                    fallback={<PiHorseLight color='black' size={"80%"} />}
                                />
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
                    <Text
                        as="p"
                        marginTop="2"
                        fontSize="lg">
                        {godProps.god.description}
                    </Text>
                </VStack>

            </Container>
        </Container>
    )
}

export default God
