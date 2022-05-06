import { MovieInfo, AgeMoviesProps} from "../../types"
export  const parseAge = (movieInfo:Array<MovieInfo>) => {
    const ageMovies:AgeMoviesProps = {}
    movieInfo.map(item => {
        let key = item.releaseDate.slice(0,4)
        if(key in ageMovies) {
            ageMovies[key].push(item)
        }else {
            ageMovies[key] = [item]
        }
    })
    return ageMovies
}