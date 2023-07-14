import { Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from "@mui/material"
import { styles } from "./stylesHeaderHomePortfolio"
import { ChangeEvent, MouseEvent, useState } from "react";
import { Construction, ContactMail, MenuOutlined, Person, PersonOutline, WorkOffOutlined, WorkOutline } from "@mui/icons-material";

export const HeaderHomePortfolio = () => {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const size = useMediaQuery('(min-width:600px)')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box component='header' sx={styles.header}>
            <Typography component='h3' variant="h5" sx={styles.name} ><b>&lt;</b>Felipe_Medina <b>/&gt;</b></Typography>
            <Box sx={size ? styles.urlSection : { display: "none" }}>
                <Button startIcon={<PersonOutline />} sx={styles.button} href="">
                    About Me
                </Button>
                <Button startIcon={<WorkOutline />} sx={styles.button} href="">
                    Projects
                </Button>
                <Button startIcon={<Construction />} sx={styles.button} href="">
                    Tools & Langs
                </Button>
                <Button  startIcon={<ContactMail />} sx={styles.button} href="">
                    Contact
                </Button>
            </Box>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ display: { xs: "block", md: "none" } }}
                aria-label="open drawer"
                onClick={handleMenu}
            >
                <MenuOutlined />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
        </Box>
    )
}
