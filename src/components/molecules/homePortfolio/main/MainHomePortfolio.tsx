import { Box } from '@mui/material'
import { AboutMe } from 'components/molecules/aboutMe/aboutMe'
import { BannerPortfolio } from 'components/molecules/banner/bannerPortfolio'
import { MyProjects } from 'components/molecules/myProjects/myProjects'
import TimelineDev from 'components/molecules/timeline/timeline'


export const MainHomePortfolio = () => (
    <Box component="main" bgcolor="info.main">
        <BannerPortfolio />
        <AboutMe />
        <TimelineDev />
        <MyProjects />
    </Box>
)
