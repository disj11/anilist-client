import gql from "graphql-tag";

export const PAGE = gql`
query($page: Int = 1, $perPage: Int = 30) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    media {
      id
      title {
        userPreferred
      }
      genres
      averageScore
      coverImage {
        large
      }
    }
  }
}
`;