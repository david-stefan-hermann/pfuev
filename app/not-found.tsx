"use client"

import { Box, Button, Center, Heading, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

export default function NotFound() {
    return (
        <Box
            backgroundImage='not-found/bg.jpg'
            backgroundPosition='center'
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.400"
            >
                <Link 
                position="relative" 
                color="blue.200" 
                zIndex="overlay" 
                ml={4} 
                top="96vh" 
                href="https://www.pexels.com/de-de/foto/tier-stehen-saugetier-milchkuhe-13910872/" 
                isExternal>
                    Foto von Harry Nixon<ExternalLinkIcon mx="2px" />
                </Link>
            </Box>
            <Center
                h="100vh"
                color="white"
                flexDirection="column"
                gap="2"
            >
                <Heading size="lg" textAlign="center" px="4" zIndex="overlay">Dies sind nicht die Pferde, nach denen Ihr sucht.</Heading>
                <Button colorScheme="blue" variant="solid" as="a" href="/" zIndex="overlay">Zurück zur Startseite</Button>
            </Center>
        </Box>
    )
}