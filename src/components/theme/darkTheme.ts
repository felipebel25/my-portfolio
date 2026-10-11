'use client'
import { createTheme } from '@mui/material/styles'

// Brand palette — black / gray / white carry the UI,
// red & green are reserved for small accents.
export const brand = {
    black: '#050505',
    surface: '#0E0E0E',
    surfaceRaised: '#151515',
    border: 'rgba(255, 255, 255, 0.08)',
    borderStrong: 'rgba(255, 255, 255, 0.16)',
    white: '#FFFFFF',
    gray: '#A3A3A3',
    grayDark: '#6B6B6B',
    red: '#F15B5F',
    green: '#CFFF3F',
}

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: brand.white,
            light: brand.white,
            contrastText: brand.black,
        },
        secondary: {
            main: brand.red,
            light: brand.surface,
            contrastText: brand.black,
        },
        success: {
            main: brand.green,
            contrastText: brand.black,
        },
        error: {
            main: brand.red,
        },
        info: {
            main: brand.black,
        },
        background: {
            default: brand.black,
            paper: brand.surface,
        },
        text: {
            primary: brand.white,
            secondary: brand.gray,
        },
        divider: brand.border,
    },
    typography: {
        fontFamily: "'Ubuntu', sans-serif",
        body1: {
            fontSize: '1.2rem',
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    border: `1px solid ${brand.border}`,
                },
            },
        },
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
                    padding: '0.5rem 0.9rem',
                    borderRadius: '0.8rem',
                    textTransform: 'none',
                },
                outlined: {
                    borderColor: brand.borderStrong,
                    '&:hover': {
                        borderColor: brand.white,
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    color: brand.gray,
                    borderColor: brand.borderStrong,
                    backgroundColor: 'transparent',
                },
            },
        },
    },
})
