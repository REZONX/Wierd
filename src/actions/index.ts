const baseUrl = "http://127.0.0.1:8181"

const login = `${baseUrl}/sysUser/login`

const getLists = `${baseUrl}/sysMovie/rankingList`

const getCategory = `${baseUrl}/sysMovieCategory`

const getArea = `${baseUrl}/sysMovieArea`

const getAge = `${baseUrl}/sysMovieAge`

const getMovieList = `${baseUrl}/sysMovie`

const getMovieDetail = `${baseUrl}/sysMovie/find`

const getHallCategory = `${baseUrl}/sysHallCategory`

const getCinemaArea = `${baseUrl}/sysCinemaArea`

const getCinemaBrand = `${baseUrl}/sysCinemaBrand`

const getCinemaList = `${baseUrl}/sysCinema`

const getCinemaInfo = `${baseUrl}/sysCinema/find`

const searchMovie = `${baseUrl}/sysMovie`

const searchActor = `${baseUrl}/sysActors`

const searchCinema = `${baseUrl}/sysCinema`

const getSeats = `${baseUrl}/sysSession`

const getActors = `${baseUrl}/sysActor`

const getActor = `${baseUrl}/sysActor/find`

const getHot = `${baseUrl}/sysMovie/rankingList/4`

const getNow = `${baseUrl}/sysMovie`

export default {
    baseUrl,
    login,
    getLists,
    getCategory,
    getAge,
    getArea,
    getMovieList,
    getMovieDetail,
    getHallCategory,
    getCinemaArea,
    getCinemaBrand,
    getCinemaList,
    getCinemaInfo,
    searchMovie,
    searchActor,
    searchCinema,
    getSeats,
    getActor,
    getActors,
    getHot,
    getNow,
}