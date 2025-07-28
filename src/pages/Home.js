import { useEffect, useState } from "react"
import tmdb from '../services/tmdb'
import MovieCard from "../componentes/MovieCard";

//CSS
import './MovieGrid.css'

const Home = () => {
  
  const [topMovies, setTopMovies] = useState([]);

  const getTopMovies = async (url) => {
    const response = await tmdb.get(url);

    setTopMovies(response.data.results);
  }
  
  useEffect(() => {
    getTopMovies('/movie/top_rated');
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes: </h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  )
}

export default Home