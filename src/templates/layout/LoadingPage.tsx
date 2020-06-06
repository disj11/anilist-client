import Layout from "./Layout";
import React from "react";
import {LinearProgress} from "@material-ui/core";

const LoadingPage = () => {
    return (
        <Layout>
            <LinearProgress color={"secondary"} />
        </Layout>
    )
}

export default LoadingPage;