import React from 'react'
import AgeTabs from '../../components/tabsGroups/AgeTabs'
import AreaTabs from '../../components/tabsGroups/AreaTabs'
import CategoryTabs from '../../components/tabsGroups/CategoryTabs'
import actions from '../../actions'
import { tabsContainer } from './style.css'

interface MovieTabsProps {
}
const MovieTabs = (props:MovieTabsProps) => {
    const {
    } = props
    return (
        <div
            className={tabsContainer}
        >
            <CategoryTabs
                action={actions.getCategory}
            />
            <AreaTabs
                action={actions.getArea}
            />
            <AgeTabs
                action={actions.getAge}
            />
        </div>
    )
}

export default MovieTabs