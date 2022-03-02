import HeroUI from "../../components/Hero/HeroUI"
import ModuleUI from "../../components/Module/ModuleUI"
import ModuleListUI from "../../components/ModuleList/ModuleListUI"
import { FluidContainerStyle } from "../../public/style.css"
import SiteHeaderUI, { SiteMainNavigatorUI } from "./SiteHeaderUI"
import { HomeStyle, SiteMainHeaderStyle} from "./styles.css"

export const A = () => {
    return (
        <a href="./">Sign in</a>
    )
}
export const HomeUI = () => {
    return <div className={HomeStyle}>
        <header
            className = {SiteMainHeaderStyle['large']}
        >
           <SiteMainNavigatorUI
                navStyle="large"
                navLink={
                    [
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
                      ]
                }
                otherElement = {
                    <A/>
                }
           />

        </header>
        {/* <ModuleUI
          movieImg="https://tse1-mm.cn.bing.net/th/id/OIP-C.jfrG_XRPBS24z7Bi9dEJmAHaJ4?pid=ImgDet&rs=1"
          movieLink="Alice"
          movieName="Alice in Wanderland"
        /> */}
        <HeroUI/>
        <ModuleListUI/>
    </div>
}