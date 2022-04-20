import type { RouteObject } from "react-router-dom";
import { HomeUI } from "./pages/Home/HomeUI";
import { Link, useRoutes, useParams } from "react-router-dom";
import MoviePage from "./pages/movie";
import SiteHeaderUI from "./pages/Home/SiteHeaderUI";
import SiteHeader from "./pages/Home/SiteHeader";
import MovieDetail from "./pages/movieDetail";
import ListsUI from "./pages/Lists/ListsUI";
import CinemaUI from "./pages/Cinema/CinemaUI";
import { navConfig } from "./config/nav";

export const routes:RouteObject[] = [
    {
        path:"/",
        element:<SiteHeader navStyle="small" navLink={navConfig}/>,
        children:[
            {index:true,element:<HomeUI/>},
            {
                path:"/movies",
                element:<MoviePage/>,
                children:[
                    {
                        path:"/movies:movieKey",
                        element:<MovieDetail/>
                    }
                ]
            },
            {
                path:"/cinemas",
                element:<CinemaUI/>
            },
            {
                path:"/lists",
                element:<ListsUI/>
            }

        ]
    },
]

export const routesTest:RouteObject[] = [
    {

    }
]