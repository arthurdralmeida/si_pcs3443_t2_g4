import React, { Component, Fragment } from "react";
import { Layout, Menu, Space, Form, DatePicker, Input, Select, Button, InputNumber, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined, FileSearchOutlined, FormOutlined, CalendarOutlined, LineChartOutlined, HeartOutlined} from '@ant-design/icons';

import MenuLateral from './components/MenuLateral'
import './App.css'
class DadosPessoais extends Component {
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
        const { Option } = Select;
        function onChange2(value) {
          console.log(`selected ${value}`);
        }
        
        function onBlur() {
          console.log('blur');
        }
        
        function onFocus() {
          console.log('focus');
        }
        
        function onSearch(val) {
          console.log('search:', val);
        }
        function onChange(value) {
          console.log('changed', value);
        }
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
                  title="Dados Pessoais"
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
          </Fragment>
        );
      }
};

export default DadosPessoais;