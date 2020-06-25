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
    pacientesDesalocados: [],
    pacientesAlocados: [],
  };
  componentDidMount() {
    axios.get('http://localhost:8000/api/getListPacienteEmEsperaDeMedico/',
      { headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }})
      .then(res => {
        this.setState({pacientesDesalocados: res.data});
        console.log(this.state.pacientesDesalocados)
      })


      axios.get('http://localhost:8000/api/getListPacienteComMedico/',
      { headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }})
      .then(res => {
        this.setState({pacientesAlocados: res.data});
        console.log(this.state.pacientesAlocados)
      })
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

          function setPacienteClicked(text) {
            sessionStorage.setItem('paciente_selected', JSON.stringify(text))
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
          
          const renderLogout = () => {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('paciente');
            sessionStorage.removeItem('medico');
          }   
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
                <Link to={'/login'}><Button onClick={() => renderLogout()}>Log Out</Button></Link>
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
                dataSource={this.state.pacientesAlocados}>
                  <Column title="Nome" dataIndex="nome" key="nome" align='center'/>                               
                  <Column title="Grau de Asma" dataIndex="grauAsma" key="grauAsma" align='center'/>
                  <Column
                      title="Página do Paciente"
                      key="paginaPaciente"
                      align='center'
                      render={(text, record) => (
                          <Link to={"./medicopaciente"}><Button onClick={() => setPacienteClicked(text)}><SmileTwoTone /></Button></Link>
                      )}
                    />
                  <Column
                    title="Chat"
                    key="chat"
                    align='center'
                    render={(text, record) => (
                        <a><Link to={"./faq"}> <WechatOutlined/> </Link> </a>
                    )}
                    />
                  
                </Table>

                </Card>  
                <Divider/>

                <Card title="Pacientes desalocados:" bordered={true} style={{ width: 800}}>
                 
                <Table dark 
                dataSource={this.state.pacientesDesalocados}>
                  <Column title="Nome" dataIndex="nome" key="nome" align='center' />                               
                  <Column title="Grau de Asma" dataIndex="grauAsma" key="grauAsma" align='center' />
                    <Column
                      title="Pagina do paciente"
                      key="sintomasdesalocado"
                      align='center'
                      render={(text, record) => (
                          <Link to={"./medicopaciente"}><Button onClick={() => setPacienteClicked(text)}><SmileTwoTone /></Button></Link>
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