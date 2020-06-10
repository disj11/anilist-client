import React, {FunctionComponent} from "react";
import {AppBar, LinearProgress, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: "Background",
    }
}));

const Layout: FunctionComponent<{loading?: boolean}> = ({loading, children}) => {
    return (
        <React.Fragment>
            <AppBar position={"sticky"}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Anime
                    </Typography>
                </Toolbar>
                {loading && <LinearProgress color={"secondary"}/>}
            </AppBar>
            <main>
                {children}
            </main>
        </React.Fragment>
    )
}

export default Layout;