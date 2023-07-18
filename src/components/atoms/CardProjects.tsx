import { Box, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Chip, Fade, IconButton, Tooltip, Typography } from "@mui/material"
import { styles } from "./stylesCardProjects";
import { CodeOutlined, LinkOutlined } from "@mui/icons-material";

interface Props {
    name: string;
    description: string;
    url: string;
    urlFolder?: string;
    tags: string[];

    img: string;
}

export const CardProjects = ({ name, description, img, url, urlFolder, tags }: Props) => {
    return (
        <Card sx={styles.main}>
            <Fade in={true} timeout={3000}>
                <Box component='header' sx={styles.iconsActions}>
                    <Tooltip title={'Go to Project'} >
                        <IconButton sx={styles.iconAction} >
                            <LinkOutlined />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={'Go to Repository'} >
                        <IconButton sx={styles.iconAction} >
                            <CodeOutlined />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Fade>

            <CardActionArea>
                <CardMedia
                    component="img"
                    height="170"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={styles.chipsContainer}>
                    {tags.map(tag => (
                        <Chip sx={styles.chip} color="secondary" key={tag} label={tag} />
                    ))}
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
