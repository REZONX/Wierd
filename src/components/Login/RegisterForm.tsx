import 'antd/lib/form/style'
import 'antd/lib/input/style'
import { Button, Form, Input ,Checkbox} from "antd"
import { Link } from "react-router-dom"
import { RegisterLink } from './style.css'
import { useForm } from 'antd/lib/form/Form'

interface RegisterFormProps {
    handleSubmit?:(value:any) => void
    loading?:boolean
}
const RegisterForm = (props:RegisterFormProps) => {
    const {
        handleSubmit,
        loading,
    } = props
   const [form] =  useForm()
    return (
        <Form
            onFinish={handleSubmit}
            form={form}
        >
            <h1
                style={{
                    "textAlign":'center',
                    "marginBottom":"2rem",
                }}
            >Register</h1>
            <Form.Item
                label={"用户名"}
                labelAlign={"right"}
                name={"username"}
                rules={[
                    {
                        required:true,
                        message:"请输入账号"
                    }
                ]}
            >
                <Input
                    placeholder="请输入账号"
                    maxLength={20}
                    name="username"
                />
            </Form.Item>
            <Form.Item
                label={"密码"}
                name={"password"} //由name属性来推断字段名
                labelCol={{span:5}}
                rules={[
                    {
                        required:true,
                        message:"请输入密码",
                    },
                    {
                        type:'string',
                        min:6,
                        message:'密码为6-18字符'
                    }
                ]}
                validateTrigger="onBlur"
            >
                <Input
                    type={"password"}
                    placeholder={"请输入密码"}
                    maxLength={18}
                />
            </Form.Item>
            <Form.Item
                label={"确认密码"}
                name={"passwordComfirm"} //由name属性来推断字段名
                labelCol={{span:5}}
                dependencies={['password']}
                rules={[
                    {
                        required:true,
                        message:"请再次输入密码",
                    },
                    {
                        type:'string',
                        min:6,
                        message:'密码为6-18字符'
                    },
                    ({getFieldValue}) => ({
                        validator(rule,value) {
                            if(!value || getFieldValue("password") === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject("密码与确认密码不匹配")
                        }
                    })
                ]}
                validateTrigger={["onBlur"]}
            >
                <Input
                    type={"password"}
                    placeholder={"请输入密码"}
                    maxLength={18}
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                >
                    注册
                </Button>
            </Form.Item>
        </Form>
    )
}

export default RegisterForm