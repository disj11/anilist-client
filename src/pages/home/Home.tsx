import React, {Component} from 'react';
import {AnimationList} from "../../modules";

type Props = {};
type State = {
    page: number;
    pageSize: number;
    sort?: string;
    search?: string;
}

class Home extends Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            page: 1,
            pageSize: 10
        };
    }

    onPageChange = (current: number, pageSize: number = this.state.pageSize) => {
        this.setState({
            page: current,
            pageSize: pageSize
        });
    };

    onSortChange = (sort: string) => {
        this.setState({
            sort: sort
        });
    };

    onSearch = (value: string) => {
        this.setState({
            page: 1,
            search: value
        });
    };

    render() {
        return <AnimationList
            page={this.state.page}
            pageSize={this.state.pageSize}
            sort={this.state.sort}
            search={this.state.search}
            onPageChange={this.onPageChange}
            onSortChange={this.onSortChange}
            onSearch={this.onSearch}
        />
    }
}

export default Home;
