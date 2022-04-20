import { Menu, MenuProps } from 'antd'
import HeaderDropdown from '../HeaderDropdwon'
// import 'antd/dist/antd.css';
import '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import SiteAvatar from './SiteAvatar';
import { container, username } from './style.css';
import { useAuth } from '../../context/AuthProvider';
type Key = string | number
interface AvatarDropdownProps {
    onClick?:(evt:MenuProps) => void//TODO
    provider?:any
}
const AvatarDropDown = (props:AvatarDropdownProps) => {
    const {user} = useAuth()
    const refUserId = false
    const menuHeaderDropDown = (
        <Menu>
            <Menu.Item
                key={"center"}
            >
                账号管理
            </Menu.Item>
            {
                refUserId && (
                    <Menu.Item
                        key={"switch"}
                    >
                        {/* <SwitchAccountModal>切换账号</SwitchAccountModal> */}
                    </Menu.Item>
                )
            }
            <Menu.Item
                key={"logout"}
            >
                退出登陆
            </Menu.Item>
        </Menu>
    )
    return (
        <div
            className={container}
        >
            <HeaderDropdown
                overlay={menuHeaderDropDown}
            >
                <span>
                {/* <span className="sltIcon icon-avatar"></span> */}
                {/* <Avatar size={"small"} icon={<UserOutlined/>} gap={10}/> */}
                    <SiteAvatar/>
                    <span
                        className={username}
                    >
                        {user.name}
                    </span>
                </span>
            </HeaderDropdown>
        </div>
    )
}
export default AvatarDropDown