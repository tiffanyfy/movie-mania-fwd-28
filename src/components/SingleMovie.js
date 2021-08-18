// pass in the movie object, which we've captured using the id
// rendered the backdrop

import poster from '../images/godzilla-vs-kong-demo-poster.jpg';
import noPoster from '../images/no-movie-poster.jpg';

function SingleMovie({ movieObj }) {

    // https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

    return (
        <div className="single-movie">
            <div className="single-movie-backdrop"
            style={{
                backgroundImage: movieObj.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`
            }}></div>
            <div className="single-movie-content">
                <div className="single-movie-poster">
                {movieObj.poster_path === null ?
                    <img src={noPoster} alt="No poster" /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                }
                </div>
                <div className="single-movie-info">
                    <h2>{movieObj.title}</h2>
                    <p>{movieObj.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie;