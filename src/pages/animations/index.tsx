import React, {useCallback, useState} from "react";
import {withRouter} from "next/router";
import {WithRouterProps} from "next/dist/client/with-router";
import {useQuery} from "@apollo/react-hooks";
import {PAGE} from "../../constants/queries";
import {Box, Container} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Layout from "../../templates/layout/Layout";
import {Pagination} from "@material-ui/lab";
import {SimpleAnimations} from "../../templates/animations";
import {Data} from "../../models";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

const Animations = ({router}: WithRouterProps) => {
    const classes = useStyles();
    const [{page, perPage}, setPageInfo] = useState({
        page: Number(router.query.page) || 1,
        perPage: Number(router.query.perPage) || 30,
    });

    const {loading, error, data} = useQuery<Data>(PAGE, {
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

    return (
        <Layout loading={loading}>
            <Container className={classes.container} maxWidth={"lg"}>
                <SimpleAnimations media={media}/>
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