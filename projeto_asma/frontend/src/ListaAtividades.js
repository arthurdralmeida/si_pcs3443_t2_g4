import React, { Component, Fragment } from "react";
import { Layout, Menu, Space, Form, DatePicker, Input, Select, Button, InputNumber, PageHeader, Checkbox } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined, FileSearchOutlined, 
  FormOutlined,
  LineChartOutlined,
  HeartOutlined,
  CalendarOutlined} from '@ant-design/icons';

  import { Progress } from 'antd';

import MenuLateral from './components/MenuLateral'
import './App.css'

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
            <Fragment>
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
              <MenuLateral />
              <Layout style={{ padding: '0 24px 24px' }}>
                <PageHeader
                  className="site-page-header"
                  title="Lista de atividades"
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
          </Fragment>
        );
      }
};

export default ListaAtividades;