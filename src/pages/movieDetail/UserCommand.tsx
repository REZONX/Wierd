import React from 'react'
import {Avatar, Comment, Tooltip} from 'antd'
import moment from 'moment'
import Title from '../../components/title'

interface UserCommentProps {

}
const UserComment = (props:UserCommentProps) => {
    return (
        <div>
            <Title
                name="热门短评"
            />
            <Comment
                author={<div>
                    rozen
                </div>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                    </p>
                }
                datetime={
                    <Tooltip
                        title={moment().format('YYYY-MM-DD HH:mm:ss')}
                    >
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
            <Comment
                author={<div>
                    rozen
                </div>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                    </p>
                }
                datetime={
                    <Tooltip
                        title={moment().format('YYYY-MM-DD HH:mm:ss')}
                    >
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
            <Comment
                author={<div>
                    rozen
                </div>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                    </p>
                }
                datetime={
                    <Tooltip
                        title={moment().format('YYYY-MM-DD HH:mm:ss')}
                    >
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
            <Comment
                author={<div>
                    rozen
                </div>}
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                    </p>
                }
                datetime={
                    <Tooltip
                        title={moment().format('YYYY-MM-DD HH:mm:ss')}
                    >
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
        </div>
    )
}

export default UserComment