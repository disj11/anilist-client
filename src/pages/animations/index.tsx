import React from "react";
import {withRouter} from "next/router";
import {WithRouterProps} from "next/dist/client/with-router";
import {useQuery} from "@apollo/react-hooks";
import {ANIMATION_LIST} from "../../constants/queries";
import {CircularProgress} from "@material-ui/core";

const Animations = ({router}: WithRouterProps) => {
    const pageNum = Number(router.query.page) || 1;
    const {loading, error, data} = useQuery(ANIMATION_LIST);

    if (loading) return <CircularProgress />
    if (data) {
        console.log(data);
    }

    return (
        <div>{pageNum}</div>
    )
}

export default withRouter(Animations);