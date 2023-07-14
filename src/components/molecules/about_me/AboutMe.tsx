import { Box, Typography, useMediaQuery } from "@mui/material"
import Image from "next/image"

import { styles } from "./stylesAboutMe"
export const AboutMe = () => {
    const size = useMediaQuery('(min-width:600px)')

    return (
        <Box sx={styles.main} component='main'>

            <Box component='section' sx={styles.sectionText}>
                <Typography variant="h4" color='secondary' sx={styles.about}>About</Typography>
                <Typography variant="h3" sx={styles.whoIam}>Who I Am</Typography>
                <Typography>I specialize in building mobile responsive front-end UI applications that connect with APIs and other backend technologies. Though I am most proficient in building front-end applications using HTML, CSS, Javascript, and React
                </Typography>
                <Typography sx={{ mt: "1rem" }}>
                    I believe in companionship and team work and I am willing to help my coworkers with anything they need if I can do it. I am autodidact and self disciplined.
                </Typography>
            </Box>
            <Box component='section' sx={styles.sectionConsole}>
                <Image
                    style={size ? { border: "2px solid black", borderRadius: "0.55rem", width: "70%", height: "auto" } : { width: "100%", height: "auto", border: "2px solid black", borderRadius: "0.3rem", }}
                    quality={100}
                    width='1050'
                    height='1050'
                    alt="Foto Image de Felipe Medina Frontend Developer, Portafolio de Felipe Medina"
                    src='/images/console.png'
                    priority={false}
                />

            </Box>
        </Box>
    )
}
