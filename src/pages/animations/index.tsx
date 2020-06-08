import React, {useCallback, useState} from "react";
import {withRouter} from "next/router";
import {WithRouterProps} from "next/dist/client/with-router";
import {useQuery} from "@apollo/react-hooks";
import {PAGE} from "../../constants/queries";
import {Box, Card, Container, Grid} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../../templates/layout/Layout";
import {Pagination} from "@material-ui/lab";
import {Image} from "../../components/atoms/Image";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    cardMedia: {
        height: 265,
    },
}));

const Animations = ({router}: WithRouterProps) => {
    const classes = useStyles();
    const [{page, perPage}, setPageInfo] = useState({
        page: Number(router.query.page) || 1,
        perPage: Number(router.query.perPage) || 30,
    });

    const {loading, error, data} = useQuery(PAGE, {
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
    }, []);

    const media = data?.Page?.media || [];
    const pageInfo = data?.Page?.pageInfo || {total: 0, currentPage: 1};
    const animations = media.map((data: any) => {
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
    })

    return (
        <Layout loading={loading}>
            <Container className={classes.container} maxWidth={"lg"}>
                <Grid container spacing={4}>
                    {animations}
                </Grid>
                <Box component={"div"} mt={2}>
                    <Pagination
                        page={pageInfo.currentPage}
                        count={Math.ceil(pageInfo.total / perPage)}
                        onChange={handleChangePage}
                        color="primary"
                        variant="outlined"
                        shape="rounded"
                    />
                </Box>
            </Container>
        </Layout>
    )
}

export default withRouter(Animations);