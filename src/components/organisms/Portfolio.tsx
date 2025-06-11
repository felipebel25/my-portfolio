import { Box } from '@mui/material'

import { HeaderHomePortfolio } from 'components/molecules/homePortfolio/header/headerHomePortfolio'
import { MainHomePortfolio } from 'components/molecules/homePortfolio/main/mainHomePortfolio'
import { FooterPortfolio } from 'components/molecules/homePortfolio/footer/footerPortfolio'

import { styles } from './stylesPortfolio'
import 'animate.css'

export const Portfolio = () => (
    <Box sx={styles.main}>
        <HeaderHomePortfolio />
        <MainHomePortfolio />
        <FooterPortfolio />
    </Box>
)
