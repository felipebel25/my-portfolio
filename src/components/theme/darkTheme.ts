'use client'
import { createTheme } from '@mui/material/styles'
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ECECEC',
            light: '#FFFFFF',
        },
        secondary: {
            main: '#66428A',
            light: '#352743',
        },
        info: {
            main: '#242424',
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
                color: 'primary',
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
