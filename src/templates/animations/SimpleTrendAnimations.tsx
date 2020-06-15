import {TrendData} from "../../models";
import React, {FunctionComponent} from "react";
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import SimpleAnimations from "./SimpleAnimations";

interface Props {
    data: TrendData | undefined;
}

const useStyles = makeStyles((theme) => ({
    heading: {
        marginBottom: theme.spacing(),
        color: grey[800],
    },
}));

const SimpleTrendAnimations: FunctionComponent<Props> = ({data}) => {
    const classes = useStyles();

    const trending = data?.trending?.media || [];
    const season = data?.season?.media || [];
    const nextSeason = data?.nextSeason?.media || [];
    const popular = data?.popular?.media || [];
    // const top = data?.top?.media || [];

    return (
        <React.Fragment>
            <Box mb={5}>
                <Typography className={classes.heading} variant="h6">
                    TRENDING NOW
                </Typography>
                <SimpleAnimations list={trending}/>
            </Box>
            <Box mb={5}>
                <Typography className={classes.heading} variant="h6">
                    POPULAR THIS SEASON
                </Typography>
                <SimpleAnimations list={season}/>
            </Box>
            <Box mb={5}>
                <Typography className={classes.heading} variant="h6">
                    UPCOMING NEXT SEASON
                </Typography>
                <SimpleAnimations list={nextSeason}/>
            </Box>
            <Box mb={5}>
                <Typography className={classes.heading} variant="h6">
                    ALL TIME POPULAR
                </Typography>
                <SimpleAnimations list={popular}/>
            </Box>
        </React.Fragment>
    )
}

export default SimpleTrendAnimations;