import React, {Component} from 'react';
import {AnimationList} from "../../modules";

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
        this.setState({
            page: current,
            perPage: pageSize
        })
    };

    render() {
        return <AnimationList
            page={this.state.page}
            pageSize={this.state.perPage}
            onChange={this.onShowSizeChange}
        />
    }
}

export default Home;
