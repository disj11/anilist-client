import React, {useCallback} from "react";
import {useQuery} from "@apollo/react-hooks";
import {TREND} from "../constants/queries";
import {Layout} from "../templates/layout";
import {DateUtils} from "../utils/DateUtils";
import {TrendData} from "../models";
import MainLayout from "../templates/layout/MainLayout";
import {AppearTrendAnimations} from "../templates/animations";
import {ViewModeSelect} from "../components/molecules/select";
import {Box} from "@material-ui/core";
import {ViewMode} from "../constants/ViewMode";

const Trend = () => {
    const [viewMode, setViewMode] = React.useState(ViewMode.DETAIL);
    const handleViewChange = useCallback((viewMode: ViewMode) => {
        console.log(viewMode);
        setViewMode(viewMode);
    }, []);

    const {loading, error, data} = useQuery<TrendData>(TREND, {
        variables: {
            season: DateUtils.getSeason(),
            seasonYear: DateUtils.getSeasonYear(),
            nextSeason: DateUtils.getNextSeason(),
            nextYear: DateUtils.getNextSeasonYear(),
        },
    });

    return (
        <Layout loading={loading}>
            <MainLayout>
                {data && <React.Fragment>
                    <Box display={"flex"} justifyContent={"flex-end"} mb={1}>
                        <ViewModeSelect selected={viewMode} onChange={handleViewChange}/>
                    </Box>
                    <AppearTrendAnimations data={data} viewMode={viewMode}/>
                </React.Fragment>}
            </MainLayout>
        </Layout>
    )
}

export default Trend;