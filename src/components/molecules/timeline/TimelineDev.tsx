import { Box, Chip, Typography } from '@mui/material'
import { PlaceOutlined } from '@mui/icons-material'

import { SectionHeading } from 'components/atoms/SectionHeading'
import { experiences } from 'utils/constants'

import { styles } from './stylesTimelineDev'

export const TimelineDev = () => (
    <Box id="experience" component="section" sx={styles.main}>
        <SectionHeading eyebrow="experience" title="Work Experience" />
        <Box component="ol" sx={styles.list}>
            {experiences.map((item) => (
                <Box
                    component="li"
                    key={`${item.company}-${item.period}`}
                    sx={styles.item}
                >
                    <Box
                        sx={{
                            ...styles.dot,
                            ...(item.current && styles.dotCurrent),
                        }}
                    />
                    <Box sx={styles.meta}>
                        <Typography sx={styles.period}>
                            {item.period}
                        </Typography>
                        {item.current && (
                            <Typography component="span" sx={styles.badge}>
                                Current
                            </Typography>
                        )}
                    </Box>
                    <Box sx={styles.card}>
                        <Typography component="h3" sx={styles.role}>
                            {item.role}
                        </Typography>
                        <Box sx={styles.companyRow}>
                            <Typography sx={styles.company}>
                                {item.company}
                            </Typography>
                            <Typography sx={styles.location}>
                                <PlaceOutlined sx={{ fontSize: '1rem' }} />
                                {item.location}
                            </Typography>
                        </Box>
                        <Box component="ul" sx={styles.highlights}>
                            {item.highlights.map((highlight) => (
                                <Typography component="li" key={highlight}>
                                    {highlight}
                                </Typography>
                            ))}
                        </Box>
                        <Box sx={styles.tags}>
                            {item.tags.map((tag) => (
                                <Chip
                                    key={tag}
                                    label={tag}
                                    size="small"
                                    variant="outlined"
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    </Box>
)
