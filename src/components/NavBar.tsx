import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import "./NavBar.css";

export const NavBar: React.FC = () => {
    const [current, setCurrent] = useState('/');
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        navigate(e.key);
    };

    return (
        <div className="navBarDiv">
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" style={{backgroundColor:'#c3d9e6'}}>
                <Menu.Item key='/' style={{marginRight:'100px'}}>
                    HOME
                </Menu.Item>
                <Menu.Item key='/experience' style={{marginRight:'100px'}}>
                    EXPERIENCE
                </Menu.Item>
                <Menu.Item key='/projects' style={{marginRight:'100px'}}>
                    PROJECTS
                </Menu.Item>
                <Menu.Item key='/fun' style={{marginRight:'100px'}}>
                    FOR FUN
                </Menu.Item>
                <Menu.Item key='/contact'>
                    CONTACT
                </Menu.Item>
            </Menu>
        </div>
    );

}

export default NavBar;