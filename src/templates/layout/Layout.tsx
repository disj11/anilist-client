import React, {FunctionComponent} from "react";
import NoSSR from "./NoSSR";
import {SiteAppBar} from "../../components/organisms/common";

const Layout: FunctionComponent<{loading?: boolean}> = ({loading, children}) => {
    return (
        <NoSSR>
            <SiteAppBar loading={loading}/>
            <main>
                {children}
            </main>
        </NoSSR>
    )
}

export default Layout;