import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, DatePicker, Form, Input, message, Radio, Space, Upload, UploadProps } from 'antd'
import 'antd/lib/date-picker/style'
import 'antd/lib/space/style'
import 'antd/lib/upload/style'
import 'antd/lib/message/style'
import React from 'react'
import { useForm } from 'antd/lib/form/Form'
import { useAuth } from '../../context/AuthProvider'
import { parseImg,parse } from '../../utils/parse'
import moment from 'moment'

interface UserInfoProps {

}
const UserInfo = (props:UserInfoProps) => {
    const {} = props
    const {user:{
        sysUser:{
            userName,
            userPicture,
            sex,
            information
        }
    }} = useAuth()
    console.log(parse(information).birthday)
    const [form] = useForm()
    form.setFieldsValue({
        "username":userName,
        "sex":sex,
        "birth":parse(information).birthday
    })
    
    const [fileList,setFileList] = React.useState([])

    const [load,setLoad] = React.useState(false)

    console.log(parse(information).birthday)
    const beforeUpload = (file:any,fileList:any) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        // if (fileList.length > 1) { // 文件个数限制大于3禁止上传
        //     message.destroy();
        //     message.error("最多上传1个文件")
        //     return new Promise((resolve, reject) => {
        //         reject();
        //     })
        // }
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      }

      const onChange = (file:any) => {
        setFileList(file.fileList)
      }
    const fileProps:UploadProps = {
        action:parseImg(userPicture),
        name:'avatar',
        listType:"picture-card",
        maxCount:1,
        defaultFileList:fileList,
        beforeUpload,
        onChange,
        // showUploadList:true
    }
    const uploadButton = (
        <div>
            {
                load?<LoadingOutlined/>:<PlusOutlined/>
            }
        </div>
    )
    return (
        <div
            style={{
                "maxWidth":"300px"
            }}
        >
            <Form
                form={form}
            >
                <Form.Item
                    label="用户头像"
                    name={"avactor"}
                >
                    <Upload
                        {...fileProps}
                    >
                        <span
                            style={{
                                "fontSize":"3rem",
                                "textAlign":"center",
                            }}
                        >+</span>
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="用户名"
                    name={"username"}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="性别"
                    name={"sex"}
                >
                    <Radio.Group
                        defaultValue={"man"}
                    >
                        <Radio
                            value={true}
                        >男</Radio>
                        <Radio
                            value={false}
                        >女</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="生日"
                    name={"birth"}
                >
                    <Space>
                        <DatePicker
                            defaultValue={moment(parse(information).birthday, 'YYYY-MM-DD')}
                        />
                    </Space>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        style={{
                            "background":"#ff4757"
                        }}
                    >
                        保存
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UserInfo