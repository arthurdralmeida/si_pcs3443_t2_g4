import React, { Component } from "react";
import { Layout, Menu, PageHeader, Space, Button, Input, Form } from 'antd';
import { UserOutlined, 
  FormOutlined,
  QuestionCircleOutlined,
  LineChartOutlined,
  ToolFilled,
  HeartOutlined,
  CalendarOutlined,
  SearchOutlined } from '@ant-design/icons';

class AlterarSenha extends Component {
  render() {
    const { Header, Content, Sider } = Layout;
    const layout = {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 18,
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
            <p style={{color: '#f1f1f1'}}>Projeto Asma</p>
            </Space>
          </div>
        </Header>
        <Layout>
          <Sider width={230} className="site-layout-background">
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1" icon={<UserOutlined/>}><b>Informações pessoais</b></Menu.Item>
                <Menu.Item key="2" icon={<FormOutlined />}><b>Metas</b></Menu.Item>
                <Menu.Item key="3" icon={<CalendarOutlined />}><b>Calendário</b></Menu.Item>
                <Menu.Item key="4" icon={<QuestionCircleOutlined />}><b>F.A.Q</b></Menu.Item>
                <Menu.Item key="5" icon={<HeartOutlined />}><b>Saúde pessoal</b></Menu.Item>
                <Menu.Item key="6" icon={<LineChartOutlined />}><b>Estatísticas</b></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item key="8" icon={<ToolFilled />}><b>Configurações</b></Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <PageHeader
              onBack={() => null}
              className="site-page-header"
              title="Alterar senha"
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
                  label="Senha antiga"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Insire uma senha válida para sua conta',
                    },
                  ]}
                >
                  <Input.Password style={{ width: '50%' }}/>
                </Form.Item>

                <Form.Item
                  label="Nova senha"
                  name="password2"
                  rules={[
                    {
                      required: true,
                      message: 'Insire uma senha válida para sua conta',
                    },
                  ]}
                >
                  <Input.Password style={{ width: '50%' }}/>
                </Form.Item>

                <Form.Item
                  label="Nova senha"
                  name="password3"
                  rules={[
                    {
                      required: true,
                      message: 'Insire uma senha válida para sua conta',
                    },
                  ]}
                >
                  <Input.Password style={{ width: '50%' }}/>
                </Form.Item>
                </Form>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default AlterarSenha;