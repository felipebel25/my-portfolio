import { brand } from 'components/theme/darkTheme'

export const styles = {
    main: {
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${brand.border}`,
        background: `radial-gradient(ellipse 60% 80% at 50% 120%, rgba(241, 91, 95, 0.14), transparent 70%), ${brand.black}`,
        padding: { xs: '4rem 1.25rem 2rem', md: '6rem 4.5% 2.5rem' },
        scrollMargin: '80px',
    },
    textSection: {
        textAlign: 'center',
        maxWidth: '44rem',
        mx: 'auto',
    },
    eyebrow: {
        fontFamily: 'monospace',
        fontSize: '0.95rem',
        color: brand.green,
        letterSpacing: '0.05em',
    },
    title: {
        fontWeight: 700,
        fontSize: { xs: '2rem', md: '2.8rem' },
        mt: '0.5rem',
        mb: '1rem',
    },
    titleAccent: {
        color: brand.red,
    },
    description: {
        fontSize: { xs: '1.05rem', md: '1.2rem' },
        fontWeight: 300,
        color: brand.gray,
    },
    iconsContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: { xs: '1rem', md: '1.5rem' },
        mt: '2.5rem',
    },
    iconButton: {
        width: '4.25rem',
        height: '4.25rem',
        color: brand.white,
        border: `1px solid ${brand.borderStrong}`,
        transition: 'all 0.25s ease',
        '&:hover': {
            color: brand.black,
            backgroundColor: brand.green,
            borderColor: brand.green,
        },
    },
    icon: {
        width: '1.9rem',
        height: '1.9rem',
    },
    copyright: {
        textAlign: 'center',
        fontSize: '0.85rem',
        color: brand.grayDark,
        mt: { xs: '3.5rem', md: '5rem' },
    },
}
