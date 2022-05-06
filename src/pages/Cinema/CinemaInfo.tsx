import React from 'react'
import { useParams } from 'react-router'
import { useMovie } from '../../context/MovieProvider'
import MovieDetail, { MovieDetailCinema } from '../movieDetail'
import ShowList from './showList'
import { cinemaInfoContainer, header, showListCotainer } from './style.css'
const CinemaInfo = () => {
    const {currentCinema,setCurrentCinema} = useMovie()
    const params:any = useParams()
    return (
        <div
            className={cinemaInfoContainer}
        >
            <header
                className={header}
            >
                <MovieDetailCinema/>
            </header>
            <div
                className={showListCotainer}
            >
                <ShowList/>
            </div>
        </div>
    )
}

export default CinemaInfo