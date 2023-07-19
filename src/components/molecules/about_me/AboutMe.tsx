import { Box, Typography, useMediaQuery } from "@mui/material"
import Image from "next/image"

import { styles } from "./stylesAboutMe"
export const AboutMe = () => {
    const size = useMediaQuery('(min-width:600px)')

    return (
        <Box id="about_me" sx={styles.main} component='main'>
            <Box component='section' sx={styles.sectionText}>
                <Typography variant="h4" color='secondary' sx={styles.about}>About</Typography>
                <Typography variant="h3" sx={styles.whoIam}>Who I Am</Typography>
                <Typography>He specializes in building mobile responsive front-end UI apps that connect with APIs and other back-end technologies. He is also proficient in building front-end applications using HTML, CSS, JavaScript, Typescript and React.

                </Typography>
                <Typography sx={{ mt: "1rem" }}>
                    He believes in camaraderie and teamwork and is willing to help his co-workers in whatever they need. I am self-taught and self-disciplined.
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
                />
            </Box>
        </Box>
    )
}
