import { Menu, MenuProps} from 'antd'
import HeaderDropdown from '../HeaderDropdwon'
// import 'antd/dist/antd.css';
import '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import SiteAvatar from './SiteAvatar';
import { container, username } from './style.css';
import { useAuth } from '../../context/AuthProvider';
import {} from 'antd/lib/menu'
type Key = string | number
interface MenuInfo {
    key: string;
    keyPath: string[];
    /** @deprecated This will not support in future. You should avoid to use this */
    item: React.ReactInstance;
    domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}
interface AvatarDropdownProps {
    onClick:(evt:MenuInfo) => void//TODO
    provider?:any
}
const AvatarDropDown = (props:AvatarDropdownProps) => {
    const {
        onClick
    } = props
    const {user:{
        sysUser:{
            userName,
            userPicture
        }
    }} = useAuth()
    // console.log(userPicture&&)
    const refUserId = false
    const menuHeaderDropDown = (
        <Menu
            onClick={onClick}
        >
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
                    <SiteAvatar
                        src={userPicture?`http://127.0.0.1:8181/${JSON.parse(userPicture)[0]}`:""}
                        username={userName}
                    />
                    <span
                        className={username}
                    >
                        {userName}
                    </span>
                </span>
            </HeaderDropdown>
        </div>
    )
}
export default AvatarDropDown