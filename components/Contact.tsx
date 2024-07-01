'use client'

import { Box, Center, Container, Heading, ListItem, OrderedList, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react"

const Contact: React.FC = () => {
    return (
        <Container maxW='full' as={Stack} p={0} bg={useColorModeValue('gray.100', 'gray.700')}>
            <Container maxW='7xl' as={Stack} spacing={12} py={16} textAlign="center">
                <Center w="full" textAlign="center">
                    <VStack spacing={2}>
                        <Heading>Kontakt</Heading>
                        <Text fontSize="lg" color='gray.500'>
                            Kontaktieren Sie den Gott des PFÜV für Segen und Schutz für Ihre Pferde.
                        </Text>
                    </VStack>
                </Center>
                <Center>
                    <Box
                        maxW={{ base: 'full', md: 'xl' }}
                        w='full'
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        bg="white"
                        p={5}
                        py={7}>
                        <Box>
                            <VStack spacing={5}>
                                <Heading>
                                    Anweisungen
                                </Heading>
                                <OrderedList textAlign="left" spacing={3}>
                                    <ListItem>
                                        Gehen Sie an einen ruhigen Ort, an dem Sie ungestört sind.
                                    </ListItem>
                                    <ListItem>
                                        Schließen Sie die Augen und atmen Sie tief durch. Entspannen Sie
                                        sich vollständig.
                                    </ListItem>
                                    <ListItem>
                                        Visualisieren Sie ein starkes, gesundes Pferd vor Ihrem inneren
                                        Auge. Stellen Sie sich vor, wie es stolz und kraftvoll galoppiert.
                                    </ListItem>
                                    <ListItem>
                                        Sprechen Sie die folgenden Worte mit klarer und fester Stimme:
                                    </ListItem>
                                    <Text fontWeight="bold" fontStyle="italic">
                                        &quot;Oh mächtiger Gott des PFÜV, höre mein Gebet. Schenke meinen Pferden
                                        Gesundheit und Stärke und vor allem ein Zertifikat. Möge dein Segen über ihnen sein und sie auf
                                        ihren Wegen beschützen. Ich danke dir für deine göttliche Fürsorge.&quot;
                                    </Text>
                                    <ListItem>
                                        Verweilen Sie noch einen Moment in Stille, um die Verbindung zu
                                        spüren. Öffnen Sie dann langsam die Augen.
                                    </ListItem>
                                    <ListItem>
                                        Gehen Sie in dem Wissen, dass der Gott des PFÜV Ihr Gebet gehört
                                        hat und über Ihre Pferde wacht.
                                    </ListItem>
                                    <Text fontSize="sm" color="gray.500">
                                        Hinweis: Diese Anleitung ist spiritueller Natur und sollte mit
                                        Respekt und Ernsthaftigkeit befolgt werden.
                                    </Text>
                                </OrderedList>
                            </VStack>
                        </Box>
                    </Box>
                </Center>
            </Container>
        </Container>
    )
}

export default Contact
