import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {TREND} from "../constants/queries";
import {Box, Container, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {Layout} from "../templates/layout";
import {SimpleAnimations} from "../templates/animations";
import {DateUtils} from "../utils/DateUtils";
import {TrendData} from "../models";
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    heading: {
        marginBottom: theme.spacing(),
        color: grey[800],
    },
}));

const Animations = () => {
    const classes = useStyles();

    const {loading, error, data} = useQuery<TrendData>(TREND, {
        variables: {
            season: DateUtils.getSeason(),
            seasonYear: DateUtils.getSeasonYear(),
            nextSeason: DateUtils.getNextSeason(),
            nextYear: DateUtils.getNextSeasonYear(),
        },
    });

    const trending = data?.trending?.media || [];
    const season = data?.season?.media || [];
    const nextSeason = data?.nextSeason?.media || [];
    const popular = data?.popular?.media || [];
    const top = data?.top?.media || [];

    return (
        <Layout loading={loading}>
            <Container className={classes.container} maxWidth={"lg"}>
                <Box mb={3}>
                    {!loading && <Typography className={classes.heading} variant="h6">
                        TRENDING NOW
                    </Typography>}
                    {!loading && <SimpleAnimations list={trending}/>}
                </Box>
                <Box mb={3}>
                    {!loading && <Typography className={classes.heading} variant="h6">
                        POPULAR THIS SEASON
                    </Typography>}
                    {!loading && <SimpleAnimations list={season}/>}
                </Box>
                <Box mb={3}>
                    {!loading && <Typography className={classes.heading} variant="h6">
                        UPCOMING NEXT SEASON
                    </Typography>}
                    {!loading && <SimpleAnimations list={nextSeason}/>}
                </Box>
                <Box mb={3}>
                    {!loading && <Typography className={classes.heading} variant="h6">
                        ALL TIME POPULAR
                    </Typography>}
                    {!loading && <SimpleAnimations list={popular}/>}
                </Box>
            </Container>
        </Layout>
    )
}

export default Animations;