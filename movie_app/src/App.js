import { useState, useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';
//bbce9def
const API_URL = 'http://www.omdbapi.com/?apikey=bbce9def';
// const movie1 = {
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
// }

const App = () => {
  const [Movies, setMovies] = useState([]);
  const[searchTerm,setsearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);/* this will actually store the date in the variable movies */
  }


  useEffect(() => {
    searchMovies('mission impossible');
  }, []);


  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}//now its dynamic
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() =>searchMovies(searchTerm)}
        />
      </div>
         
       {
        Movies?.length > 0
        ?  (
             <div className="container">
                {Movies.map((movie)=>(
                   <MovieCard movie={movie}/>
                ))}
             </div>
           ) : (
            <div className="empty">
              <h2>No Movies found</h2>
            </div>
           )
       }
      </div>
     );
 }



export default App;