import poster from '../images/godzilla-vs-kong-demo-poster.jpg';
//import noPoster from '../images/no-movie-poster.jpg';

function SingleMovie() {
    return (
        <div className="single-movie">
            <div className="single-movie-backdrop"></div>
            <div className="single-movie-content">
                <div className="single-movie-poster">
                    <img src={poster} alt="Add alt here..." />
                </div>
                <div className="single-movie-info">
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad reiciendis, dolores quasi iure repellat sed magnam soluta sint ipsa, quos cumque eum eaque ducimus hic labore nemo modi quod deleniti.</p>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie;