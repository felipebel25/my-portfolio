import { Box } from '@mui/material'

import { styles } from './stylesPortfolio'
import 'animate.css'
import { MainHomePortfolio } from 'components/molecules/homePortfolio/main/mainHomePortfolio'
import { FooterPortfolio } from 'components/molecules/homePortfolio/footer/footerPortfolio'
import { HeaderHomePortfolio } from 'components/molecules/homePortfolio/header/HeaderHomePortfolio'

export const Portfolio = () => (
    <Box sx={styles.main}>
        <HeaderHomePortfolio />
        <MainHomePortfolio />
        <FooterPortfolio />
    </Box>
)
