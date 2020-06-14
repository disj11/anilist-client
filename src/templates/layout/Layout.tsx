import React, {FunctionComponent} from "react";
import NoSSR from "./NoSSR";
import {SiteAppBar} from "../../components/organisms/common";
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

interface Props {
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    loading?: boolean;
}

const Layout: FunctionComponent<Props> = ({loading, maxWidth, children}) => {
    const classes = useStyles();
    return (
        <NoSSR>
            <SiteAppBar loading={loading}/>
            <Container className={classes.container} maxWidth={maxWidth}>
                {children}
            </Container>
        </NoSSR>
    )
}

export default Layout;