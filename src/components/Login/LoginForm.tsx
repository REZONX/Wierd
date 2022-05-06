import 'antd/lib/form/style'
import 'antd/lib/input/style'
import { Button, Form, Input ,Checkbox} from "antd"
import { Link } from "react-router-dom"
import { RegisterLink } from './style.css'

interface LoginFormProps {
    handleSubmit?:(value:any) => void
    loading?:boolean
}
const LoginForm = (props:LoginFormProps) => {
    const {
        handleSubmit,
        loading,
    } = props
    return (
        <Form
            onFinish={handleSubmit}
        >
            <h1
                style={{
                    "textAlign":'center',
                    "marginBottom":"2rem",
                }}
            >Login</h1>
            <Form.Item
                label={"用户名"}
                labelAlign={"right"}
                name={"userName"}
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
                    name="userName"
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
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                >
                    登陆
                </Button>
            </Form.Item>
            {/* <Form.Item
                name="isRememberMe"
                valuePropName="checked"
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item> */}
            <div>
                如果您还没有账号，进入
                {
                    <Link
                        className={RegisterLink}
                        to={"/register"}
                    >
                        注册界面
                    </Link>
                }
            </div>
        </Form>
    )
}

export default LoginForm