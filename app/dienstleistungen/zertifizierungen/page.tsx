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