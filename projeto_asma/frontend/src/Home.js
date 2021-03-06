import React, { Component, Fragment, useEffect, useState } from "react";
import { Card } from 'antd';
import { Layout, Menu, Space, Form, DatePicker, Input, Select, Button, InputNumber, Divider, PageHeader, Checkbox } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined, FileSearchOutlined, FormOutlined, CalendarOutlined, LineChartOutlined, HeartOutlined} from '@ant-design/icons';

  import { Progress, Result, Carousel, Tabs, Table } from 'antd';
import MenuLateral from './components/MenuLateral'
import './App.css'
import { Link } from 'react-router-dom'
import axios from "axios";


const { Column, ColumnGroup } = Table;

const gridStyle = {
  width: '50%',
  textAlign: 'center',
};

class Home extends Component { 

  state = {
    paciente: {},
    atividades: [],
    sintomas: [],
    metas:[],
    metaPassos: 10000,
    metaHoras: 100,
    passosFitbit: 5000,
    horasExercitadas:68,
  };


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

    axios.get('http://localhost:8000/api/getListAtividadeLogged/',
      { headers:{
      'Content-Type': 'application/json',
      'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }})
      .then(res => {
        this.setState({atividades: res.data});
        console.log(res.data)
      })
      
      axios.get('http://localhost:8000/api/getListDiarioDeSintomasLogged/',
      { headers:{
      'Content-Type': 'application/json',
      'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }})
      .then(res => {
        this.setState({sintomas: res.data});
        console.log(res.data)
      })

      axios.get('http://localhost:8000/api/getMetaMensal/',
      { headers:{
      'Content-Type': 'application/json',
      'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }})
      .then(res => {
        this.setState({metas: res.data});
        console.log(res.data)
      })
  }

  getListDiarioDeSintomasLogged = () => {
    axios.get('http://localhost:8000/api/getListDiarioDeSintomasLogged/',
      { headers:{
      'Content-Type': 'application/json',
      'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }})
      .then(res => {
        const sintomasList = res.data;
        this.setState({sintomasList});
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
        const renderLogout = () => {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('user');
          sessionStorage.removeItem('paciente');
          sessionStorage.removeItem('medico');
        }
        console.log('oi')
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

          const { TabPane } = Tabs;
          
          function callback(key) {
            console.log(key);
          }



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

                <Card title="Suas metas" bordered={true} style={{ width: 800 }} theme="dark">
                <Card.Grid hoverable={false} style={gridStyle}>
                <b>Meta de Passos</b>
                <p></p>
                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Passos" key="1">
                        <h5></h5>
                        <Progress type="circle" percent={(this.state.passosFitbit/this.state.metas.passos)*100} />
                    </TabPane>
                    </Tabs>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                <b>Meta de Horas</b>
                <p></p>
                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Horas" key="1">
                        <h5></h5>
                        <h6> </h6>
                        <Progress type="circle" percent={(this.state.horasExercitadas/this.state.metas.horas)*100} />
                    </TabPane>
                    </Tabs>
                </Card.Grid>
              </Card>

              <Divider/>
              <Card dark title = "Sintomas recentes" bordered={false} style={{ width: 800 }}>
              <Table dataSource={this.state.sintomas}>
                <Column title="Data" dataIndex="data" key="data" align='center'/>
                <Column title="Tosse" dataIndex="tosse" key="tosse" align='center'/>
                <Column title="Chiados no peito" dataIndex="chiado" key="chiado" align='center'/>
                <Column title="Problemas para dormir" dataIndex="dormir" key="dormir" align='center'/>
                <Column title="Falta de Ar" dataIndex="faltaDeAr" key="faltaDeAr" align='center'/>
                <Column title="Uso da Bombinha" dataIndex="bombinha" key="bombinha" align='center'/>
                <Column title="Observações" dataIndex="observacao" key="observacao" align='center'/>
              </Table>
              </Card>

              <Divider/>
              <Card dark title = "Atividades recentes" bordered={false} style={{ width: 800 }}>
              <Table dataSource={this.state.atividades}>
                <Column title="Dia" dataIndex="dataRealizada" key="dataRealizada" align="center"/>
                  <Column title="Atividade" dataIndex="nome" key="nome" align="center"/>
                <Column title="Duração (horas)" dataIndex="duracao" key="duracao" align="center"/>
                <Column title="Número de passos" dataIndex="passos" key="passos" align="center"/>
                <Column title="Intensidade" dataIndex="intensidade" key="intensidade" align="center"/>
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




export default Home;