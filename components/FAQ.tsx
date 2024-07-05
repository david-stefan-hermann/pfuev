'use client'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Text,
    Container,
    Box,
    AccordionIcon,
    Center,
} from '@chakra-ui/react'
import { DefaultSection } from '@/components'

const FAQAccordion: React.FC = () => {
    return (
        <DefaultSection
            title='Häufig gestellte Fragen'
            subtitle='Konnten wir Ihre Fragen nicht beantworten? Kontaktieren Sie uns für weitere Informationen.'
        >
            <Center>
                <Container maxW='2xl'>
                <Accordion allowToggle>
                    {FAQ_DATA.map((faq, index) => (
                        <AccordionItem key={index}>
                            <AccordionButton
                                fontSize="md"
                                p={3}>
                                <Box as="span" flex="1" textAlign="left">{faq.question}</Box>
                                <Text fontSize="md"></Text>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text color="gray.500">{faq.answer}</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
                </Container>
            </Center>
        </DefaultSection>
    )
}

export default FAQAccordion


const FAQ_DATA = [
    {
        question: "Was ist der PFÜV?",
        answer: "Der PFÜV (Pferdischer Überwachungsverein) ist eine Organisation, die sich auf die Gesundheitsprüfung und Leistungsanalyse von Pferden spezialisiert hat."
    },
    {
        question: "Welche Dienstleistungen bietet der PFÜV an?",
        answer: "Der PFÜV bietet umfassende Gesundheitschecks, detaillierte Leistungsanalysen und offizielle Zertifizierungen für Zucht- und Verkaufszwecke."
    },
    {
        question: "Wie kann ich den PFÜV kontaktieren?",
        answer: "Sie können den PFÜV über das Kontaktformular auf der Webseite erreichen. Folgen Sie den Anweisungen im Formular, um Ihre Anfrage zu senden."
    },
    {
        question: "Warum sollte ich meine Pferde beim PFÜV überprüfen lassen?",
        answer: "Der PFÜV bietet gründliche und wissenschaftlich fundierte Prüfungen, die die Gesundheit und Leistung Ihrer Pferde sicherstellen. Dies trägt zur Optimierung von Training und Pflege bei."
    },
    {
        question: "Was kosten die Dienstleistungen des PFÜV?",
        answer: "Die Kosten variieren je nach Art der Dienstleistung. Für detaillierte Informationen können Sie direkt den PFÜV kontaktieren oder auf der Webseite die Preisliste einsehen."
    }
]
