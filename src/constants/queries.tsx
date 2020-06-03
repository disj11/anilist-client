import gql from "graphql-tag";

export const ANIMATION_LIST = gql`
    query {
        Page {
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
                genres
            }
        }
    }
`;