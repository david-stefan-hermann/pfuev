'use client'
import { Container } from "@chakra-ui/react"
import Logo from "../components/homepage/Logo"
import Description from "../components/homepage/Description"
import Services from "../components/homepage/Services"
import Gallery from "../components/homepage/Gallery"
import Contact from "../components/homepage/Contact"
import Footer from "../components/homepage/Footer"
import React from "react"
import PageOutline from "../components/PageOutline"

const page = () => {
    return (
        <Container maxW="container.xl" py={10}>
            <PageOutline />
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
