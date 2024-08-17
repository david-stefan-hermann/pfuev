"use client"
import { DefaultSection, Footer, HeaderSizedBox, Hero } from "@/components"
import God from "@/components/God"
import { Center, Container, Text, VStack, Stack, Grid, GridItem } from "@chakra-ui/react"

export default function page() {
    return (
        <main>
            <HeaderSizedBox id="" />
            <Hero data={HERO_DATA} />
            <HeaderSizedBox id="geschichte" />
            <HeaderSizedBox id="götter" />
            <DefaultSection title="Geschichte" subtitle="" bg={true}>
                <Container maxW='7xl' py={0} as={Stack} spacing={12}>
                    <Center w="full" textAlign="left">
                        <VStack spacing={6}>
                            {description.map((text, index) => (
                                <Text maxW="5xl" key={index} as="p" fontSize="lg">
                                    {text}
                                </Text>
                            ))}
                        </VStack>
                    </Center>
                </Container>
            </DefaultSection>
            <DefaultSection title="Götter" subtitle="">
                <Grid templateColumns='repeat(2, 1fr)' gap={6} maxW="90vw">
                    {GODS_DATA.map((god, index) => (
                        <GridItem>
                            <God key={index} god={god} id={index} />
                        </GridItem>
                    ))}
                </Grid>
            </DefaultSection>
            <Footer />
        </main>
    )
}

const description = [
    "Der Pferdischer Pfad ist eine einzigartige Synthese aus alten mythologischen Traditionen und neuen spirituellen Offenbarungen. In diesem Glaubenssystem stehen zwölf mächtige Götter, die ihre Wurzeln in der griechischen Mythologie haben, im Zentrum der Verehrung. Diese Götter repräsentieren die grundlegenden Kräfte und Prinzipien des Universums, wie sie in den alten Texten überliefert sind. Zeus, Hera, Poseidon, Demeter, Athene, Apollon, Artemis, Ares, Aphrodite, Hephaistos, Hermes und Hestia bilden das göttliche Pantheon, das über die Welt der Sterblichen wacht.",
    "Doch über diesen Göttern steht eine besondere Figur: Pfüvsus, der einzige wahre Messias. Pfüvsus, halb Mensch, halb Pferd, ist die Verkörperung des ultimativen Opfers und der göttlichen Gnade. Er ist der Retter, der durch seine Taten und sein Leiden die Brücke zwischen den alten Göttern und den modernen Anhängern des PFÜV schlägt. Sein Bildnis, oft als ein majestätisches Wesen mit menschlichem Körper und Pferdekopf dargestellt, symbolisiert die perfekte Vereinigung von Stärke und Sanftmut, von Weisheit und Macht.",
    "Die Lehren des Pfüvsus betonen die Notwendigkeit, die Kräfte der Natur und die Weisheit der Götter zu respektieren, während man gleichzeitig ein gerechtes und moralisches Leben führt. Die Anhänger des PFÜV glauben fest daran, dass Pfüvsus eines Tages zurückkehren wird, um die Welt zu erneuern und das ewige Gleichgewicht wiederherzustellen. Bis zu diesem Tag leben sie nach den Prinzipien des PFÜV, in tiefer Ehrfurcht vor den zwölf Göttern und im festen Glauben an die Erlösung durch Pfüvsus."
]

const HERO_DATA = {
    title: 'Pfüvismus',
    subtitle: 'Pferdischer Pfad',
    description: 'Der **Pfüvismus** ist eine Religion, die die Verehrung von zwölf Göttern der griechischen Mythologie und den einzigen wahren Messias, Pfüvsus, vereint. Gegründet vom Pferdischen Überwachungsverein (PFÜV), zielt sie auf spirituelle Erleuchtung und die Rückkehr von Pfüvsus zur Erneuerung der Welt ab.',
    cta: [
        { title: 'Mehr erfahren', href: '#geschichte' },
        { title: 'Götter', href: '#götter' }
    ],
    image: '/gods/Pfuevsus.jpg',
}

