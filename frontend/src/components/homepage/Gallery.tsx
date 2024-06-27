import { Box, Heading, SimpleGrid, Image } from "@chakra-ui/react"
import React from "react"

const Gallery = () => {
    return (
        <Box py={10}>
            <Heading as="h2" size="xl" mb={4} textAlign="center">
                Galerie
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={5}>
                <Image src="/h1.jpg" alt="Horse 1" />
                <Image src="/h2.jpg" alt="Horse 2" />
                <Image src="/h3.jpg" alt="Horse 3" />
                <Image src="/h4.png" alt="Horse 4" />
                <Image src="/h8.jpg" alt="Horse 5" />
                <Image src="/h6.jpg" alt="Horse 6" />
            </SimpleGrid>
        </Box>
    )
}

export default Gallery
