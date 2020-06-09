import {gql} from "apollo-boost";

export const FRAGMENT_MEDIA = gql`
    fragment media on Media {
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
`