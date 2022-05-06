import React from 'react'
import {Avatar, Button, Comment, Form, Input, Modal, Tooltip,Rate, message,FormInstance} from 'antd'
import moment from 'moment'
import Title from '../../components/title'
import 'antd/lib/modal/style'
import { post } from '../../network/server/request'
import { useForm } from 'rc-field-form'
import { CommentInfo } from '../../types'
import { parseImg } from '../../utils/parse'

interface ICommentForm {
    score:number,
    comment:string,
}

interface UserCommentProps {
    comments:Array<CommentInfo>
}
const UserComment = (props:UserCommentProps) => {
    const {
        comments
    } = props
    const [visible,setVisible] = React.useState(false)
    React.useEffect(()=>{

    },[])
    const [form] = useForm()
    let initalValues = {
        score:0,
        comment:""
    }
    form.setFieldsValue(initalValues)
    console.log(form.getFieldValue('score'))
    const handleOk = (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
        form.validateFields()
        .then(values => {
            console.log(values)
            form.resetFields(values)
            post("url",values)
            message.success("评论成功")
        })
        .catch(err =>{
            message.error(err)
        })
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
                // form={form}
                    // onFinish={onFinish}
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
                    name={"comment"}
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
                        console.log(parseImg(item.sysUser.userPicture))
                        return (
                            <Comment
                                author={<div>{item.sysUser.userName}</div>}
                                avatar={<Avatar src={parseImg(item.sysUser.userPicture)}/>}
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