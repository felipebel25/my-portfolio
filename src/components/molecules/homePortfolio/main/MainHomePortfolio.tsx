import { Box } from "@mui/material";
import { AboutMe } from "../../aboutMe/AboutMe";
import { BannerPortfolio } from "../../banner/BannerPortfolio";
import { MyProjects } from "../../myProjects/MyProjects";

export const MainHomePortfolio = () => (
  <Box component="main" bgcolor="info.main">
    <BannerPortfolio />
    <AboutMe />
    <MyProjects />
  </Box>
);
