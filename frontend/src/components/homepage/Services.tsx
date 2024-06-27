import { Box, Heading, Text, Stack } from "@chakra-ui/react"
import React from "react"

const Services = () => {
    return (
        <Box py={10}>
            <Heading as="h2" size="xl" mb={4} textAlign="center">
                Unsere Dienstleistungen
            </Heading>
            <Stack spacing={5}>
                <Box>
                    <Heading as="h3" size="lg">
                        Gesundheitschecks
                    </Heading>
                    <Text color="gray.600">
                        Umfassende Gesundheitsprüfungen, um sicherzustellen, dass Ihre Pferde gesund und fit sind.
                    </Text>
                </Box>
                <Box>
                    <Heading as="h3" size="lg">
                        Leistungsanalysen
                    </Heading>
                    <Text color="gray.600">
                        Detaillierte Leistungsanalysen zur Optimierung der Trainingsprogramme.
                    </Text>
                </Box>
                <Box>
                    <Heading as="h3" size="lg">
                        Zertifizierungen
                    </Heading>
                    <Text color="gray.600">
                        Offizielle Zertifizierungen für Zucht- und Verkaufszwecke.
                    </Text>
                </Box>
            </Stack>
        </Box>
    )
}

export default Services
