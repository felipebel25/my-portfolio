import { brand } from 'components/theme/darkTheme'

export const styles = {
    main: {
        scrollMargin: '80px',
        padding: { xs: '4rem 1.25rem', md: '6rem 4.5%' },
        maxWidth: '1100px',
        mx: 'auto',
    },
    list: {
        listStyle: 'none',
        position: 'relative',
        pl: { xs: '1.5rem', md: '2rem' },
        borderLeft: `1px solid ${brand.borderStrong}`,
    },
    item: {
        position: 'relative',
        pb: '3rem',
        '&:last-of-type': { pb: 0 },
    },
    dot: {
        position: 'absolute',
        left: { xs: 'calc(-1.5rem - 6px)', md: 'calc(-2rem - 6px)' },
        top: '0.35rem',
        width: '11px',
        height: '11px',
        borderRadius: '50%',
        backgroundColor: brand.black,
        border: `2px solid ${brand.gray}`,
    },
    dotCurrent: {
        backgroundColor: brand.green,
        borderColor: brand.green,
        boxShadow: `0 0 0 4px rgba(207, 255, 63, 0.15)`,
    },
    meta: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        mb: '0.75rem',
    },
    period: {
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        color: brand.gray,
    },
    badge: {
        fontSize: '0.7rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: brand.green,
        border: `1px solid rgba(207, 255, 63, 0.4)`,
        borderRadius: '999px',
        px: '0.6rem',
        py: '0.1rem',
    },
    card: {
        backgroundColor: brand.surface,
        border: `1px solid ${brand.border}`,
        borderRadius: '1rem',
        padding: { xs: '1.25rem', md: '1.75rem' },
        transition: 'border-color 0.25s ease',
        '&:hover': {
            borderColor: brand.borderStrong,
        },
    },
    role: {
        fontWeight: 700,
        fontSize: { xs: '1.15rem', md: '1.35rem' },
    },
    companyRow: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        columnGap: '1rem',
        rowGap: '0.25rem',
        mt: '0.25rem',
    },
    company: {
        fontSize: '1rem',
        color: brand.white,
        opacity: 0.85,
    },
    location: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
        fontSize: '0.9rem',
        color: brand.grayDark,
    },
    highlights: {
        mt: '1rem',
        pl: '1.1rem',
        color: brand.gray,
        '& li': {
            fontSize: { xs: '0.95rem', md: '1rem' },
            lineHeight: 1.6,
            mb: '0.4rem',
        },
        '& li::marker': {
            color: brand.red,
        },
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        mt: '1.25rem',
    },
}
