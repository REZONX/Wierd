import React from 'react'
import {Pagination} from 'antd'
import ModuleUI from '../Module/ModuleUI'
import { number } from 'fp-ts'
import { parseImg } from '../../utils/parse'
import { MovieInfo } from '../../types'
import { container } from './style.css'

interface ShowListProps {
    handleChange:(page:number,pageSize:number)=>void
    defaultPageSize:number
    data:Array<MovieInfo>
}
const ShowList = (props:ShowListProps) => {
    const {
        handleChange,
        defaultPageSize,
        data
    } = props
    return (
        <div
            className={container}
        >
            {
                data.map(item => {
                    console.log(item.movieId)
                    return (
                        <ModuleUI
                            movieImg={parseImg(item.moviePoster)}
                            movieLink={item.movieId.toString()}
                            movieName={item.movieNameCn}
                            moduleType="oneFourth"
                            movieScore={item.movieScore}
                        />
                    )
                })
            }
            <Pagination
                defaultPageSize={defaultPageSize}
                onChange={handleChange}
            />
        </div>
    )
}

export default ShowList