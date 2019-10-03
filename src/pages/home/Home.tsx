import React, {Component} from 'react';
import {AnimationList} from "../../modules";

type Props = {};
type State = {
    page: number;
    pageSize: number;
    sort: string;
}

class Home extends Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            page: 1,
            pageSize: 10,
            sort: ''
        };
    }

    onPageChange = (current: number, pageSize: number = this.state.pageSize) => {
        this.setState({
            page: current,
            pageSize: pageSize,
            sort: this.state.sort
        })
    };

    onSortChange = (sort: string) => {
        this.setState({
            page: this.state.page,
            pageSize: this.state.pageSize,
            sort: sort
        });
    };

    render() {
        return <AnimationList
            page={this.state.page}
            pageSize={this.state.pageSize}
            sort={this.state.sort}
            onPageChange={this.onPageChange}
            onSortChange={this.onSortChange}
        />
    }
}

export default Home;
