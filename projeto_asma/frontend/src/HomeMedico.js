import React, { Component, Fragment } from "react";
import { Card } from 'antd';
import { Layout, Menu, Space, Form, DatePicker, Input, Select, Button, Divider, InputNumber, PageHeader, Checkbox } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled, SmileTwoTone,
  SearchOutlined, FileSearchOutlined, FormOutlined, CalendarOutlined, CheckCircleTwoTone, LineChartOutlined, HeartOutlined, WechatOutlined} from '@ant-design/icons';

  import { Progress, Result, Table} from 'antd';
import MenuLateral from './components/MenuLateral'
import './App.css'
import { Link } from 'react-router-dom'
import axios from "axios";


function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

class HomeMedico extends Component { 
  state = {
    pacientes: []
  };
  componentDidMount() {
    this.resetState();
  }
  getPacientes = () => {
    axios.get('http://localhost:8000/api/pacientes/',
      { headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }})
      .then(res => {
        const pacientes = res.data;
        this.setState({pacientes});
      })
  };
  resetState = () => {
    this.getPacientes();
  };

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
        function onChange(a, b, c) {
          console.log(a, b, c);
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
          function callback(key) {
            console.log(key);
          }

          

          const { Column,} = Table;
          const lista_mocada = [
            {
              key: '1',
              nome: 'John Brown',
              email: 'brown@uol.com',
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              nome: 'Jim Green',
              email: 'brown@uol.com',
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              nome: 'Joe Black',
              email: 'brown@uol.com',
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
            {
              key: '4',
              nome: 'Bruno',
              email: 'bdelbiancosoares@gmail.com',
              address: 'Limão',
              tags: ['cool', 'teacher'],
            },
          ];
          
                  
          const pacientes = this.state.pacientes;
          const resetState=this.resetState

          const datals = this.props.datals;
        return (
          
            <Fragment>
          <Layout>
            <Header className="header">
              <div className="logo" />
              <div>
                <Space size={22}>
                <Space size={94}>
                <p style={{color: '#f1f1f1'}}>Projeto Asma</p>
                <Link to={'/login'} ><Button>Log Out</Button></Link>
                </Space>
                </Space>
              </div>
            </Header>
            <Layout>
              <MenuLateral valueFromParent={'1'} />
              <Layout style={{ padding: '0 24px 24px' }}>
                <PageHeader
                  className="site-page-header"
                  title="Página Principal"
                />
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 800
                  }}
                > 

                <Card title="Pacientes alocados:" bordered={true} style={{ width: 800}}>
                 
                <Table dark 
                dataSource={lista_mocada}>
                  <Column title="Nome" dataIndex="nome" key="nome" align='center'/>                               
                  <Column title="Peso" dataIndex="peso" key="peso" align='center'/>
                  <Column
                      title="Sintomas"
                      key="sintomas"
                      align='center'
                      render={(text, record) => (
                          <a><SmileTwoTone /></a>
                      )}
                    />
                  <Column
                    title="Chat"
                    key="chat"
                    align='center'
                    render={(text, record) => (
                        <a><WechatOutlined/></a>
                    )}
                    />
                  
                </Table>

                </Card>  
                <Divider/>

                <Card title="Pacientes desalocados:" bordered={true} style={{ width: 800}}>
                 
                <Table dark 
                dataSource={lista_mocada}>
                  <Column title="Nome" dataIndex="nomedesalocado" key="nomedesalocado" align='center' />                               
                  <Column title="Peso" dataIndex="pesodesalocado" key="pesodesalocado" align='center' />
                    <Column
                      title="Sintomas"
                      key="sintomasdesalocado"
                      align='center'
                      render={(text, record) => (
                          <a><SmileTwoTone /></a>
                      )}
                    />
                  <Column
                    title="Alocar paciente"
                    key="alocar"
                    align='center'
                    render={(text, record) => (
                        <a><CheckCircleTwoTone twoToneColor="#52c41a" /></a>
                    )}
                    />
                </Table>

                </Card>       

                </Content>
              </Layout>
            </Layout>
          </Layout>
          </Fragment>
        );
      }
};




export default HomeMedico;