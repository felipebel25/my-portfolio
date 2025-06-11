import { Box, Typography } from '@mui/material'

import { CardProjects } from 'components/atoms/CardProjects'
import { projects } from 'utils/constants'

import { styles } from './stylesMyProjects'

export const MyProjects = () => (
    <Box id="my_projects" component="section" sx={styles.main}>
        <Typography variant="h4" component="h3" sx={styles.title}>
            Side Projects
        </Typography>
        <Box sx={styles.containerCards}>
            {projects.map((project) => (
                <CardProjects
                    key={project.name}
                    name={project.name}
                    description={project.description}
                    url={project.url}
                    urlFolder={project.urlFolder}
                    tags={project.tags}
                    img={project.img}
                />
            ))}
        </Box>
    </Box>
)
