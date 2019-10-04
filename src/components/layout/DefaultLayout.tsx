import React, {Component} from "react";
import {Layout, Input} from 'antd';
import {Logo} from "../logo";
import './DefaultLayout.scss';

const {Header, Content, Sider} = Layout;
const { Search } = Input;
type Props = {
    onSearch?: (value: string) => void;
};

class DefaultLayout extends Component<Props> {
    render() {
        return (
            <Layout className="default-layout">
                <Header className="default-header">
                    <Logo className="logo" />
                    <Search
                        className="search"
                        placeholder="input search text"
                        onSearch={this.props.onSearch} />
                </Header>
                <Layout className="default-content-layout">
                    <Sider className="default-sidebar">
                        Filter
                    </Sider>
                    <Content className="default-content">
                        <div>{this.props.children}</div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default DefaultLayout;
