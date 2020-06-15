import React, {FunctionComponent} from "react";
import {SiteAppBar} from "../../components/organisms/common";
import {Box, CircularProgress, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    container: {
        padding: 0,
    },
}));

interface Props {
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    loading?: boolean;
}

const Layout: FunctionComponent<Props> = ({loading, maxWidth, children}) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <SiteAppBar/>
            <Container className={classes.container} maxWidth={maxWidth}>
                {loading ? <Box
                    p={3}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <CircularProgress />
                </Box> : children}
            </Container>
        </React.Fragment>
    )
}

export default Layout;