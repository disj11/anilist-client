import React, {FunctionComponent} from "react";
import {Grid} from "@material-ui/core";
import {Media} from "../../models";
import {SimpleAnimationCard} from "../../components/organisms/card";

interface Props {
    list: Array<Media>;
}

const SimpleAnimations: FunctionComponent<Props> = ({list}) => {
    return (
        <>
            {list.length > 0 && <Grid container spacing={4}>
                {list.map((media) => {
                    return (
                        <Grid item key={media.id} xs={6} sm={3} md={2}>
                            <SimpleAnimationCard media={media}/>
                        </Grid>
                    )
                })}
            </Grid>}
        </>
    )
}

export default SimpleAnimations;