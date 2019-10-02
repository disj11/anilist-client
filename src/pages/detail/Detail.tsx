import React, {Component} from 'react';

class Detail extends Component<any, any> {
    render() {
        const {match} = this.props;
        const id = match.params.id;

        return (
            <div>Detail : {id}</div>
        );
    }
}

export default Detail;
