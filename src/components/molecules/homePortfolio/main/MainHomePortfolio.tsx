import { Box } from "@mui/material";
import { AboutMe } from "../../AboutMe/AboutMe";
import { BannerPortfolio } from "../../Banner/BannerPortfolio";
import { MyProjects } from "../../MyProjects/MyProjects";
import TimelineDev from "../../Timeline/Timeline";

export const MainHomePortfolio = () => (
  <Box component="main" bgcolor="info.main">
    <BannerPortfolio />
    <AboutMe />
    <TimelineDev />
    <MyProjects />
  </Box>
);
