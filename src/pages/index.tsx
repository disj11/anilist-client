import React, {useCallback} from "react";
import {useQuery} from "@apollo/react-hooks";
import {TREND} from "../constants/queries";
import {Layout} from "../templates/layout";
import {DateUtils} from "../utils/DateUtils";
import {TrendData} from "../models";
import {AppearTrendAnimations} from "../templates/animations";
import {ViewModeSelect} from "../components/molecules/select";
import {Box} from "@material-ui/core";
import {ViewMode} from "../constants/ViewMode";

const Trend = () => {
    const [viewMode, setViewMode] = React.useState(ViewMode.DETAIL);
    const handleViewChange = useCallback((viewMode: ViewMode) => {
        setViewMode(viewMode);
    }, []);

    const {loading, data} = useQuery<TrendData>(TREND, {
        variables: {
            season: DateUtils.getSeason(),
            seasonYear: DateUtils.getSeasonYear(),
            nextSeason: DateUtils.getNextSeason(),
            nextYear: DateUtils.getNextSeasonYear(),
        },
    });

    return (
        <Layout loading={loading} maxWidth={"lg"}>
            <Box p={3}>
                <Box display={"flex"} justifyContent={"flex-end"} mb={1}>
                    <ViewModeSelect selected={viewMode} onChange={handleViewChange}/>
                </Box>
                <AppearTrendAnimations data={data} viewMode={viewMode}/>
            </Box>
        </Layout>
    )
}

export default Trend;