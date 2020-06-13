import {Transition} from "react-transition-group";
import React, {FunctionComponent} from "react";
import {Box} from "@material-ui/core";
import "./AppearTransition.css";

interface Props {
    transitionIn: boolean;
}

const AppearTransition: FunctionComponent<Props> = ({children, transitionIn}) => {
    return (
        <Transition timeout={3000} in={transitionIn} appear>
            {status => (
                <Box className={`transition-box transition-box-${status}`}>
                    {children}
                </Box>
            )}
        </Transition>
    )
}

export default AppearTransition;