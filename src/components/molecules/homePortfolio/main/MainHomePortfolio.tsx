import { Box } from "@mui/material";
import { AboutMe } from "../../aboutMe/AboutMe";
import { BannerPortfolio } from "../../banner/BannerPortfolio";
import { MyProjects } from "../../myProjects/MyProjects";
import TimelineDev from "../../timeline/Timeline";

export const MainHomePortfolio = () => (
  <Box component="main" bgcolor="info.main">
    <BannerPortfolio />
    <AboutMe />
    <TimelineDev />
    <MyProjects />
  </Box>
);
