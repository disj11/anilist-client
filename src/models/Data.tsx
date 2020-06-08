export default interface Data {
    Page: Page;
}

export interface Page {
    pageInfo: PageInfo;
    media: Array<Media>;
}

export interface PageInfo {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
}

export interface Media {
    averageScore: number;
    coverImage: CoverImage;
    genres: Array<string>;
    id: number;
    title: Title;
}

export interface CoverImage {
    large: string;
}

export interface Title {
    userPreferred: string;
}