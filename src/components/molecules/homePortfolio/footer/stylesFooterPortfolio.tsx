export const styles = {
    main: {
        background: {
            xs: 'linear-gradient(180deg, #242424 -5%, rgba(53,39,67,0.9556197478991597) 51%, rgba(53,39,67,1) 100%)',
            md: 'linear-gradient(180deg, #242424 5%, rgba(53,39,67,0.9556197478991597) 51%, rgba(53,39,67,1) 100%)',
        },
        height: { xs: 'auto', md: '25rem' },
        pb: { xs: '25%', md: '0' },
    },
    textSection: {
        pt: { xs: '3rem', md: '8rem' },
        textAlign: 'center',
    },
    title: {
        fontWeight: 700,
        mb: '1rem',
    },
    description: {
        fontSize: { xs: '1.2rem', md: '1.4rem' },
        fontWeight: 300,
    },
    iconsContainer: {
        width: '100%',
    },
    iconButton: {
        margin: { xs: '1.5rem 4%', md: '1.5rem 3rem' },
        '&:hover': {
            color: 'secondary.main',
        },
    },
    icon: {
        width: '3rem',
        height: '100%',
    },
}
