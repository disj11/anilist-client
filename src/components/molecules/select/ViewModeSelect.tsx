import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import React, {FunctionComponent} from "react";
import {ViewMode} from "../../../constants/ViewMode";
import {Button, ButtonGroup} from "@material-ui/core";

interface Props {
    selected: ViewMode;
    onChange: (viewMode: ViewMode) => void;
}

const ViewModeSelect: FunctionComponent<Props> = ({selected, onChange}) => {
    const handleViewChange = (nextView: string) => {
        onChange(nextView as ViewMode);
    }

    return (
        <ButtonGroup size={"small"}>
            <Button
                onClick={() => handleViewChange(ViewMode.DETAIL)}
                aria-label="detail"
                color={selected === ViewMode.DETAIL ? 'secondary' : 'default'}
            >
                <ViewListIcon/>
            </Button>
            <Button
                onClick={() => handleViewChange(ViewMode.SIMPLE)}
                aria-label="simple"
                color={selected === ViewMode.SIMPLE ? 'secondary' : 'default'}
            >
                <ViewModuleIcon/>
            </Button>
        </ButtonGroup>
    )
}

export default ViewModeSelect;