
import ReactStars from "react-rating-stars-component";
import React from "react";
import { MovieModel } from "../../../models/movie";
import "./Movie.css";
// import DefaulImage from './DefaultImage.jpeg';
const BIGIMG_URL = "https://image.tmdb.org/t/p/w500/";
// const GUESTIMG_URL = "https://www.themoviedb.org/t/p/w276_and_h350_face/";
// const defaulmage = "https://i1.wp.com/www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg?ssl=1"

interface MovieProps {
  movieOverview: MovieModel;
}

const Movie = (props: MovieProps) => {
  const {
    name,
    id,
    poster_path,
    release_date,
    overview,
    vote_average,
  } = props.movieOverview;

  const rateVote = (vote_average / 10) * 5;

  return (
    <div className="frame2">
      <img
        id={"bigimage" + id}
        className="image2"
        src={BIGIMG_URL + poster_path}
        alt={name}
      ></img>

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
      <p className="title2">{name}</p>
      <div className="status">
        <p className="spacer2">{release_date}</p>
      </div>
      <div>
        <p className="overview">{overview}</p>
      </div>
    </div>
    
  );
        }


export default Movie;
