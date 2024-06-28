import { Box, Text } from "@chakra-ui/react"
import React from "react"

const Footer = () => {
    return (
        <Box py={10} textAlign="center" borderTop="1px" borderColor="gray.200">
            <Text fontSize="sm" color="gray.500">
                &copy; {new Date().getFullYear()} PFÜV. Alle Rechte vorbehalten.
            </Text>
        </Box>
    )
}

export default Footer
