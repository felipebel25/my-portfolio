import {  useState } from "react";
import { Box, Button, Drawer, IconButton, ListItemIcon, ListItemText, MenuItem,  Typography, useMediaQuery } from "@mui/material"

import {  ContactsOutlined, HomeOutlined, MenuOutlined, PersonOutline, WorkOutline } from "@mui/icons-material";

import { styles } from "./stylesHeaderHomePortfolio"

export const HeaderHomePortfolio = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const size = useMediaQuery('(min-width:900px)')

    const handleClose = () => setOpenDrawer(false);

    const goToIdSection = (id: string) => document.querySelector(`#${id}`)!.scrollIntoView({ block: "start", inline: "start", behavior: "smooth" })
    const goToIdSectionMobile = async (id: string) => {
        await goToIdSection(id)
        // handleClose()
    }

    return (
        <Box component='header' sx={styles.header}>
            <Typography component='h3' variant="h5" sx={styles.name} ><b>&lt;</b>Felipe_Medina <b>/&gt;</b></Typography>
            <Box sx={size ? styles.urlSection : { display: "none" }}>
                {navActions.map(({ name, Icon, url }) => (
                    <Button
                        key={name}
                        onClick={() => goToIdSection(url)}
                        startIcon={<Icon />}
                        sx={styles.button}
                    >
                        {name}
                    </Button>
                ))}
                {/* <Button startIcon={<WorkOutline />} sx={styles.button} href="">
                    Projects
                </Button>
                <Button startIcon={<Construction />} sx={styles.button} href="">
                    Tools & Langs
                </Button>
                <Button startIcon={<ContactMail />} sx={styles.button} href="">
                    Contact
                </Button> */}
            </Box>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ display: { xs: "block", md: "none" } }}
                aria-label="open drawer"
                onClick={() => setOpenDrawer(true)}
            >
                <MenuOutlined />
            </IconButton>
            <Drawer
                open={openDrawer}
                onClose={handleClose}
                anchor='right'
                sx={styles.drawer}
            >
                <Box
                    component='main'
                    sx={styles.drawerContainer}
                >
                    <Typography component='h3' variant="body1" sx={styles.nameDrawer} ><b>&lt;</b>Felipe_Medina <b>/&gt;</b></Typography>
                    {navActions.map(({ name, Icon, url }) => (
                        <MenuItem
                            key={name}
                            sx={styles.menuItem}
                            onClick={() => goToIdSectionMobile(url)}
                        >
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText>
                                {name}
                            </ListItemText>
                        </MenuItem>
                    ))}
                </Box>
            </Drawer>
        </Box>
    )
}

const navActions = [
    {
        name: "Banner",
        url: "banner",
        Icon: HomeOutlined
    },
    {
        name: "About Me",
        url: "about_me",
        Icon: PersonOutline
    },
    {
        name: "Projects",
        url: "my_projects",
        Icon: WorkOutline
    },
    {
        name: "Contact Me",
        url: "footer",
        Icon: ContactsOutlined
    },

]
