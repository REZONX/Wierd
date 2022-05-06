import React from 'react'
import MainSiteHeader from '../../components/MainSiteHeader'
import { HomeUI } from '../Home/HomeUI'
import SiteHeader from '../Home/SiteHeader'
const MainPage = () => {
    return (
        <div>
            <MainSiteHeader/>
            <HomeUI/>
        </div>
    )
}

export default MainPage