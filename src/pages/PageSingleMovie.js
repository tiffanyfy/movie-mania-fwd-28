import SingleMovie from '../components/SingleMovie';
import { useParams } from 'react-router-dom';

function PageSingleMovie() {

    const { id } = useParams();

    console.log(id);

    return (
        <section className="single-movie-page">
            <SingleMovie />
        </section>
    )
}

export default PageSingleMovie;