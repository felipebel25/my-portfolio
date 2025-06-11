import { Box, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'

import { styles } from './stylesAboutMe'

export const AboutMe = () => {
    const size = useMediaQuery('(min-width:600px)')
    return (
        <Box id="about_me" sx={styles.main} component="main">
            <Box component="section" sx={styles.sectionText}>
                <Typography variant="h4" color="secondary" sx={styles.about}>
                    About
                </Typography>
                <Typography variant="h3" sx={styles.whoIam}>
                    Who I Am
                </Typography>
                <Typography>
                    He enjoys leading teams and sharing knowledge to help
                    achieve successful project outcomes. With a strong passion
                    for programming, he excels at solving complex problems and
                    delivering clean, efficient code that aligns with client
                    goals. He’s also deeply interested in the business aspects
                    of technology and takes pride in driving solutions that
                    address real-world challenges and deliver measurable value
                </Typography>
                <Typography sx={{ mt: '1rem' }}>
                    He believes in camaraderie and teamwork and is willing to
                    help his co-workers in whatever they need. I am self-taught
                    and self-disciplined.
                </Typography>
            </Box>
            <Box component="section" sx={styles.sectionConsole}>
                <Image
                    style={{
                        width: '90%',
                        height: 'auto',
                        border: '2px solid black',
                        borderRadius: '0.3rem',
                        maxWidth: '620px',
                    }}
                    quality={100}
                    width="1050"
                    height="1050"
                    alt="Foto Image de Felipe Medina Frontend Developer, Portafolio de Felipe Medina"
                    src="/images/console.png"
                />
            </Box>
        </Box>
    )
}
