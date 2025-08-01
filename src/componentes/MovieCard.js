import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

import './MovieCard.css'

const imageUrl = process.env.REACT_APP_IMG_API;

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie_card">
        <img src={imageUrl+movie.poster_path} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <p>
            <FaStar/> {parseFloat(movie.vote_average.toFixed(1))}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard