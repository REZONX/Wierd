import {FC, Fragment, useContext} from 'react';

import SiteHeader from './pages/Home/SiteHeader';
import { HomeUI } from './pages/Home/HomeUI';
import { Route,Routes, useRoutes } from 'react-router';
import CinemaUI from './pages/Cinema/CinemaUI';
import ListsUI from './pages/Lists/ListsUI';
import LoginPage from './pages/LoginAndRegister/LoginPage';
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
import 'antd/lib/result/style'
import 'antd/lib/layout/style'
import 'antd/lib/slider/style'
import 'antd/lib/menu/style'
import 'antd/lib/carousel/style'
// import 'antd/lib/layout/style'
// import 'antd/lib/slider/style'

import AppProvider from './context/AppProvider';
import { routes } from './routesConfig';
import { navConfig } from './config/nav';
import MainPage from './pages/main';
import BillPay from './pages/BillPay';
import User from './pages/User';
import UserInfo from './pages/User/UserInfo';
import PayInfo from './pages/User/PayInfo';
import RegisterPage from './pages/LoginAndRegister/RegisterPage';
import CinemaInfo from './pages/Cinema/CinemaInfo';
import CinemaDetail from './pages/CinemaDetail';
import ChooseSeat from './pages/ChooseSeat';
import ActorDetail from './pages/Actors/ActorDetail';

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
          <Route element={<MainPage/>} path={'/'}/>
          {/* <Route index element={<LoginPage/>}/> */}
          <Route element = {<LoginPage/> } path={'/login'}/>
          <Route element={<MoviePage/> } path={"/movies"}/>
          <Route element={<MovieDetail/>} path={"/movies/:movieId"}/>
          <Route element = {<CinemaUI/>} path = {'/cinemas'}/>
          <Route element={<CinemaDetail/>} path={"/cinemas/:cinemaId"}/>
          <Route element = {<ListsUI/>} path = {'/lists'}/>
          <Route element = {<RegisterPage/> } path={'/register'}/>
          <Route element={<ChooseSeat/>} path={'/choose-seat/:sessionId'}/>
          <Route element={<ActorDetail/>} path={'/actors/:actorId'}/>
          <Route element={<BillPay/>} path={'/bill-pay/:billId'}/>
          <Route element={<User/>} path={'/user'}>
            <Route
                path='user-info'
                element={<UserInfo/>}
            />
            <Route
                path='pay-info'
                element={<PayInfo/>}
            />
          </Route>
        </Routes>
      </div>
    </AppProvider>
  )
}
export default App;
