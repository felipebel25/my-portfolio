export const styles = {
    main: {
        width: '100%',
        scrollMargin: '80px',
        height: { xs: 'auto', md: 'auto' },
        padding: '3rem 4.5%',
        pt: { xs: '0', md: '3rem' },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'info.main',
        justifyContent: { xs: 'flex-end', md: 'space-between' },
        alignItems: { xs: 'center', md: 'flex-start' },
    },
    title: {
        textAlign: { xs: 'center', md: 'left' },
        mt: { xs: '2rem', md: '0' },
    },
    containerCards: {
        display: 'flex',
        width: '100%',
        flexDirection: { xs: 'column', md: 'row' },
        m: '2rem 0',
        alignItems: { xs: 'center', md: 'space-between' },
        gap: '1rem',
        justifyContent: 'space-evenly',
    },
}
