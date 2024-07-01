'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Button, Center } from '@chakra-ui/react'
import { MdOutlineHealthAndSafety } from "react-icons/md"
import { CgPerformance } from "react-icons/cg"
import { GrCertificate } from "react-icons/gr"
import { DefaultSection } from '@/components'

interface FeatureProps {
    title: string
    text: string
    icon: ReactElement
    link: string
}

const Feature: React.FC<FeatureProps> = ({ title, text, icon, link }) => {
    return (
        <Stack>
            <Center>
                <Flex
                    w={16}
                    h={16}
                    align='center'
                    justify='center'
                    color='white'
                    rounded='full'
                    bg='gray.100'
                    mb={1}>
                    {icon}
                </Flex>
            </Center>
            <Heading size="md" fontWeight={600}>{title}</Heading>
            <Text color='gray.600' textAlign="left" style={{ hyphens: "auto" }}>{text}</Text>
            <Flex>
                <Button as="a" colorScheme="blue" variant="outline" rounded="full" href={link}>mehr erhfahren</Button>
            </Flex>
        </Stack>
    )
}

const Services: React.FC = () => {
    return (
        <DefaultSection
            title={SERVICES_TITLE.title}
            subtitle={SERVICES_TITLE.subtitle}
        >
            <Box p={4} w="full">
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    {SERVICES_DATA.map((service, index) => (
                        <Feature
                            key={index}
                            title={service.title}
                            text={service.text}
                            icon={service.icon}
                            link={service.link}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </DefaultSection>
    )
}

export default Services

const SERVICES_TITLE = {
    title: 'Unsere Dienstleistungen',
    subtitle: 'Wir bieten eine breite Palette von Dienstleistungen an, um die Gesundheit und Leistungsfähigkeit Ihrer Pferde zu gewährleisten.',
}

const SERVICES_DATA = [
    {
        title: 'Gesundheitschecks',
        text: `Unsere umfassenden Gesundheitschecks gewährleisten, dass Ihre Pferde stets in bester Verfassung sind.
            Wir führen gründliche Untersuchungen durch, um selbst kleinste Anomalien zu erkennen und zu behandeln.
            Vertrauen Sie auf unsere Expertise, um die Gesundheit und das Wohlbefinden Ihrer Pferde sicherzustellen.`,
        icon: <Icon color="black" as={MdOutlineHealthAndSafety} w={10} h={10} />,
        link: "/dienstleistungen/#Gesundheitschecks"
    },
    {
        title: 'Leistungsüberprüfungen',
        text: `Mit unseren detaillierten Leistungsanalysen optimieren wir die Trainingsprogramme Ihrer Pferde. Durch
            präzise Messungen und individuelle Trainingspläne helfen wir Ihrem Pferd, seine maximale Leistungsfähigkeit
            zu erreichen und dabei elegant und effizient zu bleiben. Unser oberstes Ziel ist es natürlich, für Sie die maximale
            Rendite durch Ihre Sportwette zu erzuielen.`,
        icon: <Icon color="black" as={CgPerformance} w={10} h={10} />,
        link: "/dienstleistungen/#Leistungsüberprüfungen"
    },
    {
        title: 'Zertifizierungen',
        text: `Unsere offiziellen Zertifizierungen bescheinigen die herausragende Qualität und Leistungsfähigkeit Ihrer Pferde.
            Diese begehrten Zertifikate erhöhen den Wert und das Ansehen Ihrer Pferde, sei es für Zucht- oder Verkaufszwecke,
            und verleihen ihnen einen prestigeträchtigen Status.`,
        icon: <Icon color="black" as={GrCertificate} w={10} h={10} />,
        link: "/dienstleistungen/#Zertifizierungen"
    }
]
