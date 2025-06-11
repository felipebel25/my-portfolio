import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { DescriptionOutlined, GitHub, LinkedIn } from '@mui/icons-material'
import { navigateToPublicUrl } from 'utils/globalFunctions'
import { styles } from './stylesBannerPortfolio'

export const BannerPortfolio = () => {
    const size = useMediaQuery('(min-width:600px)')

    return (
        <Box id="banner" component="section" sx={styles.main}>
            <Box
                component="article"
                sx={styles.sectionText}
                className="animate__animated animate__fadeInLeft"
            >
                <Typography variant="h3" component="h2" sx={styles.title}>
                    Hey I&#39;m Felipe
                </Typography>
                <Typography sx={styles.description}>
                    Web Developer from Colombia. Espefically Frontend Developer.
                    <br />I love create Applications with ReactJs.
                </Typography>
                <Box>
                    <Button
                        onClick={() =>
                            navigateToPublicUrl(
                                'https://github.com/felipebel25'
                            )
                        }
                        startIcon={<GitHub />}
                        sx={{ ...styles.button, marginLeft: '0px !important' }}
                        variant="outlined"
                    >
                        GitHub
                    </Button>
                    <Button
                        onClick={() =>
                            navigateToPublicUrl(
                                'https://www.linkedin.com/in/felipemedinadev/'
                            )
                        }
                        startIcon={<LinkedIn />}
                        sx={styles.button}
                        variant="outlined"
                    >
                        Linkedin
                    </Button>
                    <Button
                        target="_blank"
                        href="/documents/cv_felipe_medina.pdf"
                        startIcon={<DescriptionOutlined />}
                        sx={styles.button}
                        variant="outlined"
                    >
                        Download CV
                    </Button>
                </Box>
            </Box>
            <Box
                className="animate__animated animate__fadeInRight"
                component="article"
                sx={styles.sectionImage}
            >
                <Image
                    style={
                        size
                            ? { width: '85%', height: 'auto' }
                            : { width: '80%', height: 'auto' }
                    }
                    quality={100}
                    width="1050"
                    priority={true}
                    height="1050"
                    alt="Foto Image de Felipe Medina Frontend Developer, Portafolio de Felipe Medina"
                    src="/images/felipe_medina_image.webp"
                />
            </Box>
        </Box>
    )
}
