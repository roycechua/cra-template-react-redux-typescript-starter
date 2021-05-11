import React, {useState, FC} from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu, Breadcrumb,  Table, Tag, Space, Button, Input, Drawer, Form,Col, Row, Select, DatePicker, Tabs} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined, 
  UserOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  FileSyncOutlined,
  EditOutlined,
  PlusOutlined,
  FileSearchOutlined,
  SaveOutlined,
  ReloadOutlined,
  HistoryOutlined,
  DeleteOutlined,
  
} from '@ant-design/icons';
import SideBar from '../../common/components/Sidebar'
import './style.css'
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;
const {Item} = Breadcrumb;
const { Search } = Input;
const { Option } = Select;

const Users = () => {
    const history = useHistory();

    /// this is for table columns 
    const columnsIncomplete = [
      {
        title: 'User ID',
        dataIndex: 'id',
        key: 'id',
        render: (text:string) => <p>{text}</p>,
      },
      {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'first_name',
      },
      {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'last_name',
      },
      {
        title: 'User Actions',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button size={'small'} onClick={() => history.push(`/loans/view-loan-details/${1}`)} icon={<EditOutlined />}>Update</Button>
            <Button size={'small'} onClick={() => history.push(`/loans/view-loan-payment-history-details/${1}`)} icon={<DeleteOutlined />}>Delete</Button>
          </Space>
        ),
      },
    ];
    const data = [
      {
        key: '1',
        id: '1234-4567',
        first_name: 'Juan',
        last_name: 'Dela Cruz',
      },
      {
        key: '2',
        id: '9013-1236',
        first_name: 'Maria',
        last_name: 'Clara',
      },
      {
        key: '3',
        id: '7843-5983',
        first_name: 'Crisostomo',
        last_name: 'Ibarra',
      },
    ];
    
    return  (
        <Layout style={{ minHeight: '100vh' }}>
        <SideBar itemSelected={"users"} itemOpen={"users"}/>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 100px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Item>User Management</Item>
              <Item>Users</Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <p style={{fontSize: 15, fontWeight: 'bold', marginTop: 10, marginLeft: 10}}>Users List</p>
                            <Search placeholder="input search text" onSearch={() => {}} enterButton style={{width: '20vw'}} allowClear/>
                        </div>
                        <Table columns={columnsIncomplete} dataSource={data} size="small" bordered  footer={() => 'All New Records'} style={{padding: 10}}/>
                </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
}

export default Users