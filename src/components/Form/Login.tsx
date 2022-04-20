import { Button, Form, Input } from "antd"
import 'antd/lib/form/style'
import 'antd/lib/input/style'
import { Link } from "react-router-dom"

const Login= () => {
    const handleSubmit = () => {
        
    }
    return (
        <Form
            labelAlign="left"
            labelWrap={true}
            layout={"vertical"}
        >
            <Form.Item>
                <div>
                    Wierd
                </div>
            </Form.Item>
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required:true,
                        message:'Please input your username'
                    }
                ]}
            >
                <Input
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required:true,
                        message:'Please input your password'
                    }
                ]}
            >
                <Input
                    placeholder="password"
                />
            </Form.Item>
            <Form.Item>
                <Button
                type="primary"
                htmlType={"submit"}
                onSubmit={handleSubmit}
                >
                    Login
                </Button>
                {/* <Link to={'/register'}>
                    Or Register
                </Link> */}
                <Button
                    type="primary"
                >
                    Return
                </Button>
            </Form.Item>
        </Form>
    )
}
export default Login