import { useEffect, useState } from 'react';
import NavSort from '../components/NavSort';
import Movies from '../components/Movies';
import { API_TOKEN } from '../globals/globals';

function PageHome({sort}) {

    const [movieData, setMovieData] = useState(null);

    useEffect(() => {

        const fetchMovies = async () => {

            // Call the API, waiting for response
            // Get data for the whole “sort” feature, popular, top rated, etc
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?&language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });

            // When we get the response, call the json method and assign to variable
            let rawMovieData = await res.json();
            rawMovieData = rawMovieData.results.splice(0, 12);
            setMovieData(rawMovieData);
            // console.log(rawMovieData);

        }

        fetchMovies();

    }, [sort]);

    return (
        <section className="home-page">
            <NavSort />
            {movieData !== null && <Movies movieData={movieData} />}
        </section>
    )
}

export default PageHome;