import { Typography, Paper, Box, useMediaQuery, useTheme } from '@mui/material'
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab'
import { experiences } from 'utils/constants'

export const TimelineDev = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box
            component="section"
            sx={{ my: '3rem', px: { xs: '1.5rem', sm: '4.5%' }, py: '1rem' }}
        >
            <Typography
                component="h3"
                variant="h4"
                sx={{ mb: 4, textAlign: 'center', fontSize: { md: '2.85rem' } }}
            >
                Work Experience
            </Typography>
            <Timeline position={isSmallScreen ? 'right' : 'alternate'}>
                {experiences.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent
                            sx={{
                                display: { xs: 'none', md: 'block' },
                                m: 'auto 0',
                                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                            }}
                            align="right"
                            color="text.secondary"
                        >
                            {item.year}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            {index < experiences.length - 1 && (
                                <TimelineConnector />
                            )}
                        </TimelineSeparator>

                        <TimelineContent
                            sx={{
                                width: '100%',
                                py: '12px',
                                px: { xs: 1, sm: 2 },
                            }}
                        >
                            <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 } }}>
                                <Typography
                                    variant="h6"
                                    component="span"
                                    sx={{
                                        fontSize: { xs: '1rem', sm: '1.25rem' },
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '0.9rem', sm: '1rem' },
                                        mt: 1,
                                    }}
                                >
                                    {item.description}
                                </Typography>
                                {isSmallScreen && (
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            mt: 2,
                                            fontStyle: 'italic',
                                            fontSize: '0.8rem',
                                        }}
                                    >
                                        {item.year}
                                    </Typography>
                                )}
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    )
}
