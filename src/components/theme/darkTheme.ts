'use client'
import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#11071F',
            light: '#7127BA',
        },
        secondary: {
            main: '#FFFFFF',
            light: '#CCD6F6',
        },
        info: {
            main: '#1A0B2E',
        },
    },
    typography: {
        body1: {
            fontSize: '1.2rem',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                size: 'medium',
                disableElevation: true,
                color: 'secondary',
                style: {},
            },
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    padding: '0.5rem 0.7rem',
                    borderRadius: '0.8rem',
                    textTransform: 'none',
                },
            },
        },
    },
})
