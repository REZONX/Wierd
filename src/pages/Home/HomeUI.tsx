import HeroUI from "../../components/Hero/HeroUI"
import Logo from "../../components/logo"
import ModuleUI from "../../components/Module/ModuleUI"
import ModuleListUI from "../../components/ModuleList/ModuleListUI"
import SiteFooter from "../../components/siteFooter"
import SiteOver from "../../components/siteOver"
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
        {/* <ModuleUI
          movieImg="https://tse1-mm.cn.bing.net/th/id/OIP-C.jfrG_XRPBS24z7Bi9dEJmAHaJ4?pid=ImgDet&rs=1"
          movieLink="Alice"
          movieName="Alice in Wanderland"
        /> */}
        <SiteOver>
          <header
              className = {SiteMainHeaderStyle['large']}
          >
            {/* <Logo/> */}
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
          <HeroUI/>
          <ModuleListUI/>
        </SiteOver>
        <SiteFooter/>
    </div>
}