export interface Series {
    id: number;
    name: string;
    episodes: Episode[];

}

export interface Episode {
    id: number;
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
    id: number
    original_name: string;
}