import gql from "graphql-tag";

export const ANIMATION_LIST = gql`
    query ($page: Int, $perPage: Int, $isAdult: Boolean, $sort: MediaSort){
        Page(page:$page, perPage:$perPage) {
            pageInfo{
                total,
                perPage,
                currentPage,
                lastPage,
                hasNextPage
            },
            media(isAdult: $isAdult, sort: [$sort]) {
                id
                title{
                    romaji
                    english
                    native
                },
                coverImage{
                    extraLarge,
                    large,
                    medium
                },
                genres
            }
        }
    }
`;
