'use client'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
    Link,
    Center,
} from '@chakra-ui/react'
import { Interface } from 'readline'

interface Props {
    children: React.ReactNode
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
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
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
        <Heading size="md" fontSize={'xl'}>
            {children}
        </Heading>
    )
}

const TestimonialText: React.FC<Props> = (props) => {
    const { children } = props

    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}>
            {children}
        </Text>
    )
}

interface TestimonialAvatarProps {
    src: string
    link: string
    name: string
    title: string
}


const TestimonialAvatar: React.FC<TestimonialAvatarProps> = ({ src, link, name, title }) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar size="lg" src={src} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Link fontWeight={600} href={link} isExternal>{name}<ExternalLinkIcon ml={1} mb={1} /></Link>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    )
}

const Testimonials: React.FC = () => {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.700')}>
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Center w={"full"} textAlign={"center"}>
                    <Heading>Was unsere Kundschaft sagt</Heading>
                </Center>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Vertrauensvolle Partnerschaft</TestimonialHeading>
                            <TestimonialText>
                                Ich schätze die Transparenz und das Vertrauen, das der PFÜV bietet. Sie sind meine erste Wahl für alle Gesundheitsfragen meiner Pferde.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                '/testimonials/1.jpg'
                            }
                            link={'https://www.pexels.com/de-de/foto/mann-der-cowboyhut-tragt-2250519/'}
                            name={'Thomas Becker'}
                            title={'Pferdetrainer und Cowboy'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Hervorragender Service und Fachwissen</TestimonialHeading>
                            <TestimonialText>
                                Der PFÜV hat mit seinem fundierten Fachwissen meine Pferde in Topform gebracht. Die Gesundheit meiner Tiere war noch nie besser!
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                '/testimonials/2.jpg'
                            }
                            link={'https://www.pexels.com/de-de/foto/vorbereitung-festhalten-halten-pferd-7882376/'}
                            name={'Anna Müller'}
                            title={'Pferdebesitzerin und Züchterin'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Nachhaltigkeit an erster Stelle</TestimonialHeading>
                            <TestimonialText>
                                Der PFÜV setzt auf nachhaltige Methoden und verantwortungsvolle Pferdehaltung. Das überzeugt mich voll und ganz!
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                '/testimonials/3.jpg'
                            }
                            link={'https://www.pexels.com/de-de/foto/schnee-natur-frau-romantisch-7787638/'}
                            name={'Maria Schneider'}
                            title={'Reitstallbesitzerin'}
                        />
                    </Testimonial>
                </Stack>
            </Container>
        </Box>
    )
}

export default Testimonials