import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

export const NavBar: React.FC = () => {
    const items: MenuProps['items'] = [
        {
          label: 'Home',
          key: '/',
          icon: <MailOutlined />,
        },
        {
          label: 'Experience',
          key: '/experience',
          icon: <AppstoreOutlined />,
        },
        {
          label: 'Projects',
          key: '/projects',
          icon: <SettingOutlined />,
        },
        {
            label: 'For Fun',
            key: '/fun',
            icon: <AppstoreOutlined />,
        },
        {
            label: 'Contact',
            key: '/contact',
            icon: <AppstoreOutlined />,
        },
    ];

    const [current, setCurrent] = useState('/');
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        navigate(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;

}

export default NavBar;