export const styles = {
    main: {
        width: '100%',
        maxWidth: '1300px',
        mx: 'auto',
        scrollMargin: '80px',
        padding: { xs: '4rem 1.25rem', md: '6rem 4.5%' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'stretch' },
    },
    containerCards: {
        display: 'grid',
        width: '100%',
        gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
        },
        gap: '1.5rem',
        justifyItems: 'center',
    },
}
