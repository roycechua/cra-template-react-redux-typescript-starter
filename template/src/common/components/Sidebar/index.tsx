import React, {useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useHistory } from 'react-router-dom'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DollarCircleOutlined,
  SolutionOutlined,
  LogoutOutlined,
  HomeOutlined
} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = (props) => {
    const history = useHistory();

    const [collapse, setCollapse] = useState(false);

    const onCollapse = (collapse) => {
        setCollapse(collapse);
    }
    return (
        <Sider collapsible collapsed={collapse} onCollapse={onCollapse} width={'15vw'}>
          <div style={{paddingTop: 20}}>
              <p style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>App Name</p>
          </div>
          <Menu theme="dark" defaultSelectedKeys={[props.itemSelected]} defaultOpenKeys={[props.itemOpen]} mode="inline">
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <SubMenu key="users" icon={<TeamOutlined />} title="User Management">
              <Menu.Item key="users"><Link to="/users">Users</Link></Menu.Item>
              <Menu.Item key="key2"><Link to="#">Roles</Link></Menu.Item>
              <Menu.Item key="key3"><Link to="#">Others</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={()=>{
              window.localStorage.clear();
              history.replace('/')
            }}>
              <Link to="#">Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
    )
}

export default SideBar;