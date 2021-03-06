import React, {FunctionComponent} from "react";
import {Media} from "../../../models";
import {Box, Chip, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core/styles";

interface Props {
    media: Media;
    maxDescriptionLength?: number,
}

const useStyles = makeStyles((theme) => ({
    description: {
        marginTop: theme.spacing(),
        marginBottom: theme.spacing(2),
    },
    tag: {
        marginRight: 3,
        marginBottom: 3,
    }
}));

const MediaTooltip: FunctionComponent<Props> = ({media, maxDescriptionLength}) => {
    const classes = useStyles();
    return (
        <Box>
            <Typography gutterBottom color={"textPrimary"}>{media.format} {media.episodes && ' | episodes ' + media.episodes}</Typography>
            {media.averageScore && <Rating name="read-only" value={media.averageScore / 20} readOnly />}
            {media.description && <Typography
                className={classes.description}
                color={"textPrimary"}
                variant={"body2"}
            >{maxDescriptionLength ? media.description.substring(0, maxDescriptionLength) + "..." : media.description}</Typography>}
            {media.genres.slice(0, 3).map(genre => {
                return <Chip
                    className={classes.tag}
                    key={genre}
                    label={genre}
                    size={"small"}
                    variant="outlined"
                />
            })}
        </Box>
    )
}

export default MediaTooltip;