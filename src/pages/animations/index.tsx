import React, {useCallback, useState} from "react";
import {withRouter} from "next/router";
import {WithRouterProps} from "next/dist/client/with-router";
import {useQuery} from "@apollo/react-hooks";
import {ANIMATION_LIST} from "../../constants/queries";
import {Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import {Pagination} from '@material-ui/lab';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        height: 380,
    },
    media: {
        height: 180,
    },
});

const Animations = ({router}: WithRouterProps) => {
    const classes = useStyles();
    const [{page, perPage}, setPageInfo] = useState({
        page: Number(router.query.page) || 1,
        perPage: Number(router.query.perPage) || 10,
    });

    const {loading, error, data} = useQuery(ANIMATION_LIST, {
        variables: {
            page: page,
            perPage: perPage,
        },
    });

    const handleChangePage = useCallback((event: object, page: number) => {
        setPageInfo({
            page: page,
            perPage: perPage,
        })
    }, [page, perPage]);

    if (loading) return <div>Loading...</div>;
    const media = data.Page.media;
    const pageInfo = data.Page.pageInfo;
    const animations = media.map((data: any) => {
        return (
            <Grid item={true} key={data.id}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={data.coverImage.large}
                            title={data.title.romaji}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {data.title.romaji}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {data.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    })

    console.log(media, pageInfo);
    return (
        <Container>
            <Grid container={true} spacing={3}>
                {animations}
            </Grid>
            <Pagination
                page={pageInfo.currentPage}
                count={Math.ceil(pageInfo.total / perPage)}
                onChange={handleChangePage}
                color="primary"
            />
        </Container>
    )
}

export default withRouter(Animations);