import React, {FunctionComponent, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Skeleton} from "@material-ui/lab";

interface Props {
    className: string;
    image: string;
    title: string;
}

const useStyles = makeStyles((theme) => ({
    progress: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
}));

const Image: FunctionComponent<Props> = ({className, image, title}) => {
    const styles = useStyles();
    const [loading, setLoading] = useState(true);
    const handleImageLoad = () => {
        setLoading(false);
    }

    return (
        <>
            {loading && <div className={[className, styles.progress].join(' ')}>
                <Skeleton variant="rect" width={"100%"} height={"100%"} />
            </div>}
            <div
                className={className}
                style={{display: loading ? "none" : "block"}}
            >
                <img
                    className={styles.image}
                    src={image}
                    alt={title}
                    onLoad={handleImageLoad}
                />
            </div>
        </>
    )
}

export default Image;