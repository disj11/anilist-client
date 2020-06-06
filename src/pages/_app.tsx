import {AppProps} from "next/app";
import React from "react";
import {ApolloProvider} from "@apollo/react-common";
import {client} from "../clients";
import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme";
import {CssBaseline} from "@material-ui/core";
import Head from "next/head";

const MyApp = ({Component, pageProps}: AppProps) => {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentElement) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </ApolloProvider>
        </React.Fragment>
    );
}

export default MyApp;