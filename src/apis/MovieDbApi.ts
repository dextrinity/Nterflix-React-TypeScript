import axios from "axios"
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "580e60a52ac48c49cfd3ca83ce561599";

export function getMovie(movieId:number) {
    return axios({
      method: 'get',
      url: `${BASE_URL}/movie/${movieId}`,
      params: {
          "api_key": API_KEY
      }
    });
  }


  export function getTV(tvId:number) {
    return axios({
      method: 'get',
      url: `${BASE_URL}/tv/${tvId}`,
      params: {
        "api_key": API_KEY
    }
    });
  }

  export function getSeason(tvId:number, seasonNumber:number) {
    return axios({
      method: 'get',
      url: `${BASE_URL}/tv/${tvId}/season/${seasonNumber}`,
      params: {
          "api_key": API_KEY
      }
    });
  }

  export function getMovieCredit(movieId:number) {
    return axios({
      method: 'get',
      url: `${BASE_URL}/movie/${movieId}/credits`,
      params: {
        "api_key": API_KEY
    }
    });
  }

  export function getTVCredit(movieId:number) {
    return axios({
      method: 'get',
      url: `${BASE_URL}/tv/${movieId}`,
      params: {
        "api_key": API_KEY
    }
    });
  }