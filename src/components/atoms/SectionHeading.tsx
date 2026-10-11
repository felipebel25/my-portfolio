import { Box, Typography } from '@mui/material'

import { brand } from 'components/theme/darkTheme'

interface Props {
    eyebrow: string
    title: string
    align?: 'left' | 'center'
}

export const SectionHeading = ({ eyebrow, title, align = 'left' }: Props) => (
    <Box sx={{ textAlign: { xs: 'center', md: align }, mb: '2.5rem' }}>
        <Typography
            component="span"
            sx={{
                fontFamily: 'monospace',
                fontSize: '0.95rem',
                color: brand.green,
                letterSpacing: '0.05em',
            }}
        >
            {'// '}
            {eyebrow}
        </Typography>
        <Typography
            component="h2"
            variant="h3"
            sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.6rem' },
                mt: '0.5rem',
            }}
        >
            {title}
        </Typography>
    </Box>
)
