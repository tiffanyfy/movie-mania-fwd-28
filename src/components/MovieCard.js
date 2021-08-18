// Takes movie data for a single movie (passed down from Movies.js)
// movieObj allows us to render the poster
// if there's no poster, then we render the no poster image
// link to movie info using each individual movie's id
// made up /movie path in AppRouter, path is the movie id -> url parameter

import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';

function MovieCard({ movieObj }) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movieObj.poster_path === null ?
                    <img src={noPoster} alt="No poster" /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                }
            </div>
            <div className="movie">
                <h3>{movieObj.title}</h3>
                <Link to={`/movie/${movieObj.id}`}>More Info</Link>
            </div>
        </div>
    )
}

export default MovieCard;