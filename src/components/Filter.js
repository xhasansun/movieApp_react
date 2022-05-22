import { useEffect } from 'react'
import "../App.css"

function Filter({ setActiveGenre, activeGenre, setFiltered, movies }) {

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(movies);
            return;
        }
        const filtered = movies.filter((movie) =>
            movie.genre_ids.includes(activeGenre));
        setFiltered(filtered)
    }, [activeGenre])

    return (
        <div className="filter-wrapper">
            <button
                className={activeGenre === 0 ? "active" : ""}
                onClick={() => setActiveGenre(0)}>
                All
            </button>
            <button
                className={activeGenre === 35 ? "active" : ""}
                onClick={() => setActiveGenre(35)}>
                Comedy
            </button>
            <button
                className={activeGenre === 16 ? "active" : ""}
                onClick={() => setActiveGenre(16)}>
                Animation
            </button>
            <button
                className={activeGenre === 28 ? "active" : ""}
                onClick={() => setActiveGenre(28)}>
                Action
            </button>
            <button
                className={activeGenre === 12 ? "active" : ""}
                onClick={() => setActiveGenre(12)}>
                Adventure
            </button>
        </div>
    )
}

export default Filter   