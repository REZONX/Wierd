import { navConfig } from "../../config/nav"
import { SiteMainNavigatorUI } from "../../pages/Home/SiteHeaderUI"
import { container } from "./style.css"

const MainSiteHeader = () => {
    return (
        <header
            className={container}
        >
            <SiteMainNavigatorUI
                  navStyle="large"
                  navLink={navConfig}
            />
        </header>
    )
}
export default MainSiteHeader