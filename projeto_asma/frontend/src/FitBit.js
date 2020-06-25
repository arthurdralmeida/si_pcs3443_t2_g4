import React, { Component } from "react";
import { Layout, Menu, Space, Form, Input, Button, Checkbox, PageHeader,List, Typography, Divider, Select, TimePicker,DatePicker, Radio,Table,Tag,Tooltip} from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import MenuLateral from './components/MenuLateral'
import axios from 'axios'
const { Column, ColumnGroup } = Table;


class FitBit extends Component {
    state = {
        passos: 0,
        data:'',
    }
    setDados = () =>{
        console.log('enviou')
        axios.post("http://localhost:8000/api/createDadosFitBit/",
          {
            passos: this.state.passos,
            data: this.state.data,
          },
          { headers:{
            'Content-Type': 'application/json',
            'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
          }}).then(() => {
            console.log("Deu certo")
            window.location.reload();
        })
    };


    onChangePassos=e=>{
        console.log('radio checked', e.target.value);
        this.setState({
            passos: e.target.value,
        });
      };
    onChangeDate =(date,dateString)=>{
        console.log('date checked', dateString);
        this.setState({
            data: dateString,
        });
    };

      render() {


        const {Option}=Select;
        const { Header, Content, Sider } = Layout;
        const layout = {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 16,
          },
        };
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
          };
        const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
        };
        
        const tailLayout2 = {
          wrapperCol: {
            offset: 1,
            span: 12,
          },
    
        };
        const renderLogout = () => {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('user');
          sessionStorage.removeItem('paciente');
          sessionStorage.removeItem('medico');
        }
          const onFinish = values => {
            console.log('Success:', this.state);
            this.setDados();      
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
              <p style={{color: '#f1f1f1'}}>Projeto Asma</p>
              <Link to={'/login'} ><Button onClick={() => renderLogout()} >Log Out</Button></Link>
              </Space>
              </Space>
            </div>
          </Header>
          <Layout >
            <MenuLateral valueFromParent={'4'} />
            <Layout style={{ padding: '0 24px 24px' }}>
              <PageHeader
                className="site-page-header"
                title="Dados FitBit"
              />
              <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 1100
              }}
            ><Form.Item label='Selecione o Dia'>
            <DatePicker style={{ width: '13%' }} onChange={this.onChangeDate}  />
            </Form.Item>
    <Form.Item onChange={this.onChangePassos} label='Passos:' orientation="left">
        <Input style={{ width: '13%' }} />
    </Form.Item>
    <Form.Item {...tailLayout2}>
    <Button type="primary" htmlType="submit">
          Enviar 
          </Button>
      </Form.Item>
      </Content>
            </Layout>
          </Layout>
        </Layout>
 
 )};
}

export default FitBit;