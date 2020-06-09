export interface GenresData {
    genres: Array<string>;
    tags: Array<Tag>;
}

interface Tag {
    name: string;
    description: string;
    category: string;
    isAdult: boolean;
}