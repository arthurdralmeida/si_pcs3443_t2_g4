import React, { Component } from "react";
import { Layout, Menu, Space, Form, Input, Button, Checkbox, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined } from '@ant-design/icons';
import './App.css'
import { Link } from 'react-router-dom'

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
        const tailLayout2 = {
      wrapperCol: {
        offset: 8,
        span: 12,
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
            <Space size={86}>
            <p style={{color: '#f1f1f1'}}>Projeto Asma</p>
            </Space>
            </Space>
          </div>
        </Header>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <PageHeader
              className="site-page-header"
              title=""
            />
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 800
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
                  label="Email"
                  name="email"
                  rules={[
                    {
                      message: 'Por favor digite o seu email',
                    },
                  ]}
                >
                  <Input/>
                </Form.Item>

                <Form.Item
                  label="Senha"
                  name="senha"
                  rules={[
                    {
                      message: 'Por favor digite a sua senha',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                  <Checkbox>Lembrar me</Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout2}>
                  <Button style={{marginRight: 20}}>Registre-se</Button>
                  <Link to={'/'}><Button type="primary" htmlType="submit">Entrar</Button></Link>
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