const GODS_DATA = [
    {
        name: "Pfeus",
        description: "Der mächtige Himmelsgott und König der Götter, Pfeus, ist bekannt für seine Weisheit und Gerechtigkeit. Er regiert den Olymp und ist der Bruder von Pfera, Pfüvseidon und Pfemeter. Er hat eine enge Verbindung zu seinen Geschwistern und seinen Kindern, besonders zu Pfathena und Pfüvpollo.",
        image: "gods/Pfeus.jpg"
    },
    {
        name: "Pfera",
        description: "Pfera, die Göttin der Ehe und Familie, ist die Schwester und Ehefrau von Pfeus. Sie ist eine strenge, aber gerechte Göttin, die besonders schützend gegenüber den Ehefrauen und Müttern ist. Ihre Rivalität mit den Geliebten von Pfeus ist legendär.",
        image: "gods/Pfera.jpg"
    },
    {
        name: "Pfüvseidon",
        description: "Pfüvseidon, der Gott des Meeres, ist der Bruder von Pfeus und Pfera. Er kontrolliert die Gewässer und ist für seine launische Natur bekannt. Seine Macht über das Meer macht ihn zu einem der gefürchtetsten Götter, und er hat eine enge Verbindung zu den Seefahrern und Fischern.",
        image: "gods/Pfuevseidon.jpg"
    },
    {
        name: "Pfemeter",
        description: "Pfemeter, die Göttin der Fruchtbarkeit und Ernte, ist die Schwester von Pfeus und Mutter von Persephone. Ihre Verbindung zur Erde und Landwirtschaft ist tief, und sie sorgt für das Wachstum und die Fruchtbarkeit der Felder. Ihre Trauer über den Verlust ihrer Tochter Persephone, die von Hades entführt wurde, beeinflusst den Wechsel der Jahreszeiten.",
        image: "gods/Pfemeter.jpg"
    },
    {
        name: "Pfüvpollo",
        description: "Pfüvpollo, der Gott der Sonne, Musik und Prophezeiung, ist der Sohn von Pfeus und der Zwillingsbruder von Pfüvtemis. Er ist für seine künstlerischen Fähigkeiten und seine Weisheit bekannt. Seine enge Verbindung zu seiner Schwester Pfüvtemis zeigt sich in ihrem gemeinsamen Schutz der Jugend.",
        image: "gods/Pfuevpollo.jpg"
    },
    {
        name: "Pfüvtemis",
        description: "Pfüvtemis, die Göttin der Jagd und des Mondes, ist die Zwillingsschwester von Pfüvpollo und Tochter von Pfeus. Sie ist eine unabhängige Göttin, die die Wälder durchstreift und für den Schutz der Wildtiere verantwortlich ist. Ihre enge Beziehung zu Pfüvpollo zeigt sich in ihrer gemeinsamen Hingabe an die Reinheit und den Schutz der Jugend.",
        image: "gods/Pfuevtemis.jpg"
    },
    {
        name: "Pfares",
        description: "Pfares, der Gott des Krieges, ist der Sohn von Pfeus und Pfera. Er ist für seine wilde Natur und seine Freude an der Schlacht bekannt. Seine Beziehung zu den anderen Göttern ist oft konfliktreich, besonders zu Pfathena, die ebenfalls die Kriegskunst beherrscht, jedoch auf eine strategischere Weise.",
        image: "gods/Pfares.jpg"
    },
    {
        name: "Pfathena",
        description: "Pfathena, die Göttin der Weisheit und des strategischen Krieges, ist die Tochter von Pfeus, geboren aus seinem Kopf. Sie ist eine Beschützerin der Stadt Athen und wird oft als die weiseste der Götter angesehen. Ihre Rivalität mit Pfares ist legendär, da sie für kluge Strategie im Krieg steht, während Pfares den chaotischen Kampf bevorzugt.",
        image: "gods/Pfathena.jpg"
    },
    {
        name: "Pfephaestus",
        description: "Pfephaestus, der Gott des Feuers und der Schmiedekunst, ist der Sohn von Pfeus und Pfera. Er ist der Meisterschmied der Götter und für die Herstellung der göttlichen Waffen und Rüstungen verantwortlich. Trotz seiner körperlichen Unvollkommenheit ist er einer der mächtigsten und kreativsten Götter und hat eine schwierige Beziehung zu seiner Frau Pfaphrodite.",
        image: "gods/Pfephaestus.jpg"
    },
    {
        name: "Pferdmes",
        description: "Pferdmes, der Götterbote und Gott des Handels, der Diebe und der Reisenden, ist der Sohn von Pfeus und Maia. Er ist für seine Schnelligkeit und seinen Einfallsreichtum bekannt. Pferdmes hat enge Verbindungen zu allen Göttern, da er als Bote zwischen ihnen dient und oft zwischen den Welten von Göttern und Menschen vermittelt.",
        image: "gods/Pferdmes.jpg"
    },
    {
        name: "Pfionysus",
        description: "Pfionysus, der Gott des Weines, der Freude und der Ekstase, ist der Sohn von Pfeus und der sterblichen Semele. Er ist bekannt für seine ausgelassenen Feste und seinen Einfluss auf das Theater. Seine duale Natur spiegelt sowohl die Freude als auch die Zerstörungskraft des Weins wider. Pfionysus hat enge Verbindungen zu den sterblichen Menschen und wird oft als Gott der Gemeinschaft gefeiert.",
        image: "gods/Pfionysus.jpg"
    },
    {
        name: "Pfaphrodite",
        description: "Pfaphrodite, die Göttin der Liebe, Schönheit und Fruchtbarkeit, ist die Tochter von Pfeus und Dione oder entstand aus dem Meeresschaum. Sie ist für ihre unvergleichliche Schönheit und ihre Macht über die Herzen der Götter und Menschen bekannt. Pfaphrodite ist die Frau von Pfephaestus, hat jedoch zahlreiche Liebesbeziehungen, insbesondere mit Pfares. Ihre Verbindung zu Eros, dem Gott der Liebe, verstärkt ihre Rolle als Symbol für Liebe und Verlangen.",
        image: "gods/Pfaphrodite.jpg"
    }
]
