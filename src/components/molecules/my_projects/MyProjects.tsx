import { Box, Typography } from "@mui/material"
import { styles } from "./stylesMyProjects"
import { CardProjects } from "@/components/atoms/CardProjects"

export const MyProjects = () => {
    return (
        <Box component='section' sx={styles.main}>
            <Typography variant="h4" component='h3' sx={styles.title}>My Projects</Typography>
            <Box sx={styles.containerCards}>
                {projects.map(project =>
                    <CardProjects
                        key={project.name}
                        name={project.name}
                        description={project.description}
                        url={project.url}
                        tags={project.tags}
                        img={project.img}
                    />
                )}
            </Box>
        </Box>
    )
}
const projects = [
    {
        name: "Tesla-shop",
        description: 'Tesla shop is a clone of the real tesla shop website where a Full-Stack application is used, therefore a database is used and payments are made with the Paypal API.',
        img: "/images/tesla-shop.webp",
        url: "https://teslita-repo.up.railway.app/",
        urlFolder: "",
        tags: ['ReactJs', 'NextJs', 'Typescript', 'MongoDb', 'Material-UI', 'HTML', 'CSS']
    },
    {
        name: "PokeDex",
        description: 'Pokedex App is an application that displays a large number of pokemon and information about them. An interesting application as Frontend Developer.',
        img: "/images/pokedex.webp",
        url: "https://pokedex-nextjs-itk2.vercel.app/",
        urlFolder: "",
        tags: ['ReactJs', 'NextJs', 'Typescript', 'MongoDb', 'Material-UI', 'HTML', 'CSS']
    },
    {
        name: "HeyFunding",
        description: 'HeyFunding es un proyecto beta y nace como un proyecto universitario que usa los poderes de NextJs y se integra la API de mercadoPago.',
        img: "/images/hey_funding.webp",
        url: "https://hey-funding.vercel.app/",
        urlFolder: "",
        tags: ['ReactJs', 'NextJs', 'Typescript', 'Material-UI','HTML', 'CSS']
    },
    // {
    //     name: "Miaugram",
    //     description: 'Pachogram is an application made in ReactJs that simulates a kind of animal Instagram, where you can save your favorite photos..',
    //     img: "",
    //     url: "https://miaugrams.vercel.app/",
    //     urlFolder: "",
    //     tags: ['ReactJs', 'GraphQL',]
    // }
]