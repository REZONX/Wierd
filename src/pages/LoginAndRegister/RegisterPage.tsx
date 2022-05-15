import { Card } from "antd"
import RegisterForm from "../../components/Login/RegisterForm"
import { LoginData, useAuth } from "../../context/AuthProvider"
import { FormCardS, LoginAndRegisterContainerS } from "./style.css"

const RegisterPage = () => {
    const {
        login
    } = useAuth()
    const handleRegister = () => {
        
    }
    return (
        <div
            className={LoginAndRegisterContainerS}
        >
            <Card
                className={FormCardS}
            >
                <RegisterForm
                    handleSubmit={handleRegister}
                />
            </Card>
        </div>
    )
}
export default RegisterPage