import {AppearTransition} from "../../components/atoms/transition";
import React, {FunctionComponent} from "react";
import {TrendData} from "../../models";
import SimpleTrendAnimations from "./SimpleTrendAnimations";
import DetailTrendAnimations from "./DetailTrendAnimations";
import {ViewMode} from "../../constants/ViewMode";

interface Props {
    data: TrendData;
    viewMode: ViewMode;
}

const AppearTrendAnimations: FunctionComponent<Props> = ({data, viewMode}) => {
    return (
        <React.Fragment>
            <AppearTransition transitionIn={viewMode === ViewMode.SIMPLE}>
                {viewMode === ViewMode.SIMPLE && <SimpleTrendAnimations data={data}/>}
            </AppearTransition>
            <AppearTransition transitionIn={viewMode === ViewMode.DETAIL}>
                {viewMode === ViewMode.DETAIL && <DetailTrendAnimations data={data}/>}
            </AppearTransition>
        </React.Fragment>
    )
}

export default AppearTrendAnimations;