import { Box, Text } from "@chakra-ui/react"
import React from "react"

const Description = () => {
    return (
        <Box textAlign="center" py={10}>
            <Text fontSize="xl" color="gray.600">
                Willkommen beim PFÜV, dem führenden Verband für die Überprüfung und
                Inspektion von Pferden. Wir sorgen dafür, dass Ihre Pferde stets in
                bester Verfassung sind.
            </Text>
        </Box>
    )
}

export default Description
