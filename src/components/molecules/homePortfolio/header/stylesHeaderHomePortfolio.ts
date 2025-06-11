export const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: { xs: '1rem', md: '1.5rem 4%' },
        position: 'fixed',
        width: '100%',
        backgroundColor: 'info.main',
        zIndex: 3,
    },
    urlSection: {
        width: '50%',
        maxWidth: '35rem',
        display: 'flex',
        justifyContent: 'space-around',
    },
    name: {
        cursor: 'pointer',
        fontWeight: 700,
        '& > b': {
            color: 'secondary.main',
        },
    },
    button: {
        borderRadius: 0,
        cursor: 'pointer',
        '&:hover': {
            opacity: '1',
            backgroundColor: 'transparent',
            '&::after': {
                width: '100%',
                transition: 'width 0.3s ease-in-out',
            },
        },
        '&::before': {
            content: "''",
            position: 'absolute',
            display: 'block',
            width: '100%',
            height: '2px',
            bottom: 0,
            left: 0,
            backgroundColor: 'secondary.main',
            transform: 'scaleX(0)',
            transformOrigin: 'top right',
            transition: 'transform 0.3s ease',
        },
        '&:hover::before': {
            visibility: 'visible',
            transform: 'scaleX(1)',
        },
    },
    drawer: {
        backdropFilter: 'blur(4px)',
        transition: 'all 0.5s ease-out',
    },
    drawerContainer: {
        width: '13rem',
    },
    nameDrawer: {
        pt: '3rem',
        pb: '2rem',
        margin: '0 auto',
        cursor: 'pointer',
        textAlign: 'center',
        fontWeight: 700,
        '& > b': {
            color: 'secondary.main',
        },
    },
    menuItem: {
        margin: '1rem 0',
    },
}
