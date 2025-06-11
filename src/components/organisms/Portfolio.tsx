import { Box } from '@mui/material'

import { HeaderHomePortfolio } from 'components/molecules/homePortfolio/header/HeaderHomePortfolio'
import { MainHomePortfolio } from 'components/molecules/homePortfolio/main/MainHomePortfolio'
import { FooterPortfolio } from 'components/molecules/homePortfolio/footer/FooterPortfolio'

import { styles } from './stylesPortfolio'
import 'animate.css'

export const Portfolio = () => (
    <Box sx={styles.main}>
        <HeaderHomePortfolio />
        <MainHomePortfolio />
        <FooterPortfolio />
    </Box>
)
