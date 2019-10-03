import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {ANIMATION_LIST} from "../queries/queries";
import {DefaultLayout} from "../components/layout";
import {FullScreenSpin} from "../components/spin";
import {SimpleCard} from "../components/card";
import {Pagination} from "antd";

type Props = {
    page: number;
    pageSize: number;
    onChange: (page: number, pageSize?: number) => void;
}

const AnimationList = ({page, pageSize, onChange}: Props) => {
    const { loading, error, data } = useQuery(ANIMATION_LIST, {
        variables: {
            page: page,
            perPage: pageSize
        }
    });

    if (loading) return <DefaultLayout><FullScreenSpin/></DefaultLayout>;
    if (error) return <DefaultLayout><p>Error :(</p></DefaultLayout>;

    const pageInfo: any = data.Page.pageInfo;
    const mediaList: Array<any> = data.Page.media;

    const render = mediaList.map(media => (
        <SimpleCard key={media.id}
                    id={media.id}
                    title={media.title.romaji}
                    coverImage={media.coverImage.large}
                    genres={media.genres}
        />
    ));

    return <DefaultLayout>
        <div style={{padding: 10}}>Total of {pageInfo.total}</div>
        {render}
        <div style={{marginTop: 10, marginLeft: 10}}>
            <Pagination
                showSizeChanger
                onShowSizeChange={onChange}
                defaultCurrent={page}
                defaultPageSize={pageSize}
                onChange={onChange}
                total={pageInfo.total}
            />
        </div>
    </DefaultLayout>;
};

export default AnimationList;
