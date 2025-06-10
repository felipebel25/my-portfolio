import { Box } from "@mui/material"
import { HeaderHomePortfolio } from "../molecules/HomePortfolio/header/HeaderHomePortfolio"
import { MainHomePortfolio } from "../molecules/HomePortfolio/main/MainHomePortfolio";
import { FooterPortfolio } from "../molecules/HomePortfolio/footer/FooterPortfolio";

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
