import ReactStars from "react-rating-stars-component";
import React from "react";
import { MovieModel } from "../../../models/movie";
import "./Movie.scss";
import apiConfig from "../../../apis/apiConfig";
import CastList from "./CastList";

// import DefaulImage from './DefaultImage.jpeg';

// const GUESTIMG_URL = "https://www.themoviedb.org/t/p/w276_and_h350_face/";
// const defaulmage = "https://i1.wp.com/www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg?ssl=1"

interface MovieProps {
  movieOverview: MovieModel;
}

const Movie = (props: MovieProps) => {
  const {
    name,
    title,
    genres,
    id,
    poster_path,
    release_date,
    overview,
    vote_average,
    backdrop_path,
  } = props.movieOverview;

  const rateVote = (vote_average / 10) * 5;

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${apiConfig.originalImage(
            backdrop_path || poster_path
          )})`,
        }}
      ></div>
      <div className="mb-3 movie-content container">
        <div className="movie-content__poster">
          <div
            className="movie-content__poster__img"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                poster_path || backdrop_path
              )})`,
            }}
          ></div>
        </div>
        <div className="movie-content__info">
          <h1 className="title">{title || name}</h1>
          <div className="genres">
            {genres &&
              genres.slice(0, 5).map((genre, i) => (
                <span key={i} className="genres__item">
                  {genre.name}
                </span>
              ))}
         
          </div>
          <ReactStars
              count={5}
              value={rateVote}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#F4C243"
            />
          <p className="overview">{overview}</p>
          
          <div className="cast">
            <div className="section__header">
              <h2>Casts</h2>
            </div>
            <CastList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
