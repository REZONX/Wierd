import {FC, Fragment, useContext} from 'react';
import './App.css';
import SiteHeader from './pages/Home/SiteHeader';
import { HomeUI } from './pages/Home/HomeUI';



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
      <HomeUI/>
    </div>
  )
}
export default App;
