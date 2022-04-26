import { Series } from "./series";

export interface TV {
    id: number;
    name: string;
    number_of_seasons: number;
    number_of_episodes: number;
    seasons: Series[];

}