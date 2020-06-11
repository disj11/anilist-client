import {GenreSelect} from "../../components/atoms/select";
import React from "react";
import {Layout} from "../../templates/layout";
import {Box} from "@material-ui/core";

const Components = () => {
    return (
        <Layout>
            <Box m={3}>
                <GenreSelect/>
            </Box>
        </Layout>
    )
}

export default Components;