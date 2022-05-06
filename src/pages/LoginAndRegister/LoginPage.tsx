import { Card } from "antd"
import Login from "../../components/Form/Login"
import LoginForm from "../../components/Login/LoginForm"
import { LoginData, useAuth } from "../../context/AuthProvider"
import { FormCardS, LoginAndRegisterContainerS } from "./style.css"

const LoginPage = () => {
    const {
        login
    } = useAuth()
    const handleLogin = (value:LoginData) => {
        login(value)
    }
    return (
        <div
            className={LoginAndRegisterContainerS}
        >
            <Card
                className={FormCardS}
            >
                <LoginForm
                    handleSubmit={handleLogin}
                />
            </Card>
        </div>
    )
}
export default LoginPage