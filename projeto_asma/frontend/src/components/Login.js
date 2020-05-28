import React, { Component } from "react";
import { Layout, Menu, Space, Form, Input, Button, Checkbox, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined } from '@ant-design/icons';

class Login extends Component {
  render() {
    const { Header, Content, Sider } = Layout;
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 10,
        span: 16,
      },
    };
      const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    return (
      <Layout>
        <Header className="header">
          
          <div className="logo" />
          <div>
            <Space size={22}>
            <Space size={94}>
            <Button icon={<SearchOutlined />}>Search</Button>
            <Button type="primary">Sign Up</Button>
            </Space>
            <Button>Log In</Button>
            </Space>
          </div>
        </Header>
        <Layout>
          <Sider width={240} className="site-layout-background">
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1" icon={<UserOutlined/>}><b>Entrar</b></Menu.Item>
                <Menu.Item key="2" icon={<QuestionCircleOutlined />}><b>F.A.Q</b></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item key="8" icon={<ToolFilled />}><b>Configurações</b></Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <PageHeader
              className="site-page-header"
              title="Log In"
            />
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            > 
               <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input/>
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                  <Checkbox>Lembrar me</Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Entrar
                  </Button>
                </Form.Item>
              </Form>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Login;