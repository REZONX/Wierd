export type Key = number | string

export interface Category {
    movieCategoryId:number
    movieCategoryName:string
} 

export interface MovieInfo {
    actorRoleList:Array<any>
    majorActorNameList:Array<string>
    movieAgeId:number
    movieAreaId:number
    movieBoxOffice:number
    movieCategoryList:Array<Category>
    movieCommentList:Array<CommentInfo>
    movieLength:number
    movieIntroduction:string
    movieNameCn:string
    movieNameEn:string
    moviePoster:string
    movieRateNum:number
    movieScore:number
    releaseDate:string
    movieId:number
}

export interface CategoryProps {
    movieCategoryId:Key
    movieCategoryName:string
}

export interface AreaProps {
    movieAreaId:Key
    movieAreaName:string
}

export interface AgeProps {
    movieAgeId:Key
    movieAgeName:string
}

export interface SysUser {
    userId:number
    userName:string
    userPicture:string
}

export interface BrandProps {
    cinemaBrandId:Key
    cinemaBrandName:string
}

export interface CinemaArea {
    cinemaAreaId:Key
    cinemaAreaName:string
}

export interface HallCategoryProps {
    hallCategoryId:Key
    hallCategoryName:string
}

export interface CommentInfo {
    movieId:number
    userId:number
    commentTime:string
    userName:string
    content:string
    score:number
    sysUser:SysUser
}

export interface CinemaInfo {
    cinemaName:string
    cinemaId:number
    cinemaAddress:string
    cinemaAreaId:Key
    cinemaBrandId:Key
    cinemaPicture:string
    isRefunded:boolean
    isTicketChanged:boolean
    sysHallCategoryList:HallCategoryProps[]
}

export interface SysHall {
    cinemaId:Key
    hallCategoryId:Key
    hallId:Key
    hallName:string
    hallState:boolean
    rowNums:number
    rowStart:string
    seatNums:number
    seatNumsRow:number
    seatState:string
}

export interface SysMovieRuntime {
    beginTime:string
    endTime:string
    movieRuntimeId:Key
    movieRuntimeName:string
}

export interface Session {
    cinemaId:Key
    hallId:Key
    languageVersion:string
    movieId:Key
    movieRuntimeId:Key
    seatNums:number
    sessionDate:string
    sessionId:Key
    sessionPrice:number
    sessionSeats:string
    sessionState:boolean
    sysHall:SysHall
    sysMovieRuntime:SysMovieRuntime
}

export interface ICinemaDetail {
    cinema:CinemaInfo
    sessions:Array<Session>
}

export interface ActorInfo {
    actorAge:number
    actorBloodType:string
    actorConstellation:string
    actorGender:boolean
    actorHeight:number
    actorId:number
    actorInformation:string
    actorName:string
    actorNation:string
    actorNationality:string
    actorPhoto:string
    movieList:MovieInfo[]
}

export type AgeMoviesProps = {
    [key in string]:Array<MovieInfo>
}