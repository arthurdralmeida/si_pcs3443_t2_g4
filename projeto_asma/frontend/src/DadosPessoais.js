import React, { Component, Fragment } from "react";
import { Layout, Menu, Space, Form, Descriptions, Badge, DatePicker, Input, Select, Button, InputNumber, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined, FileSearchOutlined, FormOutlined, CalendarOutlined, LineChartOutlined, HeartOutlined} from '@ant-design/icons';

import MenuLateral from './components/MenuLateral'
import './App.css'
import { Link } from 'react-router-dom'
import axios from "axios";
class DadosPessoais extends Component {
  state={
    paciente:{},
  }

  componentDidMount(){
    axios.get('http://localhost:8000/api/getPacienteLogged/',
    { headers:{
    'Content-Type': 'application/json',
    'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
    }})
    .then(res => {
      this.setState({paciente: res.data});
      console.log(res.data)
    })
  }

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
        const renderLogout = () => {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('user');
          sessionStorage.removeItem('paciente');
          sessionStorage.removeItem('medico');
        }
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
                <p style={{color: '#f1f1f1'}}>Projeto Asma</p>
                <Link to={'/login'} ><Button onClick={() => renderLogout()} >Log Out</Button></Link>
                </Space>
                </Space>
              </div>
            </Header>
            <Layout>
              <MenuLateral valueFromParent={'2'} />
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
                minHeight: 800
              }}
            >
              <Descriptions bordered>
              <Descriptions.Item label="Nome">{this.state.paciente.nome}</Descriptions.Item>
              <Descriptions.Item label="Data de nascimento">{this.state.paciente.dataNascimento}</Descriptions.Item>
              <Descriptions.Item label="Altura">{this.state.paciente.altura}</Descriptions.Item>
              <Descriptions.Item label="Peso">{this.state.paciente.peso}</Descriptions.Item>
              <Descriptions.Item label="Membro desde">2020-04-24</Descriptions.Item>
              <Descriptions.Item label="Grau de Asma">{this.state.paciente.grauAsma}</Descriptions.Item>

            </Descriptions>
            </Content>
              </Layout>
            </Layout>
          </Layout>
          </Fragment>
        );
      }
};

export default DadosPessoais;