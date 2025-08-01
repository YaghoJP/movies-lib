import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs';

import MovieCard from '../componentes/MovieCard';

import './Movie.css';

import tmdb from "../services/tmdb";

const Movie = () => {

  const {id} = useParams();
  const [movie, setMovie] = useState(null); 

  const getMovie = async(url) =>{
    const response = await tmdb.get(url)
    setMovie(response.data);
    console.log(response.data); 
  };

  const formatCurrency = (number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }

  useEffect(() => {
    getMovie(`/movie/${id}`);
  }, [id]);

  return (
    <div className="movie-page">
      {movie && <>
        <MovieCard movie={movie} showLink={false}/>
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
          <h3>
            <BsWallet2/>Orçamento:
          </h3>
          <p>{formatCurrency(movie.budget)}</p>
        </div>
        <div className="info">
          <h3>
            <BsGraphUp/>Receita:
          </h3>
          <p>{formatCurrency(movie.revenue)}</p>
        </div>
        <div className="info">
          <h3>
            <BsHourglassSplit/>Duração:
          </h3>
          <p>{movie.runtime} minutos</p>
        </div>
        <div className="info">
          <h3>
            <BsFillFileEarmarkTextFill/>Descrição:
          </h3>
          <p>{movie.overview}</p>
        </div>
      </>}
    </div>
  )
}

export default Movie