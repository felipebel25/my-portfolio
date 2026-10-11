import { brand } from 'components/theme/darkTheme'

const mono =
    "ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Roboto Mono', monospace"

export const styles = {
    main: {
        backgroundColor: brand.surface,
        borderTop: `1px solid ${brand.border}`,
        borderBottom: `1px solid ${brand.border}`,
        padding: { xs: '4rem 1.25rem', md: '6rem 4.5%' },
        scrollMargin: '80px',
    },
    inner: {
        maxWidth: '1300px',
        mx: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: { xs: '2.5rem', md: '4rem' },
    },
    sectionText: {
        width: { xs: '100%', md: '48%' },
        textAlign: { xs: 'center', md: 'left' },
    },
    paragraph: {
        color: brand.gray,
        fontWeight: 300,
        lineHeight: 1.75,
        fontSize: { xs: '1rem', md: '1.1rem' },
        mb: '1rem',
    },
    terminal: {
        width: { xs: '100%', md: '48%' },
        maxWidth: '620px',
        backgroundColor: brand.black,
        border: `1px solid ${brand.borderStrong}`,
        borderRadius: '0.9rem',
        overflow: 'hidden',
        boxShadow: '0 30px 60px -30px rgba(0, 0, 0, 0.9)',
    },
    terminalBar: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.45rem',
        px: '1rem',
        py: '0.75rem',
        borderBottom: `1px solid ${brand.border}`,
        backgroundColor: brand.surfaceRaised,
    },
    terminalDot: {
        width: '11px',
        height: '11px',
        borderRadius: '50%',
    },
    terminalTitle: {
        ml: 'auto',
        mr: 'auto',
        pr: '2.5rem',
        fontFamily: mono,
        fontSize: '0.8rem',
        color: brand.grayDark,
    },
    terminalBody: {
        padding: { xs: '1.1rem', md: '1.5rem' },
        fontFamily: mono,
        '& p': {
            fontFamily: mono,
            fontSize: { xs: '0.82rem', md: '0.92rem' },
            lineHeight: 1.7,
        },
    },
    line: {
        color: brand.white,
        mt: '0.6rem',
        '&:first-of-type': { mt: 0 },
    },
    prompt: {
        color: brand.green,
    },
    output: {
        color: brand.gray,
    },
    key: {
        color: brand.white,
    },
    cursor: {
        display: 'inline-block',
        width: '0.55rem',
        height: '1rem',
        verticalAlign: 'text-bottom',
        backgroundColor: brand.gray,
        animation: 'blink 1.1s steps(1) infinite',
        '@keyframes blink': {
            '50%': { opacity: 0 },
        },
    },
}
