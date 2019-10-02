import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {Route, HashRouter} from 'react-router-dom';
import client from './AnilistClient';
import {Home} from "./pages/home";
import {Detail} from "./pages/detail";
import 'antd/dist/antd.css';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <HashRouter>
                <Route exact={true} path={"/"} component={Home} />
                <Route path={"/details/:id"} component={Detail} />
            </HashRouter>
        </ApolloProvider>
    );
}

export default App;
