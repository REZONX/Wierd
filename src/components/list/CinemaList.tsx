import React from 'react'
import {Table,Tag,Button} from 'antd'
interface CinemaListProps {

}
const CinemaList = (props:CinemaListProps) => {
    const {
        
    } = props
    const columns = [
        {
            title:"影院名",
            // dataIndex:"cinemaName",
        },
        {
            title:"影院地址",
            // dataIndex:"cinemaAddress",
        },
        {
            title:"标签",
            // dataIndex:"tags",
            render:(tags:Array<string>) => {
                return (
                    <React.Fragment>
                        {
                            tags.map(tag=>{
                                return (
                                    <Tag
                                        color={"red"}
                                    >
                                        {tag}
                                    </Tag>
                                )
                            })
                        }
                    </React.Fragment>
                )
            }
        },
        // {
        //     title:"距离",
        //     dataIndex:"distance",
        //     render:(distance:number) => {
        //         return()
        //     }
        // },
        {
            title:"操作",
            // dataIndex:"operate",
            render:()=>{
                return (
                    <Button>
                        选座购票
                    </Button>
                )
            }
        }
    ]
    return (
        <Table
            columns={columns}
        />
    )
}
export default CinemaList