import React, { Component } from "react";
import { Layout, Menu, Space, Form, Input, Button, Checkbox, PageHeader } from 'antd';
import { Progress } from 'antd';
import { UserOutlined, 
  FormOutlined,
  QuestionCircleOutlined,
  LineChartOutlined,
  ToolFilled,
  HeartOutlined,
  CalendarOutlined,
  SearchOutlined } from '@ant-design/icons';

  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

class ListaAtividades extends Component {
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
            <Space size={86}>
            <p style={{color: '#f1f1f1'}}>Projeto Asma</p>
            <Button type="primary">Sign Up</Button>
            </Space>
            <Button>Log In</Button>
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
              className="site-page-header"
              title="Atividades"
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
                  label="Meta de Passos"
                  name="MetaPassos" 
                >
                  <Progress type="circle" percent={75} />
                </Form.Item>

                <Form.Item
                  label="Atividade 1"
                  name="Atividade1"
                >
                  <Checkbox onChange={onChange}>Descrição da Atividade 1</Checkbox>
                </Form.Item>

                <Form.Item
                  label="Atividade 2"
                  name="Atividade2"
                >
                  <Checkbox onChange={onChange}>Descrição da Atividade 2</Checkbox>
                </Form.Item>

                <Form.Item
                  label="Exercício Respiratório"
                  name="Atividade3"
                >
                  <Checkbox onChange={onChange}>Descrição da Atividade 3</Checkbox>
                </Form.Item>
                
              </Form>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default ListaAtividades;