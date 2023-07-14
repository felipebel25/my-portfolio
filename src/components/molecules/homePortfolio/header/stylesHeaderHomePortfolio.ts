export const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: { xs: "1rem", md: "1.5rem 4.5%" },
    },
    urlSection: {
        width: "50%",
        maxWidth: "44rem",
        display: "flex",
        justifyContent: "space-around",

    },
    name: {
        cursor: 'pointer',
        fontWeight:  700,
        '& > b': {
            color: "secondary.main"
        }
    },
    button: {
        borderRadius: 0,
        cursor: "pointer",
        '&:hover': {
            opacity: "1",
            backgroundColor: "transparent",
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

    }
}