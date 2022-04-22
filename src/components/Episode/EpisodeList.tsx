import React, { useState, useEffect } from "react";
import axios from "axios";
import { Episode, Series } from "../../models/series";
import EpisodeDetails from "./EpisodeDetails";
import "./EpisodeList.css";
import EpisodeOverview from "./EpisodeOverview";

const base_API =
  "https://api.themoviedb.org/3/tv/110492-peacemaker/season/1?api_key=580e60a52ac48c49cfd3ca83ce561599";

const EpisodeList = () => {
  const [post, setPost] = useState<Series>();
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>();

  useEffect(() => {
    axios.get(base_API).then((response) => {
      const postData: Series = response.data;
      

      // const duration = [47, 41, 40, 47, 43, 47, 39, 45]
      // let episodeData = postData.episodes.map((episode) => {
      //   return {...postData, duration}
      // })
      // console.log(episodeData)
      // postData.episodes = episodeData;
      setPost(postData);
      console.log(postData);
    });
  }, []);

  const handleOverviewClick = (episode: Episode) => {
    setSelectedEpisode(episode);
  }


  return (
    <div>
      <div className="story-container">
        {post?.episodes.map((ep) => (
          <EpisodeDetails key={ep.id} epDetails={ep} handleOverviewClick={handleOverviewClick} />
        ))}
      </div>
      {/* <div className="section">
        {post?.episodes.map((epView) => (
          <EpisodeOverview key={epView.id} overview={epView} />
        ))}
      </div> */}
      {selectedEpisode && <EpisodeOverview key={selectedEpisode.id} overview={selectedEpisode} />}
    </div>
  );
};

export default EpisodeList;
