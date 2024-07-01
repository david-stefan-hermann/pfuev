import { HeaderSizedBox, Footer, SingleService } from "@/components"
import React from "react"

const Home: React.FC = () => {
    return (
        <main>
            <HeaderSizedBox id="" />
            {services_data.map((service, index) => (
                <React.Fragment key={index}>
                    <HeaderSizedBox id={services_data_ids[index]} />
                    <SingleService
                        id={index}
                        author={service.author}
                        attribution={service.attribution}
                        title={service.title}
                        subtitle={service.subtitle}
                        image={service.image}
                        content={service.content}
                    />
                </React.Fragment>
            ))}
            <Footer />
        </main>
    )
}

export default Home

const services_data_ids = [
    "Gesundheitschecks",
    "Leistungsüberprüfungen",
    "Zertifizierungen"
]

const services_data = [
    {
        title: "Gesundheitschecks",
        subtitle: "Umfassende Gesundheitsprüfungen, um sicherzustellen, dass Ihre Pferde gesund und fit sind.",
        image: "/services/3.jpg",
        author: "Foto von Leon Woods",
        attribution: "https://www.pexels.com/de-de/foto/esel-auf-grasfeld-598751/",
        content: [
            {
                heading: "Gründlichkeit in jedem Detail",
                text: "Unsere Gesundheitschecks sind so gründlich, dass selbst der kleinste Furz Ihres Pferdes nicht unbemerkt bleibt. Wir zählen jeden Hufschlag und jedes Nickerchen. Diese akribische Aufmerksamkeit gewährleistet, dass keine Anomalie, so klein sie auch sein mag, unentdeckt bleibt. Unser Team nutzt modernste Diagnosetechniken und kombiniert sie mit jahrelanger Erfahrung, um eine umfassende Bewertung der Gesundheit Ihres Pferdes zu gewährleisten."
            },
            {
                heading: "Präzise Diagnosen",
                text: "Wenn Ihr Pferd hustet, wissen wir nicht nur warum, sondern auch in welchem Takt! Kein anderes Gesundheitsprogramm bietet so viel Humor in der Diagnose. Wir glauben, dass ein bisschen Humor die bestmögliche Pflege fördert. Unsere Experten schaffen eine entspannte Atmosphäre, die sowohl für Pferd als auch Besitzer beruhigend ist, während sie gleichzeitig hochpräzise Diagnosen stellen."
            },
            {
                heading: "Sichtbare Ergebnisse",
                text: "Verlassen Sie sich auf uns, um sicherzustellen, dass Ihr Pferd immer einen glänzenden Schweif und einen kecken Galopp hat. Wir machen es möglich! Unsere Gesundheitschecks zielen darauf ab, nicht nur die innere Gesundheit, sondern auch das äußere Erscheinungsbild Ihres Pferdes zu verbessern. Ein gesunder Glanz im Fell und ein energiegeladener Gang sind Zeichen dafür, dass Ihr Pferd optimal versorgt wird."
            }
        ]
    },
    {
        title: "Leistungsanalysen",
        subtitle: "Detaillierte Leistungsanalysen zur Optimierung der Trainingsprogramme.",
        image: "/services/2.jpg",
        author: "Foto von Jose Ricardo Barraza Morachis",
        attribution: "https://www.pexels.com/de-de/foto/mann-reitet-pferd-1462364/",
        content: [
            {
                heading: "Traumanalyse für Spitzenleistungen",
                text: "Unsere Leistungsanalysen sind so detailliert, dass wir sogar wissen, wann Ihr Pferd von seinem Lieblingsessen träumt. Keine Träumereien während des Trainings! Durch die genaue Überwachung und Analyse der Schlaf- und Traumzyklen Ihres Pferdes können wir Rückschlüsse auf seine allgemeine Fitness und Bereitschaft für das Training ziehen."
            },
            {
                heading: "Individuelle Trainingspläne",
                text: "Mit unseren Analysen weiß Ihr Pferd genau, wann es das Tempo anziehen muss – perfekt abgestimmt auf seine Lieblingsgaloppmusik. Wir erstellen maßgeschneiderte Trainingspläne, die auf den spezifischen Bedürfnissen und Vorlieben Ihres Pferdes basieren. Dies maximiert nicht nur die Effizienz des Trainings, sondern macht es auch für das Pferd angenehmer und motivierender."
            },
            {
                heading: "Eleganz und Geschwindigkeit",
                text: "Wir garantieren, dass Ihr Pferd nach unserem Programm nicht nur schneller, sondern auch eleganter läuft. Hollywood-reif, könnte man sagen! Unsere Leistungsanalysen zielen darauf ab, die natürliche Anmut und Geschwindigkeit Ihres Pferdes zu optimieren. Mit unserer Hilfe kann Ihr Pferd seine beste Leistung erbringen und dabei stets elegant und stilvoll bleiben."
            }
        ]
    },
    {
        title: "Zertifizierungen",
        subtitle: "Offizielle Zertifizierungen für Zucht- und Verkaufszwecke.",
        image: "/services/1.png",
        author: "",
        attribution: "",
        content: [
            {
                heading: "Begehrte Qualitätssiegel",
                text: "Unsere Zertifizierungen sind so begehrt, dass selbst der Pferdeflüsterer neidisch wäre. Sie bescheinigen nicht nur Qualität, sondern auch königliche Eleganz. Diese Zertifizierungen sind ein Beweis für die erstklassige Pflege und den hervorragenden Gesundheitszustand Ihres Pferdes und erhöhen dessen Wert und Ansehen erheblich."
            },
            {
                heading: "Adelstitel für Ihre Pferde",
                text: "Mit einem Zertifikat von uns trägt Ihr Pferd nicht nur einen Titel, sondern auch einen Adelstitel. 'Sir Galoppalot' klingt doch gleich besser, oder? Unsere Zertifikate verleihen Ihrem Pferd eine besondere Auszeichnung, die seine außergewöhnliche Qualität und Leistung offiziell anerkennt."
            },
            {
                heading: "Rahmenwürdige Auszeichnungen",
                text: "Unsere Zertifikate sind so schön, dass Sie sie rahmen und an die Wand hängen wollen. Und Ihr Pferd? Das fühlt sich wie ein Superstar! Diese Zertifikate sind nicht nur funktional, sondern auch ästhetisch ansprechend gestaltet, um eine besondere Erinnerung an die herausragenden Leistungen und die erstklassige Pflege Ihres Pferdes zu bieten."
            }
        ]
    }
]