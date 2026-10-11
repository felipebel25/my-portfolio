import { Box, IconButton, Typography } from '@mui/material'
import { LinkedIn, MailOutline, WhatsApp } from '@mui/icons-material'

import { navigateToPublicUrl } from 'utils/globalFunctions'

import { styles } from './stylesFooterPortfolio'

export const FooterPortfolio = () => {
    return (
        <Box id="footer" component="footer" sx={styles.main}>
            <Box sx={styles.textSection}>
                <Typography component="span" sx={styles.eyebrow}>
                    {'// contact'}
                </Typography>
                <Typography variant="h4" component="h2" sx={styles.title}>
                    Let&#39;s build something together
                    <Box component="span" sx={styles.titleAccent}>
                        .
                    </Box>
                </Typography>
                <Typography sx={styles.description}>
                    Open to new opportunities and collaborations — reach out on
                    any of these channels.
                </Typography>
                <Box sx={styles.iconsContainer}>
                    {actions.map(({ Icon, name, url }) => (
                        <IconButton
                            onClick={() => navigateToPublicUrl(url)}
                            size="large"
                            sx={styles.iconButton}
                            aria-label={name}
                            key={name}
                        >
                            <Icon sx={styles.icon} />
                        </IconButton>
                    ))}
                </Box>
            </Box>
            <Typography sx={styles.copyright}>
                © {new Date().getFullYear()} Felipe Medina
            </Typography>
        </Box>
    )
}

const actions = [
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/felipemedinadev/',
        Icon: LinkedIn,
    },
    {
        name: 'Mail',
        url: 'mailto:felipemedina.developer@gmail.com',
        Icon: MailOutline,
    },
    {
        name: 'WhatsApp',
        url: 'https://api.whatsapp.com/send?phone=573227049632&text=Hello%20Felipe',
        Icon: WhatsApp,
    },
]
