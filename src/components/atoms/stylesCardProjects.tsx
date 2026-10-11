import { brand } from 'components/theme/darkTheme'

export const styles = {
    main: {
        maxWidth: 400,
        width: '100%',
        height: '100%',
        backgroundColor: brand.surface,
        borderRadius: '1rem',
        transition: 'border-color 0.25s ease, transform 0.25s ease',
        '&:hover': {
            borderColor: brand.borderStrong,
            transform: 'translateY(-4px)',
            '& header': {
                display: 'flex !important',
            },
        },
    },
    chip: {
        margin: '0.25rem',
    },
    iconsActions: {
        position: 'relative',
        top: '0.75rem',
        marginBottom: '-3rem',
        zIndex: 1,
        width: '100%',
        height: '3rem',
        display: { xs: 'flex', md: 'none' },
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem',
    },
    iconAction: {
        backgroundColor: 'rgba(5, 5, 5, 0.8)',
        border: `1px solid ${brand.borderStrong}`,
        color: brand.white,
        '&:hover ': {
            backgroundColor: brand.black,
            color: brand.green,
        },
    },
    chipsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        px: '0.75rem',
        pb: '1rem',
    },
}
