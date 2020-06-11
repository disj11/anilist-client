export interface MediaData {
    Page: Page;
}

export interface TrendData {
    trending: {media: Array<Media>}
    season: {media: Array<Media>}
    nextSeason: {media: Array<Media>}
    popular: {media: Array<Media>}
    top: {media: Array<Media>}
}

interface Page {
    pageInfo: PageInfo;
    media: Array<Media>;
}

interface PageInfo {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
}

export interface Media {
    averageScore?: number;
    coverImage: CoverImage;
    genres: Array<string>;
    id: number;
    title: Title;
    description?: string;
}

interface CoverImage {
    extraLarge?: string;
    large: string;
}

interface Title {
    userPreferred: string;
}