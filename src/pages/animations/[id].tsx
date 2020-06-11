import React, {FunctionComponent} from "react";
import {Layout} from "../../templates/layout";
import {useQuery} from "@apollo/react-hooks";
import {MEDIA} from "../../constants/queries";
import {Media} from "../../models";
import {GetServerSideProps} from "next";
import {Container, Paper} from "@material-ui/core";
import {Image} from "../../components/atoms/Image";
import {makeStyles} from "@material-ui/core/styles";

interface Props {
    id: number;
}

const useStyles = makeStyles(theme => ({
    banner: {
        height: 340,
    },
    box: {
        backgroundColor: "white",
        position: "relative",
        top: -100,
    }
}));

const AnimationDetail: FunctionComponent<Props> = ({id}) => {
    const classes = useStyles();
    const {loading, data} = useQuery<{ Media: Media }>(MEDIA, {
        variables: {
            id: id,
        }
    });

    const media = data?.Media;
    return (
        <Layout loading={loading}>
            <Paper square>
                <Image
                    className={classes.banner}
                    image={media?.coverImage.extraLarge}
                    title={media?.title.userPreferred}
                />
            </Paper>
            <Container className={classes.box} maxWidth={"lg"}>
                {media?.title.userPreferred}
            </Container>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {id} = ctx.query;
    return {
        props: {
            id: id
        }
    }
}

export default AnimationDetail;