"use client"

import { Box, Button, Center, Heading, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Error() {
    return (
        <Box
            backgroundImage='error/bg.png'
            backgroundPosition='center'
            backgroundSize='cover'
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
            >
                <Link
                    position="relative"
                    color="blue.200"
                    zIndex="overlay"
                    ml={4}
                    top="96vh"
                    href="https://pixabay.com/de/users/clker-free-vector-images-3736/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=30160"
                    isExternal>
                    Bild von Clker-Free-Vector-Images<ExternalLinkIcon mx="2px" />
                </Link>
            </Box>
            <Center
                h="100vh"
                flexDirection="column"
                gap="2"
            >
                <Heading size="lg" textAlign="center" px="4" zIndex="overlay">Leider haben wir aktuell technische Störungen.</Heading>
                <Button colorScheme="blue" variant="solid" as="a" href="/" zIndex="overlay">Zurück zur Startseite</Button>
            </Center>
        </Box>
    )
}