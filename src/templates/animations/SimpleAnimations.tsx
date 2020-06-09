import React, {FunctionComponent} from "react";
import {Card, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Image} from "../../components/atoms/Image";
import {Media} from "../../models";

interface Props {
    media: Array<Media>;
}

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        height: 265,
    },
    title: {
        padding: theme.spacing(),
    },
}));

const SimpleAnimations: FunctionComponent<Props> = ({media}) => {
    const classes = useStyles();
    return (
        <Grid container spacing={4}>
            {media.map((data) => {
                return (
                    <Grid item key={data.id} xs={6} sm={3} md={2}>
                        <Card>
                            <Image
                                className={classes.cardMedia}
                                image={data.coverImage.large}
                                title={data.title.userPreferred}
                            />
                            <Typography
                                className={classes.title}
                                variant={"caption"}
                                component={"div"}
                                noWrap
                            >{data.title.userPreferred}</Typography>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default SimpleAnimations;