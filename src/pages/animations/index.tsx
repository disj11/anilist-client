import React, {useCallback, useState} from "react";
import {withRouter} from "next/router";
import {WithRouterProps} from "next/dist/client/with-router";
import {useQuery} from "@apollo/react-hooks";
import {PAGE} from "../../constants/queries";
import {Box, Typography} from "@material-ui/core";
import {Layout} from "../../templates/layout";
import {Pagination, ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
import {AppearAnimations, DetailAnimations, SimpleAnimations} from "../../templates/animations";
import {Media, MediaData} from "../../models";
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import {AppearTransition} from "../../components/atoms/transition";
import MainLayout from "../../templates/layout/MainLayout";
import {ViewMode} from "../../constants/ViewMode";
import {ViewModeSelect} from "../../components/molecules/select";

interface QueryResponse {
    list: Array<Media>,
    pageInfo: PageInfo,
}

interface PageInfo {
    total: number;
    currentPage: number;
}

const Search = ({router}: WithRouterProps) => {
    const {search} = router.query;

    const [viewMode, setViewMode] = React.useState(ViewMode.DETAIL);
    const handleViewChange = useCallback((viewMode: ViewMode) => {
        setViewMode(viewMode);
    }, []);

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
    });

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
            <MainLayout>
                {!loading && search && <Box mb={1}>
                    <Typography variant={"h6"} component={"span"}>
                        Search Results for&nbsp;
                    </Typography>
                    <Typography variant={"h6"} component={"span"}
                                color={"secondary"}>
                        '{search}'
                    </Typography>
                    <Typography variant={"body1"}>
                        Total of {pageInfo.total}
                    </Typography>
                </Box>}
                {list.length > 0 && <Box display={"flex"} justifyContent={"flex-end"} mb={1}>
                    <ViewModeSelect selected={viewMode} onChange={handleViewChange}/>
                </Box>}
                {!loading && list.length === 0 && <Typography>No results found :(</Typography>}
                <AppearAnimations list={list} viewMode={viewMode}/>
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
            </MainLayout>
        </Layout>
    )
}

export default withRouter(Search);