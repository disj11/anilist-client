import React, {FunctionComponent} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

const MainLayout: FunctionComponent = ({children}) => {
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth={"lg"}>
            {children}
        </Container>
    )
}

export default MainLayout;