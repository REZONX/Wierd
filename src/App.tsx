import {FC, Fragment, useContext} from 'react';
import './App.css';
import SiteHeader from './pages/Home/SiteHeader';
import { HomeUI } from './pages/Home/HomeUI';
import { Route,Routes } from 'react-router';
import CinemaUI from './pages/Cinema/CinemaUI';
import ListsUI from './pages/Lists/ListsUI';


const App:FC = () => {

  return  (
    <div
    >
      <SiteHeader
        navStyle='small'
        navLink={[
          {
            path:'movies',
            content:'movies',
          },
          {
            path:'cinema',
            content:'cinema',
          },
          {
            path:'lists',
            content:'lists',
          },
          {
            path:'videos',
            content:'videos'
          }
        ]}
      />
      <Routes>
        <Route element={<HomeUI/>} path={'/'}/>
        <Route element = {<CinemaUI/>} path = {'/cinema'}/>
        <Route element = {<ListsUI/>} path = {'/lists'}/>
      </Routes>
    </div>
  )
}
export default App;
