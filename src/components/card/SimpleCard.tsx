import React from "react";
import {Card} from "antd";
import {Link} from "react-router-dom";

const SimpleCard = ({id, title, coverImage, genres}: any) => {
    const {Meta} = Card;

    return <Link to={`/details/${id}`}>
        <Card hoverable
              style={{width: 240, display: "inline-block", margin: 10}}
              cover={<img style={{width: 240, height: 340}} alt={title} src={coverImage} />}>
            <Meta title={title} description={genres.join(' / ').substr(0, 25)} />
        </Card>
    </Link>
};

export default SimpleCard;
