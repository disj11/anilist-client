import gql from "graphql-tag";

export const ANIMATION_LIST = gql`
    query($page: Int = 1, $perPage: Int = 10) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total,
                perPage,
                currentPage,
                lastPage,
                hasNextPage
            },
            media {
                id
                title {
                    romaji
                    english
                    native
                },
                coverImage {
                    extraLarge,
                    large,
                    medium
                },
                genres,
                description
            }
        }
    }
`;