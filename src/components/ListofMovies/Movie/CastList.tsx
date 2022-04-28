import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import apiConfig from "../../../apis/apiConfig";
import { getMovieCredit } from "../../../apis/MovieDbApi";
import { Credit } from "../../../models/movie";
import unknown from '../../../assets/unknown.jpg'

const GUESTIMG_URL = "https://image.tmdb.org/t/p/w500/";

const CastList = () => {
  let { movieId } = useParams();

  const [post, setPost] = useState<Credit>();

  useEffect(() => {
    getMovieCredit(+movieId).then((response) => {
      const movieCredit: Credit = response.data;
      setPost(movieCredit);
      console.log(movieCredit);
    });
  }, [movieId]);

  return (
    <div className="casts">
      {post &&
        post?.cast.map((item, i) => (
          <div key={i} className="casts__item">
            <img
              id={"image" + item.id}
              className="casts__item__img"
              src={GUESTIMG_URL + item.profile_path}
              alt={item.name}
              onError={({ currentTarget }) => {
                currentTarget.src = `${unknown}`;
              }}
            ></img>
            <p className="casts__item__name">{item.name}</p>
          </div>
        ))}
    </div>
  );
};

export default CastList;
