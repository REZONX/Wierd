import { Carousel,Image } from 'antd'
import React from 'react'
import LeftArrow from '../Arrow/LeftArrow'
import RightArrow from '../Arrow/RightArrow'
import carousel1 from '../../asset/carousel1.jpg'
import carousel2 from '../../asset/carousel2.jpg'
import carousel3 from '../../asset/carousel3.jpg'
import carousel4 from '../../asset/carousel4.jpg'

interface IProps {}
interface IState {}
export default class SiteCarousel extends React.Component<IProps,IState>{
    private img:any
    constructor(props:IProps){
        super(props)
    }
    prev(){
        this.img.prev();
    }
    next(){
        this.img.next();
    }

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <LeftArrow
                    onClick={this.prev.bind(this)}
                />
                <Carousel
                    ref={dom => { this.img = dom }}
                    autoplay
                >
                    <div>
                    <Image
                        width={"100%"}
                        preview={false}
                        src={carousel1}
                    />
                    </div>
                    <div>
                    <Image
                        width={"100%"}
                        preview={false}
                        src={carousel2}
                    />
                    </div>
                    <div>
                    <Image
                        width={"100%"}
                        preview={false}
                        src={carousel3}
                    />
                    </div>
                    <div>
                    <Image
                        width={"100%"}
                        preview={false}
                        src={carousel4}
                    />
                    </div>
                </Carousel>
                <RightArrow
                    onClick={this.next.bind(this)}
                />
            </React.Fragment>
        )
    }
}