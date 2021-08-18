// Passes movie data (from PageHome.js) into individual movie cards

import MovieCard from './MovieCard';

// movieData is an array of 12 movies
// map over that array, each item in that array is a movie object
// pass that single movie object down into MovieCard

function Movies({ movieData }) {
    return (
        <div className="movies-container">
            {movieData.map((oneMovie, i) => <MovieCard key={i} movieObj={oneMovie} />)}
        </div>
    )
}

export default Movies;