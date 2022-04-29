import React, { useState, useEffect } from "react";

import Movie from "./Movie";

import { useParams } from "react-router-dom";
import { getMovie } from "../../../apis/MovieDbApi";
import { MovieModel } from "../../../models/movie";

const MovieList = () => {
  let { movieId } = useParams();

  const [post, setPost] = useState<MovieModel>();

  useEffect(() => {
    getMovie(+movieId).then((response) => {
      const movieData: MovieModel = response.data;
      setPost(movieData);
      console.log(movieData);
    });
  }, [movieId]);

  return (
    <div className="main-frame">
        {post && <Movie movieOverview={post} />
    }</div>
  );
};

export default MovieList;
