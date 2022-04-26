export interface Trending {
    page: number;
    results: results[];
}

export interface results {
    id: number;
    title: string;
    release_date: string;
    popularity: number;
    poster_path: string;
    media_type: string;
}


export interface Series {
    id: number;
    name: string;
    episodes: Episode[];

}

export interface Episode {
    id: string;
    air_date: string;
    crew: Crew[];
    guest_stars: GuestStars[];
    name: string;
    overview: string;
    still_path: string;
    vote_average: number;
    episode_number: number;
    season_number: number;
    duration?: number;

} 

export interface Crew {
    id: number
    job: string;
    original_name: string;
}

export interface GuestStars {
    id: number;
    original_name: string;
    profile_path: null;
    character: string;
}
