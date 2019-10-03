import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {ANIMATION_LIST} from "../queries/queries";
import {DefaultLayout} from "../components/layout";
import {FullScreenSpin} from "../components/spin";
import {SimpleCard} from "../components/card";
import {Pagination, Select} from "antd";
const {Option} = Select;

type Props = {
    page: number;
    pageSize: number;
    sort?: string;
    onPageChange: (page: number, pageSize?: number) => void;
    onSortChange: (sort: string) => void;
}

const AnimationList = ({page, pageSize, sort, onPageChange, onSortChange}: Props) => {
    const sortString = sort || 'UPDATED_AT_DESC';
    const { loading, error, data } = useQuery(ANIMATION_LIST, {
        variables: {
            page: page,
            perPage: pageSize,
            sort: sortString
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

    const handleChange = (value: string) => {
        onSortChange(value);
    };

    return <DefaultLayout>
        <div style={{padding: 10, fontSize: '1.5em', marginBottom: 10}}>Total of {pageInfo.total}</div>
        <div style={{marginBottom: 10, marginLeft: 10}}>
            <Pagination
                showSizeChanger
                onShowSizeChange={onPageChange}
                defaultCurrent={page}
                defaultPageSize={pageSize}
                onChange={onPageChange}
                total={pageInfo.total}
                style={{float: "left"}}
            />
            <Select defaultValue={sortString} style={{ width: 160, float: "right" }} onChange={handleChange}>
                <Option value="UPDATED_AT_DESC">Updated at</Option>
                <Option value="TRENDING_DESC">Trending</Option>
                <Option value="FAVOURITES_DESC">Favourites</Option>
                <Option value="SCORE_DESC">Score</Option>
            </Select>
        </div>
        <div style={{clear:"both"}}></div>
        {render}
        <div style={{marginTop: 10, marginLeft: 10}}>
            <Pagination
                showSizeChanger
                onShowSizeChange={onPageChange}
                defaultCurrent={page}
                defaultPageSize={pageSize}
                onChange={onPageChange}
                total={pageInfo.total}
            />
        </div>
    </DefaultLayout>;
};

export default AnimationList;
