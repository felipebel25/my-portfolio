import { Box, IconButton, Typography } from "@mui/material"
import { styles } from "./stylesFooterPortfolio"
import { LinkedIn, MailOutline, WhatsApp } from "@mui/icons-material"

export const FooterPortfolio = () => {
    return (
        <Box component='footer' sx={styles.main}>
            <Box sx={styles.textSection}>
                <Typography variant="h4" component='h3' sx={styles.title}>Contact Me!</Typography>
                <Typography sx={styles.description}>Let&#39;s collaborate and make your Aplication vision a reality!</Typography>
                <Box sx={styles.iconsContainer}>
                    {actions.map(({ Icon, name, url }) => (
                        <IconButton  size="large" sx={styles.iconButton} key={name}>
                            <Icon
                                sx={styles.icon}
                            />
                        </IconButton>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

const actions = [
    {
        name: "Linkedin",
        url: "",
        Icon: LinkedIn
    },
    {
        name: "Mail",
        url: "",
        Icon: MailOutline
    },
    {
        name: "WhatsApp",
        url: "",
        Icon: WhatsApp
    },


]