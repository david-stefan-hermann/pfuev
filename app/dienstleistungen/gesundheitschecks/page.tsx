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
    }
]