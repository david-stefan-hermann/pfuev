import { Box, Heading, Text, Button, Stack, Input } from "@chakra-ui/react"
import React from "react"

const Contact = () => {
    return (
        <Box py={10} textAlign="center">
            <Heading as="h2" size="xl" mb={4}>
                Kontaktieren Sie uns
            </Heading>
            <Text fontSize="xl" color="gray.600" mb={4}>
                Wir freuen uns auf Ihre Anfrage!
            </Text>
            <Stack spacing={3} mx="auto" maxW="md">
                <Input placeholder="Ihr Name" />
                <Input placeholder="Ihre E-Mail" type="email" />
                <Input placeholder="Ihre Nachricht" />
                <Button colorScheme="teal" size="lg">
                    Nachricht senden
                </Button>
            </Stack>
        </Box>
    )
}

export default Contact
