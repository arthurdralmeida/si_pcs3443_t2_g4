import React, { Component } from "react";
import { Layout, Menu, Space, Form, Input, Button, Checkbox, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined } from '@ant-design/icons';
import './App.css'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from './actions/auth';
import axios from 'axios';

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
      const onFinish = async(values) => {
          await axios.post('http://localhost:8000/api/auth/login/',
            {username: values.email,
            password: values.senha}).then((res) => {
              console.log(res.data)
              sessionStorage.setItem('token', JSON.stringify(res.data.token))
              sessionStorage.setItem('user', JSON.stringify(res.data.user))
          }).catch((error) => {
              console.log(error)
          });
          await axios.get('http://localhost:8000/api/auth/user/',
            { headers:{
              'Content-Type': 'application/json',
              'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
            }}).then((res) => {
              console.log(res.data)
            }).catch((error) => {
              console.log(error)
          });
          await axios.get('http://localhost:8000/api/getPacienteLogged/',
          { headers:{
            'Content-Type': 'application/json',
            'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
          }}).then((res) => {
            sessionStorage.setItem('paciente', JSON.stringify(res.data))
          }).catch((error) => {
            console.log(error)
        });
        await axios.get('http://localhost:8000/api/getAgenteDeSaudeLogged/',
        { headers:{
          'Content-Type': 'application/json',
          'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
        }}).then((res) => {
          sessionStorage.setItem('medico', JSON.stringify(res.data))
        }).catch((error) => {
          console.log(error)
      });
      await this.props.history.push('/')

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
                minHeight: 800,
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
                  <Input />
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
                  <Link to={'/cadastro'}><Button style={{marginRight: 20}}>Registre-se</Button></Link>
                  <Button type="primary" htmlType="submit">Entrar</Button>
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