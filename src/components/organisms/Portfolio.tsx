import { Box } from "@mui/material"
import { HeaderHomePortfolio } from "../molecules/homePortfolio/header/HeaderHomePortfolio"
import { MainHomePortfolio } from "../molecules/homePortfolio/main/MainHomePortfolio";
import { FooterPortfolio } from "../molecules/homePortfolio/footer/FooterPortfolio";

import { styles } from "./stylesPortfolio";
import 'animate.css';

export const Portfolio = () => {
    return (
        <Box sx={styles.main}>
            <HeaderHomePortfolio />
            <MainHomePortfolio />
            <FooterPortfolio />
        </Box>
    )
}
