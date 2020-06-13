import React, {FunctionComponent} from "react";
import {Layout} from "../../templates/layout";
import {useQuery} from "@apollo/react-hooks";
import {MEDIA} from "../../constants/queries";
import {Media} from "../../models";
import {GetServerSideProps} from "next";
import {Box, Chip, Container, Paper, Typography} from "@material-ui/core";
import {Image} from "../../components/atoms/Image";
import {makeStyles} from "@material-ui/core/styles";
import {Rating} from "@material-ui/lab";
import {blueGrey} from "@material-ui/core/colors";

interface Props {
    id: number;
}

const useStyles = makeStyles(theme => ({
    bannerWrap: {
        backgroundColor: blueGrey[800],
        height: 340,
    },
    banner: {
        height: 340,
    },
    container: {
        backgroundColor: "white",
        position: "relative",
        top: -150,
        padding: 0,
    },
    main: {
        display: "flex",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
        },
    },
    title: {
      marginTop: theme.spacing(),
      marginBottom: theme.spacing(3),
    },
    imageBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: blueGrey[800],
    },
    image: {
        width: 240,
    },
    genre: {
        marginRight: 3,
        marginBottom: 3,
    },
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
            <Paper className={classes.bannerWrap} square>
                {media?.bannerImage && <Image
                    className={classes.banner}
                    image={media?.bannerImage}
                    title={media?.title.userPreferred}
                />}
            </Paper>
            {media && <Container className={classes.container} maxWidth={"lg"}>
                <Box className={classes.main}>
                    <Box className={classes.imageBox}>
                        <Image
                            className={classes.image}
                            image={media?.coverImage.large}
                            title={media?.title.userPreferred}
                        />
                    </Box>
                    <Box p={3} display={"flex"} flexDirection={"column"}>
                        <Box flex={1}>
                            <Typography variant={"h6"}>{media?.format} | episodes {media?.episodes} | {media?.status}</Typography>
                            <Typography className={classes.title} variant={"h4"}>{media?.title.userPreferred}</Typography>
                            <Rating name="read-only" size="large"
                                    value={media?.averageScore ? media?.averageScore / 20 : 0} readOnly/>
                        </Box>
                        <Box>
                            <Box>
                                {media?.genres.map(genre => {
                                    return <Chip
                                        className={classes.genre}
                                        key={genre}
                                        size="small"
                                        label={genre}
                                    />
                                })}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>}
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