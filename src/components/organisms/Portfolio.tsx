import { Box } from '@mui/material'
import { HeaderHomePortfolio } from '../molecules/homePortfolio/header/headerHomePortfolio'
import { MainHomePortfolio } from '../molecules/homePortfolio/main/mainHomePortfolio'
import { FooterPortfolio } from '../molecules/homePortfolio/footer/footerPortfolio'

import { styles } from './stylesPortfolio'
import 'animate.css'

export const Portfolio = () => {
    return (
        <Box sx={styles.main}>
            <HeaderHomePortfolio />
            <MainHomePortfolio />
            <FooterPortfolio />
        </Box>
    )
}
