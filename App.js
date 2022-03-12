import './App.css';
import { useState, useEffect } from 'react';
import searchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';

// API Keys: 121afa94
const API_URL = 'https://www.omdbapi.com?apikey=121afa94';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTearm, setSearchTearm] = useState('')

  const searchMovies = async (title) => {
     const response = await fetch (`${API_URL}&s=${title}`);
     const data = await response.json();
     setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('SpiderMan');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1> 

      <div className="search">
        <input 
           placeholder="Search For Movies" 
           value={searchTearm} 
           onChange={(e)=> setSearchTearm(e.target.value)} 
        />
        <img 
           src={searchIcon} 
           alt="Search" 
           onClick={() => searchMovies(searchTearm)} 
           />
      </div> 

        {   movies?.length > 0 
            ? (
              <div className="container">
                 {movies.map((movie)=>(
                   <MovieCard movie={movie} />
                 ))}
              </div>
            ) : (
              <div className="empty">
                <h2>No Movies</h2>
              </div>
            )
         }
    </div>
    );
  }

export default App;
