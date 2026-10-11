import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { DescriptionOutlined, GitHub, LinkedIn } from '@mui/icons-material'
import { navigateToPublicUrl } from 'utils/globalFunctions'
import { styles } from './stylesBannerPortfolio'

export const BannerPortfolio = () => (
    <Box id="banner" component="section" sx={styles.main}>
        <Box
            component="article"
            sx={styles.sectionText}
            className="animate__animated animate__fadeInLeft"
        >
            <Typography component="span" sx={styles.status}>
                <Box component="span" sx={styles.statusDot} />
                Based in Sydney, Australia
            </Typography>
            <Typography variant="h3" component="h1" sx={styles.title}>
                Hey, I&#39;m Felipe
                <Box component="span" sx={styles.titleAccent}>
                    .
                </Box>
            </Typography>
            <Typography component="p" sx={styles.subtitle}>
                Full-Stack Software Developer
            </Typography>
            <Typography sx={styles.description}>
                5+ years building scalable, user-centric web and mobile products
                with React, Next.js, React Native and Node.js — from clean
                architecture to reliable test automation.
            </Typography>
            <Box sx={styles.actions}>
                <Button
                    target="_blank"
                    href="/documents/cv_felipe_medina.pdf"
                    startIcon={<DescriptionOutlined />}
                    sx={styles.primaryButton}
                    variant="contained"
                >
                    Download CV
                </Button>
                <Button
                    onClick={() =>
                        navigateToPublicUrl('https://github.com/felipebel25')
                    }
                    startIcon={<GitHub />}
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
                    variant="outlined"
                >
                    LinkedIn
                </Button>
            </Box>
        </Box>
        <Box
            className="animate__animated animate__fadeInRight"
            component="article"
            sx={styles.sectionImage}
        >
            <Box sx={styles.imageFrame}>
                <Image
                    style={styles.image}
                    quality={95}
                    width="900"
                    height="900"
                    priority={true}
                    alt="Felipe Medina, Full-Stack Software Developer"
                    src="/images/felipe_medina_headshot.webp"
                />
            </Box>
        </Box>
    </Box>
)
