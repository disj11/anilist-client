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
    search?: string;
    onPageChange: (page: number, pageSize?: number) => void;
    onSortChange: (sort: string) => void;
    onSearch: (value: string) => void;
}

const AnimationList = ({page, pageSize, sort, search, onPageChange, onSortChange, onSearch}: Props) => {
    const sortString = sort || 'TRENDING_DESC';
    const { loading, error, data } = useQuery(ANIMATION_LIST, {
        variables: {
            page: page,
            perPage: pageSize,
            sort: sortString,
            search: search || undefined
        }
    });

    if (loading) return <DefaultLayout><FullScreenSpin/></DefaultLayout>;
    if (error) return <DefaultLayout onSearch={onSearch}><p>Error :(</p></DefaultLayout>;

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

    return <DefaultLayout onSearch={onSearch}>
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
            <Select defaultValue={sortString} style={{ width: 160, float: "right" }} onChange={onSortChange}>
                <Option value="TRENDING_DESC">Trending</Option>
                <Option value="FAVOURITES_DESC">Favourites</Option>
                <Option value="SCORE_DESC">Score</Option>
                <Option value="START_DATE_DESC">Start date</Option>
            </Select>
        </div>
        <div style={{clear:"both"}} />
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
