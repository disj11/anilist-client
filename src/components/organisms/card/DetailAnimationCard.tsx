import {Box, Card, CardActionArea, Typography} from "@material-ui/core";
import {Image} from "../../atoms/Image";
import {MediaTooltip} from "../tooltip";
import React, {FunctionComponent, useCallback} from "react";
import {useRouter} from "next/router";
import {PagePaths} from "../../../constants/PagePaths";
import {makeStyles} from "@material-ui/core/styles";
import {Media} from "../../../models";

const useStyles = makeStyles((theme) => ({
    mediaBox: {
        display: "flex",
    },
    cardMedia: {
        width: 180,
        height: 240,
    },
    title: {
        marginBottom: theme.spacing(),
    },
}));

interface Props {
    media: Media;
}

const DetailAnimationCard: FunctionComponent<Props> = ({media}) => {
    const classes = useStyles();
    const router = useRouter();

    const handleClick = useCallback(async (id: number) => {
        await router.push(PagePaths.ANIMATIONS + "/" + id);
    }, []);

    return (
        <CardActionArea onClick={() => handleClick(media.id)}>
            <Card>
                <Box className={classes.mediaBox}>
                    <Box>
                        <Image
                            className={classes.cardMedia}
                            image={media.coverImage.large}
                            title={media.title.userPreferred}
                        />
                    </Box>
                    <Box p={3}>
                        <Typography
                            className={classes.title}
                            variant={"h6"}
                            component={"div"}
                            noWrap
                        >{media.title.userPreferred}</Typography>
                        <MediaTooltip media={media} maxDescriptionLength={100}/>
                    </Box>
                </Box>
            </Card>
        </CardActionArea>
    )
}

export default DetailAnimationCard;