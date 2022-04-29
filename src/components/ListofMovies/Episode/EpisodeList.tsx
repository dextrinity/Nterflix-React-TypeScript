import React, { useState, useEffect } from "react";

import { Episode, Series } from "../../../models/series";
import EpisodeDetails from "./EpisodeDetails";
import "./EpisodeList.css";
import EpisodeOverview from "./EpisodeOverview";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SeasonContent from "../../Title/Title";

import { useParams } from "react-router-dom";
import { getSeason, getTV } from "../../../apis/MovieDbApi";
import { TV } from "../../../models/tv";
import apiConfig from "../../../apis/apiConfig";
import Title from '../../Title/Title'



const EpisodeList = () => {
  let { tvId } = useParams();

  const [post, setPost] = useState<Series>();
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>();

  useEffect(() => {
    getTV(+tvId).then((response) => {
      const tvData: TV = response.data;
      getSeason(tvData.id, 1).then((response) => {
        const postData: Series = response.data;
        setPost(postData); 
        console.log(postData)
      });
    });
  }, [tvId]);

  const handleOverviewClick = (episode: Episode) => {
    setSelectedEpisode(episode);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="main-frame">
    <div className="bannerHeader"></div>
      <div className="content">
        <div className="episodeList">
          <Slider {...settings}>
            {post?.episodes.map((ep) => (
              <EpisodeDetails
                key={ep.id}
                epDetails={ep}
                handleOverviewClick={handleOverviewClick}
              />
            ))}
          </Slider>
        </div>
      </div>

      {selectedEpisode && (
        <EpisodeOverview key={selectedEpisode.id} overview={selectedEpisode} />
      )}
    </div>
    </>
  );
};

export default EpisodeList;
