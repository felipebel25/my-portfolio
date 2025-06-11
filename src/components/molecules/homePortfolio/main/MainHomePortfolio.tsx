import { Box } from "@mui/material";
import { AboutMe } from "../../aboutMe/aboutMe";
import { BannerPortfolio } from "../../banner/bannerPortfolio";
import { MyProjects } from "../../myProjects/myProjects";
import TimelineDev from "../../timeline/timeline";

export const MainHomePortfolio = () => (
  <Box component="main" bgcolor="info.main">
    <BannerPortfolio />
    <AboutMe />
    <TimelineDev />
    <MyProjects />
  </Box>
);
