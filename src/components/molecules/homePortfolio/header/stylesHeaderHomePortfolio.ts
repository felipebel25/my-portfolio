import { brand } from 'components/theme/darkTheme'

export const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: { xs: '1rem 1.25rem', md: '1.25rem 4%' },
        position: 'fixed',
        width: '100%',
        backgroundColor: 'rgba(5, 5, 5, 0.75)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${brand.border}`,
        zIndex: 3,
    },
    urlSection: {
        width: '55%',
        maxWidth: '40rem',
        display: 'flex',
        justifyContent: 'space-between',
    },
    name: {
        cursor: 'pointer',
        fontWeight: 700,
        '& > b': {
            color: brand.green,
        },
    },
    button: {
        borderRadius: 0,
        cursor: 'pointer',
        color: brand.gray,
        '& .MuiButton-startIcon': {
            opacity: 0.7,
        },
        '&:hover': {
            color: brand.white,
            backgroundColor: 'transparent',
        },
        '&::before': {
            content: "''",
            position: 'absolute',
            display: 'block',
            width: '100%',
            height: '2px',
            bottom: 0,
            left: 0,
            backgroundColor: brand.green,
            transform: 'scaleX(0)',
            transformOrigin: 'top right',
            transition: 'transform 0.3s ease',
        },
        '&:hover::before': {
            visibility: 'visible',
            transform: 'scaleX(1)',
            transformOrigin: 'top left',
        },
    },
    drawer: {
        backdropFilter: 'blur(4px)',
        transition: 'all 0.5s ease-out',
        '& .MuiDrawer-paper': {
            backgroundColor: brand.black,
            borderLeft: `1px solid ${brand.border}`,
        },
    },
    drawerContainer: {
        width: '14rem',
    },
    nameDrawer: {
        pt: '3rem',
        pb: '2rem',
        margin: '0 auto',
        cursor: 'pointer',
        textAlign: 'center',
        fontWeight: 700,
        '& > b': {
            color: brand.green,
        },
    },
    menuItem: {
        margin: '0.5rem 0',
        color: brand.gray,
        '&:hover': {
            color: brand.white,
        },
    },
}
