import React, {FunctionComponent} from "react";
import {Card, Grid, Theme, Tooltip, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Image} from "../../components/atoms/Image";
import {Media} from "../../models";
import {MediaTooltip} from "../../components/atoms/tooltip";
import {withStyles} from "@material-ui/styles";

interface Props {
    list: Array<Media>;
}

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

const SimpleAnimations: FunctionComponent<Props> = ({list}) => {
    const classes = useStyles();
    return (
        <>
            {list.length > 0 && <Grid container spacing={4}>
                {list.map((data) => {
                    return (
                        <Grid item key={data.id} xs={6} sm={3} md={2}>
                            <HtmlTooltip
                                title={<MediaTooltip media={data}/>}
                                placement={"right-start"}
                            >
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
                            </HtmlTooltip>
                        </Grid>
                    )
                })}
            </Grid>}
            {list.length === 0 && <Typography>No results found :(</Typography>}
        </>
    )
}

export default SimpleAnimations;