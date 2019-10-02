import React, {Component} from 'react';
import {Query} from '@apollo/react-components';
import {ANIMATION_LIST} from "../../queries/queries";
import {SimpleCard} from "../../components/card";
import {FullScreenSpin} from "../../components/spin";
import {DefaultLayout} from "../../components/layout";
import {Pagination} from 'antd';

type Props = {};
type State = {
    page: number;
    perPage: number;
}

class Home extends Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            page: 1,
            perPage: 10
        };
    }

    onShowSizeChange = (current: number, pageSize: number = this.state.perPage) => {
        console.log(current, pageSize);
        this.setState({
            page: current,
            perPage: pageSize
        })
    };

    render() {
        return <Query
            query={ANIMATION_LIST}
            variables={{
                page: this.state.page,
                perPage: this.state.perPage
            }}>
            {({loading, data, error}: any) => {
                if (loading) return <DefaultLayout><FullScreenSpin/></DefaultLayout>;
                if (error) return <DefaultLayout><p>Error :(</p></DefaultLayout>;
                if (data) {
                    const pageInfo: any = data.Page.pageInfo;
                    const mediaList: Array<any> = data.Page.media;
                    const render = mediaList.map(media => (
                        <SimpleCard key={media.id}
                                    id={media.id}
                                    title={media.title.romaji}
                                    coverImage={media.coverImage.large}
                                    genres={media.genres}
                        />
                    ));

                    return <DefaultLayout>
                        <div style={{padding: 10}}>Total of {pageInfo.total}</div>
                        {render}
                        <div style={{marginTop: 10, marginLeft: 10}}>
                            <Pagination
                                showSizeChanger
                                onShowSizeChange={this.onShowSizeChange}
                                defaultCurrent={this.state.page}
                                defaultPageSize={this.state.perPage}
                                onChange={this.onShowSizeChange}
                                total={pageInfo.total}
                            />
                        </div>
                    </DefaultLayout>;
                }

                return <p>Error :(</p>;
            }}
        </Query>
    }
}

export default Home;
