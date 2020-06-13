import {AppearTransition} from "../../components/atoms/transition";
import {DetailAnimations, SimpleAnimations} from "./index";
import React, {FunctionComponent} from "react";
import {Media} from "../../models";
import {ViewMode} from "../../constants/ViewMode";

interface Props {
    list: Array<Media>;
    viewMode: ViewMode;
}

const AppearAnimations: FunctionComponent<Props> = ({list, viewMode}) => {
    return (
        <React.Fragment>
            <AppearTransition transitionIn={viewMode === ViewMode.SIMPLE}>
                {viewMode === ViewMode.SIMPLE && <SimpleAnimations list={list}/>}
            </AppearTransition>
            <AppearTransition transitionIn={viewMode === ViewMode.DETAIL}>
                {viewMode === ViewMode.DETAIL && <DetailAnimations list={list}/>}
            </AppearTransition>
        </React.Fragment>
    )
}

export default AppearAnimations;