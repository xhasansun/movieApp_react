import { useContext } from 'react'
import Header from './Header'
import Movie from './Movie'
import "../App.css"

import ThemeContext from '../context/ThemeContext'

function Container() {

    const{theme} = useContext(ThemeContext)

    return (
        <div className={`container ${theme}`}>
            <Header />
            <hr />
            <Movie />
        </div>
    )
}

export default Container