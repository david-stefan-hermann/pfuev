'use client'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Text, Stack, Avatar, useColorModeValue, Link } from '@chakra-ui/react'
import { DefaultSection } from '@/components'

interface Props {
    children: React.ReactNode
}

interface TestimonialAvatarProps {
    src: string
    link: string
    name: string
    title: string
}

const Testimonial: React.FC<Props> = (props) => {
    const { children } = props

    return <Box>{children}</Box>
}

const TestimonialContent: React.FC<Props> = (props) => {
    const { children } = props

    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow='lg'
            p={8}
            rounded='xl'
            align='center'
            pos='relative'
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    )
}

const TestimonialHeading: React.FC<Props> = (props) => {
    const { children } = props

    return (
        <Heading size="md" fontSize='xl'>
            {children}
        </Heading>
    )
}

const TestimonialText: React.FC<Props> = (props) => {
    const { children } = props

    return (
        <Text
            textAlign='center'
            color={useColorModeValue('gray.600', 'gray.400')}>
            {children}
        </Text>
    )
}

const TestimonialAvatar: React.FC<TestimonialAvatarProps> = ({ src, link, name, title }) => {
    return (
        <Flex align='center' mt={8} direction='column'>
            <Avatar size="lg" src={src} mb={2} />
            <Stack spacing={-1} align='center'>
                <Link fontWeight={600} href={link} isExternal>{name}<ExternalLinkIcon ml={1} mb={1} /></Link>
                <Text fontSize='sm' color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    )
}

const Testimonials: React.FC = () => {
    return (
        <DefaultSection
            title={TESTIMONIALS_TITLE.title}
            subtitle={TESTIMONIALS_TITLE.subtitle}
            bg={true}
        >
            <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 10, md: 4, lg: 10 }}>
                {TESTIMONIAL_DATA.map((testimonial, index) => (
                    <Testimonial key={index}>
                        <TestimonialContent>
                            <TestimonialHeading>{testimonial.title}</TestimonialHeading>
                            <TestimonialText>{testimonial.text}</TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar {...testimonial.avatar} />
                    </Testimonial>
                ))}
            </Stack>
        </DefaultSection>
    )
}

export default Testimonials

const TESTIMONIALS_TITLE = {
    title: 'Was unsere Kundschaft sagt',
    subtitle: 'Erfahrungsberichte von unseren zufriedenen Kunden und Kundinnen'
}

const TESTIMONIAL_DATA = [
    {
        title: 'Vertrauensvolle Partnerschaft',
        text: 'Ich schätze die Transparenz und das Vertrauen, das der PFÜV bietet. Sie sind meine erste Wahl für alle Gesundheitsfragen meiner Pferde.',
        avatar: {
            src: '/testimonials/1.jpg',
            name: 'Thomas Becker',
            title: 'Pferdetrainer und Cowboy',
            link: 'https://www.pexels.com/de-de/foto/mann-der-cowboyhut-tragt-2250519/'
        }
    },
    {
        title: 'Hervorragender Service und Fachwissen',
        text: 'Der PFÜV hat mit seinem fundierten Fachwissen meine Pferde in Topform gebracht. Die Gesundheit meiner Tiere war noch nie besser!',
        avatar: {
            src: '/testimonials/2.jpg',
            name: 'Anna Müller',
            title: 'Pferdebesitzerin und Züchterin',
            link: 'https://www.pexels.com/de-de/foto/vorbereitung-festhalten-halten-pferd-7882376/'
        }
    },
    {
        title: 'Nachhaltigkeit an erster Stelle',
        text: 'Der PFÜV setzt auf nachhaltige Methoden und verantwortungsvolle Pferdehaltung. Das überzeugt mich voll und ganz!',
        avatar: {
            src: '/testimonials/3.jpg',
            name: 'Maria Schneider',
            title: 'Reitstallbesitzerin',
            link: 'https://www.pexels.com/de-de/foto/schnee-natur-frau-romantisch-7787638/'
        }
    },
]