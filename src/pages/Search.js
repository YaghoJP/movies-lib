
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

//Components
import MovieCard from '../componentes/MovieCard'

//API
import tmdb from "../services/tmdb";

//CSS
import './MovieGrid.css'

const Search = () => {

  const [searchParams] = useSearchParams();
  
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  const getSearchFilms = async (url) => {
    const response = await tmdb.get(url, {
      params:{
        query: query
      }
    });

    setMovies(response.data.results);
  };

  useEffect(() => {
    getSearchFilms('/search/movie');
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">Resultados para: <span className="query-text">{query}</span> </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  )
}

export default Search