import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import React, {FunctionComponent, useCallback} from "react";
import {useRouter} from "next/router";
import {PagePaths} from "../../../constants/PagePaths";
import {Media} from "../../../models";
import {MediaTooltip} from "../tooltip";
import {makeStyles} from "@material-ui/core/styles";

interface Props {
    media: Media;
}

const useStyles = makeStyles({
    root: {
      height: 227,
    },
    cardMedia: {
        width: 180,
        height: "100%",
    },
    title: {
        width: 250,
    },
});

const DetailAnimationCard: FunctionComponent<Props> = ({media}) => {
    const router = useRouter();
    const classes = useStyles();

    const handleClick = useCallback(async (id: number) => {
        await router.push(PagePaths.ANIMATIONS + "/" + id);
    }, []);

    return (
        <CardActionArea onClick={() => handleClick(media.id)}>
            <Card>
                <Box display={"flex"} className={classes.root}>
                    <Box>
                        <CardMedia
                            className={classes.cardMedia}
                            image={media.coverImage.large}
                            src={"image"}
                        />
                    </Box>
                    <CardContent>
                        <Typography
                            className={classes.title}
                            variant={"h6"}
                            component={"div"}
                            gutterBottom
                            noWrap
                        >
                            {media.title.userPreferred}
                        </Typography>
                        <MediaTooltip media={media} maxDescriptionLength={100}/>
                    </CardContent>
                </Box>
            </Card>
        </CardActionArea>
    )
}

export default DetailAnimationCard;