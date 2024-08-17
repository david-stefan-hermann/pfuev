import { HeaderSizedBox, Footer, SingleService } from "@/components"
import React from "react"

const Home: React.FC = () => {
    return (
        <main>
            <HeaderSizedBox id="" />
            {services_data.map((service, index) => (
                <React.Fragment key={index}>
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
    }
]