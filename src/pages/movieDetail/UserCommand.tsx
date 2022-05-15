import React from 'react'
import {Avatar, Button, Comment, Form, Input, Modal, Tooltip,Rate, message,FormInstance} from 'antd'
import moment from 'moment'
import Title from '../../components/title'
import 'antd/lib/modal/style'
import { post } from '../../network/server/request'
import { useForm } from 'rc-field-form'
import { CommentInfo, CommentParams } from '../../types'
import { parseImg } from '../../utils/parse'
import { putCommentInfo } from './net'
import { useAuth } from '../../context/AuthProvider'

interface ICommentForm {
    score:number,
    comment:string,
}

interface UserCommentProps {
    comments:Array<CommentInfo>
    movieId:string
    setComment:(isComment:boolean)=>void
}
const UserComment = (props:UserCommentProps) => {
    const {
        comments,
        movieId,
        setComment
    } = props
    const [visible,setVisible] = React.useState(false)

    let initalValues = {
        score:0,
        content:""
    }
    const {user} = useAuth()
    const [commentInfo,setCommentInfo] = React.useState(initalValues)

    const [form] = Form.useForm()
    form.setFieldsValue(initalValues)
    
    const handleOk = (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
        setComment(true)
        let score = form.getFieldValue('score')
        let content = form.getFieldValue('content')
        let params:CommentParams = {
            score,
            content,
            userId:user.sysUser.userId as number,
            commentTime:moment().format("YYYY-MM-DD hh:mm:ss"),
            movieId,
        }
        putCommentInfo(params)
        setComment(false)
        setVisible(false)
    }
    const handleClick = () =>{
        setVisible(true)
    }

    const onCancel = () => {
        setVisible(false)
    }


    return (
        <div
            style={{
                "position":"relative"
            }}
        >
            <Title
                name="热门短评"
            />
            <Button
            style={{
                "position":"absolute",
                "top":"0",
                "right":"0",
                "background":"#e74c3c",
                "border":"none"
            }}
                type="primary"
                onClick={handleClick}
            >
                评论
            </Button>
            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={onCancel}
                getContainer={false}
            >
            <Form
                initialValues={initalValues}
                form={form}
            >
                
                    <Form.Item
                        name={"score"}
                    >
                        <Rate
                            allowHalf
                            allowClear
                            defaultValue={0}
                        />
                    </Form.Item>
                <Form.Item
                    name={"content"}
                >
                    <Input.TextArea
                        rows={4}
                    />
                </Form.Item>
            </Form>
            </Modal>
            <div>
                {
                    comments.map(item=>{
                        return (
                            <Comment
                                author={<div>{item.sysUser?.userName}</div>}
                                avatar={<Avatar src={parseImg(item.sysUser?.userPicture)}/>}
                                content={
                                    <p>
                                        {item.content}
                                    </p>
                                }
                                datetime={
                                    <Tooltip
                                        title={item.commentTime}
                                    >
                                        <span>{item.commentTime}</span>
                                    </Tooltip>
                                }
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserComment