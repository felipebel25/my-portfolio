import { Box, Typography } from '@mui/material'

import { SectionHeading } from 'components/atoms/SectionHeading'
import { brand } from 'components/theme/darkTheme'
import { skills } from 'utils/constants'

import { styles } from './stylesAboutMe'

export const AboutMe = () => (
    <Box id="about_me" sx={styles.main} component="section">
        <Box sx={styles.inner}>
            <Box sx={styles.sectionText}>
                <SectionHeading eyebrow="about" title="Who I Am" />
                <Typography sx={styles.paragraph}>
                    I&#39;m a Full-Stack Software Developer from Colombia, now
                    based in Sydney. I enjoy turning complex problems into
                    clean, efficient code that lines up with real business
                    goals.
                </Typography>
                <Typography sx={styles.paragraph}>
                    I like leading teams and sharing knowledge, and I care about
                    the business side of technology — shipping solutions that
                    deliver measurable value. I believe in camaraderie and
                    teamwork, and I&#39;m self-taught and self-disciplined.
                </Typography>
            </Box>
            <Box sx={styles.terminal} aria-label="Skills summary">
                <Box sx={styles.terminalBar}>
                    <Box sx={{ ...styles.terminalDot, bgcolor: brand.red }} />
                    <Box
                        sx={{ ...styles.terminalDot, bgcolor: brand.grayDark }}
                    />
                    <Box sx={{ ...styles.terminalDot, bgcolor: brand.green }} />
                    <Typography component="span" sx={styles.terminalTitle}>
                        felipe@sydney: ~
                    </Typography>
                </Box>
                <Box sx={styles.terminalBody}>
                    <Typography component="p" sx={styles.line}>
                        <Box component="span" sx={styles.prompt}>
                            $
                        </Box>{' '}
                        whoami
                    </Typography>
                    <Typography component="p" sx={styles.output}>
                        Felipe Medina — Full-Stack Software Developer
                    </Typography>
                    <Typography component="p" sx={styles.line}>
                        <Box component="span" sx={styles.prompt}>
                            $
                        </Box>{' '}
                        cat stack.json
                    </Typography>
                    {skills.map(({ group, items }) => (
                        <Typography
                            component="p"
                            key={group}
                            sx={styles.output}
                        >
                            <Box component="span" sx={styles.key}>
                                {group}:
                            </Box>{' '}
                            {items.join(', ')}
                        </Typography>
                    ))}
                    <Typography component="p" sx={styles.line}>
                        <Box component="span" sx={styles.prompt}>
                            $
                        </Box>{' '}
                        <Box component="span" sx={styles.cursor} />
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
)
