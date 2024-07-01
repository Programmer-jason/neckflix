import { useState, useEffect} from 'react';
import './App.css';

import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=cf95c75';

const App = () => {
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

  // const movie1 = {
    
  //     "Title": "The Amazing Spiderman 2 Webb Cut",
  //     "Year": "2021",
  //     "imdbID": "tt18351128",
  //     "Type": "movie",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
  // }

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    } 

    useEffect(() => {
        searchMovies('One piece')
    }, []);

  return (
      <div className="content">
          <h1 className='title'>NyeckFlix </h1>
            <div className="searchMe">
            <input 
              type="text" 
              className='search' 
              placeholder='Seach For Movies' 
              value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}/>
            <button 
              type='button' 
              className='btn-search' 
              onClick={() => {searchMovies(searchTerm)}}>Search
            </button>
          </div>
        

        {
          movies.length > 0 ? (
            <div className="content-two">
              {movies.map((movie1) => (<MovieCard movie={movie1}/>) )}
            </div>
          ) : 
          (
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
          )
        }

      </div>
  );
}

export default App;