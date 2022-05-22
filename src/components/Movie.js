import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter';
import { motion } from "framer-motion"

function Movie() {

    const [movies, setMovies] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);

    const getMovies = async () => {
        const res = await axios("https://api.themoviedb.org/3/movie/popular?api_key=76c45d0468da2c2cee539dafa8a9960a&language=en-US&page=1")
        setMovies(res.data.results)
        setFiltered(res.data.results)
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <>
            <Filter
                movies={movies}
                setFiltered={setFiltered}
                activeGenre={activeGenre}
                setActiveGenre={setActiveGenre}
            />
            <div layout className='card-wrapper'>
                {
                    filtered.map((movie) =>
                        <motion.div layout className="card" key={movie.id}>
                            <div className="image">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
                                <div className="content">
                                    <h4>
                                        {movie.original_title}
                                    </h4>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </div>
        </>
    )
}

export default Movie