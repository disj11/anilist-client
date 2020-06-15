import React, {FunctionComponent} from "react";
import {default as MaterialImage} from "material-ui-image";

interface Props {
    src: string;
    aspectRatio?: number;
    imageStyle?: object;
}

const Image: FunctionComponent<Props> = ({src, aspectRatio, imageStyle}) => {
    return (
        <MaterialImage
            src={src}
            aspectRatio={aspectRatio || 1}
            imageStyle={imageStyle}
        />
    )
}

export default Image;