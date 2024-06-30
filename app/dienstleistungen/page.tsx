import { HeaderSizedBox, Services } from "@/components"

const Home: React.FC = () => {
    return (
        <main>
            <HeaderSizedBox id=""/>
            <Services />
        </main>
    )
}

export default Home

const services_data = [
    {
        title: "tit",
        content: [
            {
                heading: "head",
                text: "text"
            },
            {
                heading: "head",
                text: "text"
            },
            {
                heading: "head",
                text: "text"
            }
        ]
    },
    {
        title: "tit",
        content: [
            {
                heading: "head",
                text: "text"
            },
            {
                heading: "head",
                text: "text"
            },
            {
                heading: "head",
                text: "text"
            }
        ]
    },
    {
        title: "tit",
        content: [
            {
                heading: "head",
                text: "text"
            },
            {
                heading: "head",
                text: "text"
            },
            {
                heading: "head",
                text: "text"
            }
        ]
    }
]