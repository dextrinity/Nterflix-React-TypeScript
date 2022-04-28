

export interface MovieModel {
    id: number;
    name: string;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_count: number;
    vote_average: number;
    tagline: string;
    backdrop_path: string;
    genres: Genres[];

}

export interface Genres {
    id: number;
    name: string;
}

export interface Credit {
    id: number;
    cast: Cast[];
    crew: Crew[];
}

export interface Cast {
    id: number;
    name: string;
    profile_path: string;
    character: string;
}

export interface Crew {
    id: number;
    job: string;
    name: string;
    profile_path: string;
}