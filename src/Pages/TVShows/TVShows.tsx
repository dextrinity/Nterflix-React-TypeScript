import axios from "axios";
import React, { useEffect, useState } from "react";
import PageHeader from "../../components/Header/PageHeader";
import SingleContent from "../../components/SingleContent/SingleContent";
import { Trending } from "../../models/series";
const base_API = "https://api.themoviedb.org/3/trending/tv/day?api_key=580e60a52ac48c49cfd3ca83ce561599"


const TVShows = () => {
  const [content, setContent] = useState<Trending>();

  useEffect(() => {
    axios.get(base_API).then((response) => {
      const postData: Trending = response.data;
      setContent(postData);
      console.log(postData);
    });
  }, []);

  

  return ( 
    <>
    <PageHeader/>
  <div className="main-content">
    
    <div>
      <span className="pageTitle">Trending Movies</span>
    </div>
    <div className="trending">
      {content && content?.results.map((c) => <SingleContent key={c.id} trendingDetails={c}   />)}
    </div>
    </div>
  
    </>
  );
};

export default TVShows;