import React, {FunctionComponent} from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

const Layout: FunctionComponent = ({children}) => {
    return (
        <React.Fragment>
            <AppBar position={"sticky"}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Anime
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {children}
            </main>
        </React.Fragment>
    )
}

export default Layout;