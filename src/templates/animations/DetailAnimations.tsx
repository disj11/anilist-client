import React, {FunctionComponent} from "react";
import {Grid} from "@material-ui/core";
import {Media} from "../../models";
import {DetailAnimationCard} from "../../components/organisms/card";

interface Props {
    list: Array<Media>;
}

const DetailAnimations: FunctionComponent<Props> = ({list}) => {
    return (
        <>
            {list.length > 0 && <Grid container spacing={4}>
                {list.map((media) => {
                    return (
                        <Grid item key={media.id} sm={12} md={6}>
                            <DetailAnimationCard media={media}/>
                        </Grid>
                    )
                })}
            </Grid>}
        </>
    )
}

export default DetailAnimations;