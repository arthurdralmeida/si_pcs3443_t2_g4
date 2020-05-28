import React, { Component } from "react";
import { Layout, Menu, PageHeader, Space, Button } from 'antd';
import { UserOutlined, 
  FormOutlined,
  QuestionCircleOutlined,
  LineChartOutlined,
  ToolFilled,
  HeartOutlined,
  CalendarOutlined,
  SearchOutlined } from '@ant-design/icons';


class DadosPessoais extends Component {
  render() {
    const { Header, Content, Sider } = Layout;

    return (
      <Layout>
        <Header className="header">
          
          <div className="logo" />
          <div>
            <Space size={22}>
            <Space size={86}>
            <p style={{color: '#f1f1f1'}}>Projeto Asma</p>
            <Button>Atualizar informações</Button>
            </Space>
            <Button>Alterar senha</Button>
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
              title="Informações pessoais"
            /> 
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <b>Usuário:</b> XXXX
              <br/>
              <br/>
              <b>Nome:</b> XXXX
              <br/>
              <br/>
              <b>Idade:</b> XXXX
              <br/>
              <br/>
              <b>Altura:</b> XXXX
              <br/>
              <br/>
              <b>Peso:</b> XXXX
              <br/>
              <br/>
              <b>CPF:</b> XXXX
              <br/>
              <br/>
              <b>Grau de Asma:</b> XXXX
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default DadosPessoais;