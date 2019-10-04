import React, {Component} from "react";

class Logo extends Component<{className?: string}> {
    render() {
        return (
            <div className={this.props.className || ''} style={{
                width: '200px',
                color: 'white',
                fontSize: '2em'
            }}>Anilist</div>
        );
    }
};

export default Logo;
