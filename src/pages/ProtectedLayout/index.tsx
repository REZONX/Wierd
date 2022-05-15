import React from 'react'
import {useOutlet,useNavigate} from 'react-router-dom'
import SiteHeader from '../Home/SiteHeader';
import {navConfig} from '../../config/nav'
import {useAuth} from '../../context/AuthProvider'
const ProtectedLayout = () => {
    const {user} = useAuth()
    const outlet = useOutlet()
    const navigate = useNavigate()
    console.log(user.token)
    if(!user.token){
        navigate('./login')
    }
    return (
        
        <div>
            <SiteHeader
                navStyle='small'
                navLink={navConfig}
            />
            {outlet}
        </div>
    )
}

export default ProtectedLayout