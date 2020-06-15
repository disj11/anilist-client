import React, {FunctionComponent} from "react";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Transition} from "react-transition-group";

const useStyles = makeStyles(() => ({
    "@keyframes appear": {
        "0%": {
            left: 100,
            opacity: 0,
        },
        "100%": {
            left: 0,
            opacity: 1,
        }
    },
    root: {
        '& > .transition-box': {
            position: "relative",
        },
        '& > .transition-box-entering': {
            animationName: "$appear",
            animationDuration: "0.3s"
        },
    },
}));

interface Props {
    transitionIn: boolean;
}

const AppearTransition: FunctionComponent<Props> = ({children, transitionIn}) => {
    const classes = useStyles();
    return (
        <Transition timeout={3000} in={transitionIn} appear>
            {status => (
                <Box className={classes.root}>
                    <Box className={`transition-box transition-box-${status}`}>
                        {children}
                    </Box>
                </Box>
            )}
        </Transition>
    )
}

export default AppearTransition;