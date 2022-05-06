import React from 'react'

import actions from '../../actions'
import BrandTabs from '../../components/tabsGroups/BrandTabs'
import CinemaAreaTabs from '../../components/tabsGroups/CinemaAreaTabs'
import HallCategoryTabs from '../../components/tabsGroups/HallCategoryTabs'
import { tabsContainer } from './style.css'

interface MovieTabsProps {
}
const CinemaTabs = (props:MovieTabsProps) => {
    const {
    } = props
    return (
        <div
            className={tabsContainer}
        >
            <BrandTabs
                action={actions.getCinemaBrand}
            />
            <CinemaAreaTabs
                action={actions.getCinemaArea}
            />
            <HallCategoryTabs
                action={actions.getHallCategory}
            />
        </div>
    )
}

export default CinemaTabs