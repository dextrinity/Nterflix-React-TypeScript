import React from "react";
import { results } from "../../models/series";
import "./SingleContent.css";
import { useNavigate } from 'react-router-dom'

const IMG_URL = "https://www.themoviedb.org/t/p/w440_and_h660_face/";

interface ContentProps {
  trendingDetails: results;
}

const SingleContent = (props: ContentProps) => {
  const { id, title, release_date, poster_path, media_type } =
    props.trendingDetails;

  const getTrending = (
    event: React.MouseEvent,
    id: number,
    media_type: string
  ) => {
    if (media_type === "tv") {
      // getTV(id).then((response) => {
      //   console.log(response.data);
      // });
      history(`/tv/${id}`);
    } else {
      // getMovie(id).then((response) => {
        history(`/movie/${id}`)
      // });
    }
    console.log(id);
    console.log(media_type);
  };


  let history = useNavigate();


  return (
    <div className="trending-main">
      <img
        onClick={(event) => getTrending(event, id, media_type)}
        id={"image" + id}
        className="poster"
        src={IMG_URL + poster_path}
        alt={title}
      ></img>
      <b className="title">{title}</b>
      <span className="underTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="underTitle">{release_date}</span>
      </span>
    </div>
  );
};
export default SingleContent;
