import {FC, Fragment, useContext} from 'react';

import SiteHeader from './pages/Home/SiteHeader';
import { HomeUI } from './pages/Home/HomeUI';
import { Route,Routes, useRoutes } from 'react-router';
import CinemaUI from './pages/Cinema/CinemaUI';
import ListsUI from './pages/Lists/ListsUI';
import LoginAndRegisterUI from './pages/LoginAndRegister/LoginAndRegisterUI';
import MoviePage from './pages/movie';
import './App.css';
import MovieDetail from './pages/movieDetail';

// import 'antd/dist/antd.css';
import 'antd/lib/rate/style'
import 'antd/lib/card/style'
import 'antd/lib/image/style'
import 'antd/lib/row/style'
import 'antd/lib/col/style'
import 'antd/lib/button/style'
import 'antd/lib/comment/style'
import 'antd/lib/carousel/style'
import 'antd/lib/tooltip/style'
import 'antd/lib/tabs/style'
import 'antd/lib/radio/style'
import 'antd/lib/table/style'
import 'antd/lib/checkbox/style'
import 'antd/lib/divider/style'
// import 'antd/lib/layout/style'
// import 'antd/lib/slider/style'

import AppProvider from './context/AppProvider';
import { routes } from './routesConfig';
import { navConfig } from './config/nav';

const App:FC = () => {
  const elements = useRoutes(routes)
  return  (
    <AppProvider>
      <div
      >
        {/* {
          elements
        } */}
        <SiteHeader
          navStyle='small'
          navLink={navConfig}
        />
        <Routes>
          <Route element={<HomeUI/>} path={'/'}/>
          <Route element={<MoviePage/> } path={"/movies"}/>
          <Route element={<MovieDetail/>} path={"/movies/detail"}/>
          <Route element = {<CinemaUI/>} path = {'/cinemas'}/>
          <Route element = {<ListsUI/>} path = {'/lists'}/>
          <Route element = {<LoginAndRegisterUI/> } path={'/login'}/>
        </Routes>
      </div>
    </AppProvider>
  )
}
export default App;
