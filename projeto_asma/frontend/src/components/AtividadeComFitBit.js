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
  SearchOutlined, FileSearchOutlined } from '@ant-design/icons';

  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

class AtividadeComFitBit extends Component {
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
            <Button>Log Out</Button>
            </Space>
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
                <Menu.Item key="1" icon={<UserOutlined/>}><b>Informações pessoais</b></Menu.Item>
                <Menu.Item key="2" icon={<FormOutlined />}><b>Atividades</b></Menu.Item>
                <Menu.Item key="3" icon={<FileSearchOutlined />}><b>Visualização de atividades</b></Menu.Item>  
                <Menu.Item key="4" icon={<FormOutlined />}><b>Metas</b></Menu.Item>
                <Menu.Item key="5" icon={<CalendarOutlined />}><b>Calendário</b></Menu.Item>
                <Menu.Item key="6" icon={<HeartOutlined />}><b>Saúde pessoal</b></Menu.Item>
                <Menu.Item key="7" icon={<LineChartOutlined />}><b>Estatísticas</b></Menu.Item>
                <Menu.Item key="8" icon={<QuestionCircleOutlined />}><b>F.A.Q</b></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item key="9" icon={<ToolFilled />}><b>Configurações</b></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0px 24px 24px' }}>
            <PageHeader
              className="site-page-header"
              title="Quantidade de batimentos:"
            />
            <HeartOutlined style={{ width: '5%' }}/>
            <PageHeader
              className="site-page-header"
              title="Tipo de atividade:"
            />
            
            <PageHeader
              className="site-page-header"
              title="Meta Diária de Passos:"
            />
            <Content
              className="site-layout-background"
              style={{
                padding: 30,
                margin: 20,
                minHeight: 300
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
                  
                  name="MetaPassos" 
                >
                  <Space size={0}>
                  <Progress type="circle" percent={75} />
                  </Space>
                </Form.Item> 
              </Form>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default AtividadeComFitBit;