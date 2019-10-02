import React, {Component} from "react";
import {Layout} from 'antd';
import {Logo} from "../logo";
import './DefaultLayout.scss';

const {Header, Content, Sider} = Layout;

class DefaultLayout extends Component {
    render() {
        return (
            <Layout className="default-layout">
                <Header className="default-header"><Logo/></Header>
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
