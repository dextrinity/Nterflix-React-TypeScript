import React from 'react';
import './App.scss';
// import EpisodeList from './components/ListofMovies/Episode/EpisodeList';
import HeaderContent from "./components/Header/HeaderContent";
// import SimpleBottomNavigation from './components/BottomNavigation/MainNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Trending from './Pages/Trending/TrendingPage';
import TVShows from './Pages/TVShows/TVShows';
import Movies from './Pages/Movies/MoviePage';
import EpisodeList from './components/ListofMovies/Episode/EpisodeList';
import MovieList from './components/ListofMovies/Movie/MovieList';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderContent />

        
          <div className="container">
      
          <Routes>
            <Route path='/' element={<Trending />} />
            <Route path='/movies' element={<Movies />}/>
            <Route path='/tvshows' element={<TVShows />}/>
            {/* <Route path='/search' element={<Search />}/> */}
            <Route path='/tvshows/:tvId' element={<EpisodeList />}/>
            <Route path='/movies/:movieId' element={<MovieList />}/>
          </Routes>
        
        </div>

    {/* <SimpleBottomNavigation /> */}
    {/* </div> */}
    </BrowserRouter>
    </div>

  );
}

export default App;
