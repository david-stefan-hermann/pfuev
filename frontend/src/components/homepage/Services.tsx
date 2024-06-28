// components/Services.js
import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"

const servicesContent = [
    {
        name: "Gesundheitschecks",
        description: [
            "Unsere Gesundheitschecks sind so gründlich, dass selbst der kleinste Furz Ihres Pferdes nicht unbemerkt bleibt. Wir zählen jeden Hufschlag und jedes Nickerchen.",
            "Wenn Ihr Pferd hustet, wissen wir nicht nur warum, sondern auch in welchem Takt! Kein anderes Gesundheitsprogramm bietet so viel Humor in der Diagnose.",
            "Verlassen Sie sich auf uns, um sicherzustellen, dass Ihr Pferd immer einen glänzenden Schweif und einen galoppierenden Galopp hat. Wir machen es möglich!"
        ]
    },
    {
        name: "Leistungsanalysen",
        description: [
            "Unsere Leistungsanalysen sind so detailliert, dass wir sogar wissen, wann Ihr Pferd von seinem Lieblingsessen träumt. Keine Träumereien während des Trainings!",
            "Mit unseren Analysen weiß Ihr Pferd genau, wann es das Tempo anziehen muss – perfekt abgestimmt auf seine Lieblingsgaloppmusik.",
            "Wir garantieren, dass Ihr Pferd nach unserem Programm nicht nur schneller, sondern auch eleganter läuft. Hollywood-reif, könnte man sagen!"
        ]
    },
    {
        name: "Zertifizierungen",
        description: [
            "Unsere Zertifizierungen sind so begehrt, dass selbst der Pferdeflüsterer neidisch wäre. Sie bescheinigen nicht nur Qualität, sondern auch königliche Eleganz.",
            "Mit einem Zertifikat von uns trägt Ihr Pferd nicht nur einen Titel, sondern auch einen Adelstitel. 'Sir Galoppalot' klingt doch gleich besser, oder?",
            "Unsere Zertifikate sind so schön, dass Sie sie rahmen und an die Wand hängen wollen. Und Ihr Pferd? Das fühlt sich wie ein Superstar!"
        ]
    }
]

const Services = () => {

    return (
        <Box py={10} maxW="container.lg" mx="auto">
            <Heading as="h2" mb={6} textAlign="center">
                Unsere Dienstleistungen
            </Heading>
            <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                    {servicesContent.map((service, index) => (
                        <Tab key={index} id={`service-tab-${index}`}>{service.name}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {servicesContent.map((service, index) => (
                        <TabPanel key={index}>
                            {service.description.map((paragraph, pIndex) => (
                                <Text key={pIndex} mb={4}>{paragraph}</Text>
                            ))}
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Box>
    )
}


export default Services
