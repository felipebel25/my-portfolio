import { Box, Typography } from "@mui/material"
import { styles } from "./stylesMyProjects"
import { CardProjects } from "@/components/atoms/CardProjects"

export const MyProjects = () => {
    return (
        <Box id="my_projects" component='section' sx={styles.main}>
            <Typography variant="h4" component='h3' sx={styles.title}>My Projects</Typography>
            <Box sx={styles.containerCards}>
                {projects.map(project =>
                    <CardProjects
                        key={project.name}
                        name={project.name}
                        description={project.description}
                        url={project.url}
                        urlFolder={project.urlFolder}
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
        urlFolder: "https://github.com/felipebel25/Teslita-Repo",
        tags: ['ReactJs', 'NextJs', 'Typescript', 'MongoDb', 'Material-UI', 'HTML', 'CSS']
    },
    {
        name: "PokeDex",
        description: 'Pokedex App is an application that displays a large number of pokemon and information about them. An interesting application as Frontend Developer.',
        img: "/images/pokedex.webp",
        url: "https://pokedex-nextjs-itk2.vercel.app/",
        urlFolder: "https://github.com/felipebel25/pokedex_nextjs",
        tags: ['ReactJs', 'NextJs', 'Typescript', 'MongoDb', 'Material-UI', 'HTML', 'CSS']
    },
    {
        name: "HeyFunding",
        description: 'HeyFunding is a project in a beta state and was born as a university project that uses the powers of NextJs and integrates the mercadoPago API.',
        img: "/images/hey_funding.webp",
        url: "https://hey-funding.vercel.app/",
        urlFolder: "https://github.com/felipebel25/HeyFunding",
        tags: ['ReactJs', 'NextJs', 'Typescript', 'Material-UI', 'HTML', 'CSS']
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