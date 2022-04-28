import React, { useState, useEffect} from "react";
import axios from "axios";
import { Trending } from "../../models/series";
import SingleContent from "../../components/SingleContent/SingleContent";
import './Title.css'
import PageHeader from "../../components/Header/PageHeader";
const base_API = "https://api.themoviedb.org/3/trending/all/day?api_key=580e60a52ac48c49cfd3ca83ce561599"



const Title = () => {
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

    </>
  );
};

export default Title;
