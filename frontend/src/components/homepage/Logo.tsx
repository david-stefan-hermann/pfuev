import { Box, Image, Heading } from "@chakra-ui/react"
import React from "react"

const Logo = () => {
    return (
        <Box textAlign="center" py={10}>
            <Image src="/pfuevs.png" alt="PFÜV Logo" boxSize="150px" mx="auto" />
            <Heading as="h1" size="2xl" mt={4}>
                PFÜV
            </Heading>
            <Heading as="h2" size="lg" color="gray.600">
                Pferdischer Überprüfungsverband
            </Heading>
        </Box>
    )
}

export default Logo
