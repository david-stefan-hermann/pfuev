import { Container, Box } from "@chakra-ui/react"
import Logo from "../components/homepage/Logo"
import Description from "../components/homepage/Description"
import Services from "../components/homepage/Services"
import Gallery from "../components/homepage/Gallery"
import Contact from "../components/homepage/Contact"
import Footer from "../components/homepage/Footer"
import React from "react"

const page = () => {
    return (
        <Container maxW="container.xl" py={10}>
            <Logo />
            <Description />
            <Services />
            <Gallery />
            <Contact />
            <Footer />
        </Container>
    )
}

export default page
