import React from "react";
import {Spin} from "antd";

const FullScreenSpin = () => {
    return (<div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    }}>
        <Spin size={"large"} tip={"loading..."} />
    </div>)
};

export default FullScreenSpin;
