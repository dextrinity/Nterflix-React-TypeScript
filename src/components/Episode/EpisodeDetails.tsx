
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RecordWithTtl } from "dns";
import React from "react";
import { Episode } from "../../models/series";
import "./EpisodeDetails.css";
import EpisodeOverview from "./EpisodeOverview";

const IMG_URL = "https://image.tmdb.org/t/p/w227_and_h127_bestv2";
const BIGIMG_URL = "https://www.themoviedb.org/t/p/original";

interface EpisodeProps {
  epDetails: Episode;
  handleOverviewClick: (episode: Episode) => unknown;
}

const EpisodeDetails = (props: EpisodeProps) => {
  const { name, still_path, id, air_date, vote_average, crew, duration } = props.epDetails;
  const rateVote = (vote_average / 10) * 5;

  const handleOverview = (event: React.MouseEvent) => {
    event.preventDefault();
    props.handleOverviewClick(props.epDetails)
    
  };

  return (
    <div className="frame">
      <img
        id={"image" + id}
        className="image1"
        onClick = {handleOverview}
        src={IMG_URL + still_path}
        alt={name}
      ></img>
      <p id={"title" + id} className="title">
        {name}
      </p>
      <p className="minutes">{air_date}</p>
      <p className="rate">{rateVote.toFixed(1)}
      
          <FontAwesomeIcon className="checked" icon={faStar}></FontAwesomeIcon>
         
      </p>
    </div>


  );
};





export default EpisodeDetails;
