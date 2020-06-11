import React, {useCallback, useState} from "react";
import {withRouter} from "next/router";
import {WithRouterProps} from "next/dist/client/with-router";
import {useQuery} from "@apollo/react-hooks";
import {PAGE} from "../../constants/queries";
import {Box, Container, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {Layout} from "../../templates/layout";
import {Pagination} from "@material-ui/lab";
import {SimpleAnimations} from "../../templates/animations";
import {Media, MediaData} from "../../models";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

interface QueryResponse {
    list: Array<Media>,
    pageInfo: PageInfo,
}

interface PageInfo {
    total: number;
    currentPage: number;
}

const Search = ({router}: WithRouterProps) => {
    const classes = useStyles();
    const {search} = router.query;

    const [{page, perPage}, setPageInfo] = useState({
        page: Number(router.query.page) || 1,
        perPage: Number(router.query.perPage) || 30,
    });

    const [{list, pageInfo}, setQueryResponse] = useState<QueryResponse>({
        list: [],
        pageInfo: {
            total: 0,
            currentPage: 1,
        }
    })

    const queryOptions: any = {
        page: page,
        perPage: perPage,
        search: search
    };
    Object.keys(queryOptions).forEach((key) => !queryOptions[key] && delete queryOptions[key]);

    const {loading} = useQuery<MediaData>(PAGE, {
        variables: queryOptions,
        fetchPolicy: "no-cache",
        onCompleted: data => {
            setQueryResponse({
                list: data.Page.media,
                pageInfo: data.Page.pageInfo,
            })
        }
    });

    const handleChangePage = useCallback((event: object, page: number) => {
        setPageInfo({
            page: page,
            perPage: perPage,
        })
    }, []);

    return (
        <Layout loading={loading}>
            <Container className={classes.container} maxWidth={"lg"}>
                {search && <Box mb={3}>
                    <Typography variant={"h5"} component={"div"}>
                        Search Results for <Typography variant={"h5"} component={"span"}
                                                       color={"primary"}>'{search}'</Typography>
                        &nbsp;({pageInfo.total})
                    </Typography>
                </Box>}
                {!loading && <SimpleAnimations list={list}/>}
                {list.length > 0 && <Box component={"div"} mt={2}>
                    <Pagination
                        page={pageInfo.currentPage}
                        count={Math.ceil(pageInfo.total / perPage)}
                        onChange={handleChangePage}
                        color="primary"
                        variant="outlined"
                        shape="rounded"
                    />
                </Box>}
            </Container>
        </Layout>
    )
}

export default withRouter(Search);