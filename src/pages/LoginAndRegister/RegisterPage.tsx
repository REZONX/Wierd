import { Card } from "antd"
import RegisterForm from "../../components/Login/RegisterForm"
import { LoginData, useAuth } from "../../context/AuthProvider"
import { FormCardS, LoginAndRegisterContainerS } from "./style.css"

const RegisterPage = () => {
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
                <RegisterForm
                    handleSubmit={handleLogin}
                />
            </Card>
        </div>
    )
}
export default RegisterPage