export const styles = {
    main: {
        backgroundColor: 'secondary.light',
        height: { xs: 'auto', md: '33rem' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        padding: { xs: '8% 4.5%', md: '2% 4.5%' },
        textAlign: { xs: 'center', md: 'left' },
        scrollMargin: '80px',
    },
    sectionText: {
        width: { xs: '100%', md: '50%' },
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    sectionConsole: {
        width: { xs: '100%', md: '50%' },
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'center', md: 'flex-end' },
        margin: { xs: '2rem 0', md: '0' },
        maxWidth: '980px',
    },
    about: {},
    whoIam: {
        mb: '1rem',
        fontSize: '2.1rem',
        fontWeight: 700,
    },
}
