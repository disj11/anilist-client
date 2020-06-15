import {MediaTooltip} from "../tooltip";
import {Card, CardActionArea, Theme, Tooltip, Typography} from "@material-ui/core";
import {Image} from "../../atoms/Image";
import React, {FunctionComponent, useCallback} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {withStyles} from "@material-ui/styles";
import {Media} from "../../../models";
import {useRouter} from "next/router";
import {PagePaths} from "../../../constants/PagePaths";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        height: 265,
    },
    title: {
        padding: theme.spacing(),
    },
}));

const HtmlTooltip = withStyles((theme: Theme) => ({
    tooltip: {
        backgroundColor: "white",
        padding: theme.spacing(3),
    },
}))(Tooltip);

interface Props {
    media: Media
}

const SimpleAnimationCard: FunctionComponent<Props> = ({media}) => {
    const classes = useStyles();
    const router = useRouter();

    const handleClick = useCallback(async (id: number) => {
        await router.push(PagePaths.ANIMATIONS + "/" + id);
    }, []);

    return (
        <HtmlTooltip
            title={<MediaTooltip media={media} maxDescriptionLength={100}/>}
            placement={"right-start"}
        >
            <CardActionArea onClick={() => handleClick(media.id)}>
                <Card>
                    <Image
                        src={media.coverImage.large}
                        aspectRatio={2/3}
                    />
                    <Typography
                        className={classes.title}
                        variant={"caption"}
                        component={"div"}
                        noWrap
                    >{media.title.userPreferred}</Typography>
                </Card>
            </CardActionArea>
        </HtmlTooltip>
    )
}

export default SimpleAnimationCard;