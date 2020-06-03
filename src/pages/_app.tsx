import {AppProps} from "next/app";
import React from "react";
import {ApolloProvider} from "@apollo/react-common";
import {client} from "../clients";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp;