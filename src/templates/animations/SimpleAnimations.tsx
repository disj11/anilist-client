import React, {FunctionComponent} from "react";
import {Card, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Image} from "../../components/atoms/Image";
import {Media} from "../../models/Data";

interface Props {
    media: Array<Media>;
}

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        height: 265,
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
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default SimpleAnimations;