
import ReactStars from "react-rating-stars-component";
import React, { useState } from "react";
import { Episode } from "../../../models/series";
import "./EpisodeOverview.css";
// import DefaulImage from './DefaultImage.jpeg';
const BIGIMG_URL = "https://www.themoviedb.org/t/p/original";
const GUESTIMG_URL = "https://www.themoviedb.org/t/p/w276_and_h350_face/";
const defaulmage = "https://i1.wp.com/www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg?ssl=1"

interface OverviewProps {
  overview: Episode;
}

const EpisodeOverview = (props: OverviewProps) => {
  const {
    name,
    id,
    still_path,
    season_number,
    episode_number,
    air_date,
    overview,
    crew,
    guest_stars,
    vote_average,
  } = props.overview;



  const director = crew.find((c) => c.job === "Director");
  const writer = crew.find((c) => c.job === "Writer");
  const guest = guest_stars.map((c) => (
    <div className="overAllGuest">
    <div className="guestContent">
      <img
        className="guestImage"
        src={GUESTIMG_URL + c.profile_path}
        alt={c.original_name} onError={({ currentTarget }) => {
          currentTarget.src=`${defaulmage}`
        }}
      ></img>
      <div className="guestDetails"></div>
      <div className="charName">
      <p className="orignalName" key={c.original_name}>{c.original_name.split(" ")[0] + " " + c.original_name.split(" ")[1]}</p>
      <p className="character"key={c.character}>"{c.character.split(" ")[0]}"</p>
      </div>
    </div>
    </div>
  ));


  const rateVote = (vote_average / 10) * 5;

  const [expanded, setExpanded] = useState(false);
  const dataForDisplay = expanded ? guest : guest.slice(0, 8);

  return (
    <div>
    <div className="frame2">
      <img
        id={"bigimage" + id}
        className="image2"
        src={BIGIMG_URL + still_path}
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
        <p className="spacer2">Season {season_number}</p>
        <p className="spacer2">Episode {episode_number}</p>
        <p className="spacer2">{air_date}</p>
      </div>
      <div>
        <p className="overview">{overview}</p>
      </div>
      <div className="member">
        <div id={"crew" + id} className="crew">
          <div id={"director" + id} className="directors"></div>
          <p className="titleColor">Directed By</p>
          <p>{director.original_name}</p>
          <div id={"writer" + id} className="writer"></div>
          <p className="titleColor">Written By</p>
          <p>{writer.original_name}</p>
        </div>
      </div>
    
          <div className="main-div">
            
            {dataForDisplay.map((event, index) => (
              <div key={index} className="child-div">
                {event}
            
              </div>
              
              
            ))}
        

            </div>
            <div className="fullCast" onClick={() => setExpanded(!expanded)}>
              {expanded ? "Show Less" : "Show More"}
            </div>
            </div>
    </div>
    
  );
};

export default EpisodeOverview;
