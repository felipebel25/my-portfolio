import { Box, IconButton, Typography } from '@mui/material'
import { LinkedIn, MailOutline, WhatsApp } from '@mui/icons-material'

import { navigateToPublicUrl } from 'utils/globalFunctions'

import { styles } from './stylesFooterPortfolio'

export const FooterPortfolio = () => {
    return (
        <Box id="footer" component="footer" sx={styles.main}>
            <Box sx={styles.textSection}>
                <Typography variant="h4" component="h3" sx={styles.title}>
                    Contact Me!
                </Typography>
                <Typography sx={styles.description}>
                    Let&#39;s collaborate and make your Application vision a
                    reality!
                </Typography>
                <Box sx={styles.iconsContainer}>
                    {actions.map(({ Icon, name, url }) => (
                        <IconButton
                            onClick={() => navigateToPublicUrl(url)}
                            size="large"
                            sx={styles.iconButton}
                            key={name}
                        >
                            <Icon sx={styles.icon} />
                        </IconButton>
                    ))}
                </Box>
            </Box>
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
