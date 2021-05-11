//@ts-nocheck
import React, {useState, FC} from 'react';
import { useHistory } from 'react-router-dom'
import { Menu, Avatar, PageHeader, Typography, Dropdown} from 'antd';
import {UserOutlined,LockOutlined, DownCircleFilled, AntDesignOutlined} from '@ant-design/icons';
import './style.css'
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;
const { Title } = Typography;

const Header = (props) => {
    const history = useHistory();

    const menu = (
        <Menu style={{borderRadius: 10, height: '25vh', width: '13vw', marginTop: 16}}>
          <Menu.ItemGroup title="Profile Settings">
          <Menu.Item icon={<UserOutlined />} style={{fontSize: 16}}><Link to="/profile">Edit Profile</Link></Menu.Item>
          <Menu.Item icon={<LockOutlined />} style={{fontSize: 16}}><Link to="/changepassword">Account Password</Link></Menu.Item>
          <Menu.Item icon={<LockOutlined />} style={{fontSize: 16}} onClick={() => {
              localStorage.clear();
              history.replace('/');
          }}>Logout</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
    );
    return  (
        <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title={props.title}
            subTitle={props.subTitle}
            style={{backgroundColor: '#fff'}}
            extra={[
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                    <Avatar
                        size={{ xs: 24, sm: 32, md: 40, lg: 40, xl: 40, xxl: 40 }}
                        icon={<AntDesignOutlined />}
                    />
                    <Title style={{fontSize: 15, marginRight: 10}}>John Benedick Sta. Romana</Title>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a href="/" style={{textDecoration: 'none', color: 'gray'}} onClick={e => e.preventDefault()}>
                        <DownCircleFilled style={{fontSize: 20, fontWeight: 'bold'}}/>
                        </a>
                    </Dropdown>
                </div>
              ]}
        /> 
    )
}


export default Header;