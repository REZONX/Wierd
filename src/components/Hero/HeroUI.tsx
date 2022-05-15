import { Carousel, Image } from "antd"
import HeroModuleUI from "./HeroModuleUI"
import { HeroBackground, HeroContainer, HeroContent, HeroContentBg, HeroContentLeft, HeroContentRight, HeroModulesTitle, HeroModulesTitleBg} from "./style.css"
import carousel1 from '../../asset/carousel1.jpg'
import carousel2 from '../../asset/carousel2.jpg'
import carousel3 from '../../asset/carousel3.jpg'
import carousel4 from '../../asset/carousel4.jpg'

export interface HeroUIProps {

}
const HeroUI = (props:HeroUIProps) => {
    return (
        <section
            className={HeroContainer}
        >
            <div className={HeroContent}>
                <div
                    className={HeroContentBg}
                >
                    {/* <div className={HeroContentRight}>
                        <div
                            className={HeroModulesTitle}
                        >
                            <span
                                className={HeroModulesTitleBg}
                            >
                                play now
                            </span>
                        </div>
                        <div className="list">
                            {
                                [0,0,0].map(item=>{
                                    return <HeroModuleUI
                                                movieName='scalet witch'
                                                movieDescription="the scalet witch is so badass that kill all the people"
                                                videoLong="3:33"
                                                imageLink="https://img.zcool.cn/community/011a3e59633491a8012193a3bc10dc.jpg@1280w_1l_2o_100sh.jpg"
                                            />
                                })
                            }
                            
                        </div>
                    </div> */}
                </div>
            </div>


            <div className={HeroBackground}>

            </div>
        </section>
    )
}

export default HeroUI