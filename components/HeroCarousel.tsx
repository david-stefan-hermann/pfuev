'use client'

import React from 'react'
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
    Flex,
    Wrap,
    Button,
    Center,
    Link,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import { ExternalLinkIcon } from '@chakra-ui/icons'

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

const HeroCarousel = () => {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null)

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '40px' })

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'Wissenschaftliche Expertise',
            text: "Unsere Experten nutzen neueste wissenschaftliche Erkenntnisse, um die Gesundheit Ihrer Pferde zu verbessern.",
            image: '/hero/1.jpg',
            author: 'Johannes Plenio',
            attribution: 'https://www.pexels.com/de-de/foto/silhouette-der-person-die-ein-pferd-reitet-1125774/',
            link: '#'
        },
        {
            title: 'Vertrauen und Transparenz',
            text: "Wir setzen auf klare Kommunikation und transparente Prozesse für Ihr Vertrauen.",
            image: '/hero/2.jpg',
            author: "Mali Maeder",
            attribution: "https://www.pexels.com/de-de/foto/schwarzes-pferd-das-auf-grunem-feld-lauft-das-mit-baumen-umgeben-ist-101667/",
            link: '#kundenbewertungen'
        },
        {
            title: 'Nachhaltigkeit und Verantwortung',
            text: " Wir fördern umweltfreundliche Methoden und nachhaltige Pferdehaltung.",
            image: '/hero/3.jpg',
            author: "Brenda Timmermans",
            attribution: "https://www.pexels.com/de-de/foto/weisses-pferd-nahe-heuhaufen-wahrend-des-tages-58875/",
            link: '#'
        },
    ]

    return (
        <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <MdOutlineKeyboardArrowLeft size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <MdOutlineKeyboardArrowRight size="40px" />
            </IconButton>
            {/* Slider */}
            <Flex display={{ base: 'none', md: 'block' }}>
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {cards.map((card, index) => (
                        DesktopHeroCarousel({ index, card })
                    ))}
                </Slider>
            </Flex>
            <Flex display={{ base: 'block', md: 'none' }}>
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {cards.map((card, index) => (
                        MobileHeroCarousel({ index, card })
                    ))}
                </Slider>
            </Flex>
        </Box>
    )
}

export default HeroCarousel

const Buttons = ({ cardLink }: CardLink) => {
    return (
        <>
            <Button colorScheme="blue" variant="solid" size="lg" as="a" href="/#pfuev">
                Über uns
            </Button>
            <Button colorScheme="blue" variant="solid" size="lg" as="a" href={cardLink}>
                weiterlesen
            </Button>
        </>
    )
}

interface CardLink {
    cardLink: string
}


interface CarouselCardContent {
    title: string
    text: string
    image: string
    author: string
    attribution: string
    link: string
}

interface CarouselCard {
    index: number
    card: CarouselCardContent
}

const MobileHeroCarousel = ({ index, card }: CarouselCard) => {
    return (
        <>
            <Box
                key={index}
                height={'60'}
                position="relative"
                backgroundPosition="top"
                backgroundRepeat="repeat"
                backgroundSize="cover"
                backgroundImage={`url(${card.image})`}>
                {/* Overlay Box with color filter */}
                <Box
                    position="absolute"
                    top={0}
                    right={0}
                    bottom={0}
                    left={0}
                    bg="blackAlpha.500" // Example: black with 50% opacity
                    zIndex="overlay" // Ensure it's above the background image but below content
                ></Box>
                <Link position="absolute" color="blue.200" zIndex="overlay" ml={4} bottom={2} href={card.attribution} isExternal>
                    Foto von: {card.author} <ExternalLinkIcon mx="2px" />
                </Link>
            </Box>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative" px={0}>
                <Wrap
                    spacing={4}
                    px={4}
                    py={4}
                    textAlign="center"
                    maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color="DarkText">
                        {card.title}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color="DarkText">
                        {card.text}
                    </Text>
                </Wrap>
                <Center gap="2">
                    <Buttons cardLink={card.link} />
                </Center>
            </Container>
        </>
    )
}

const DesktopHeroCarousel = ({ index, card }: CarouselCard) => {
    return (
        <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={`url(${card.image})`}>
            {/* Overlay Box with color filter */}
            <Box
                position="absolute"
                top={0}
                right={0}
                bottom={0}
                left={0}
                bg="blackAlpha.500" // Example: black with 50% opacity
                zIndex="overlay" // Ensure it's above the background image but below content
            ></Box>
            <Link position="relative" color="blue.200" zIndex="overlay" ml={4} top={2} href={card.attribution} isExternal>
                Foto von: {card.author} <ExternalLinkIcon mx="2px" />
            </Link>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
                <Stack
                    spacing={6}
                    w={'full'}
                    maxW={'lg'}
                    position="absolute"
                    top="50%"
                    transform="translate(0, -50%)"
                    zIndex="overlay">
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color="White">
                        {card.title}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color="White">
                        {card.text}
                    </Text>
                    <Wrap>
                        <Buttons cardLink={card.link} />
                    </Wrap>
                </Stack>
            </Container>
        </Box>
    )
}