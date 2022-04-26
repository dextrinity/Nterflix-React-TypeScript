import React, { useEffect } from 'react';
import { getMovie} from "../../../apis/MovieDbApi";
import { Movie } from '../../../models/movie';
import { useParams } from "react-router-dom";


const MovieList = () => {
    
    let { movieId } = useParams();

useEffect(() => {
    getMovie(+movieId).then((response) => {
        const movieData: Movie = response.data;
        console.log(movieData)
    })
}, [movieId]);




}

export default MovieList;