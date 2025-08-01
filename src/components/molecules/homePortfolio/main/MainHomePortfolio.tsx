import { Box } from '@mui/material'

import { AboutMe } from 'components/molecules/aboutMe/AboutMe'
import { BannerPortfolio } from 'components/molecules/banner/BannerPortfolio'
import { TimelineDev } from 'components/molecules/timeline/TimelineDev'
import { MyProjects } from 'components/molecules/myProjects/MyProjects'

export const MainHomePortfolio = () => (
    <Box component="main" bgcolor="info.main">
        <BannerPortfolio />
        <AboutMe />
        <TimelineDev />
        <MyProjects />
    </Box>
)
