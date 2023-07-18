import { Box } from "@mui/material"
import { AboutMe } from "../../about_me/AboutMe"
import { BannerPortfolio } from "../../banner/BannerPortfolio"
import { MyProjects } from "../../my_projects/MyProjects"

export const MainHomePortfolio = () => {
    return (
        <Box component='main' bgcolor='info.main'>
            <BannerPortfolio />
            <AboutMe />
            <MyProjects />
        </Box>
    )
}
