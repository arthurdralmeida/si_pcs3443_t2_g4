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

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const { Column, ColumnGroup } = Table;

const gridStyle = {
  width: '50%',
  textAlign: 'center',
};

class Home extends Component { 

  state = {
    paciente: {},
    atividades: [],
    metas: [],
  };


  getListAtividadeLogged = () => {
    axios.get('http://localhost:8000/api/getListAtividadeLogged/',
      { headers:{
      'Content-Type': 'application/json',
      'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }})
      .then(res => {
        const atividades = res.data;
        this.setState({atividades});
      })
  };

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

          const { Column,} = Table;
          const atividades = [
            {
              "pk": 1,
              "nome": "Caminhada",
              "dataRealizada": 16,
              "duracao": 2,
              "passos": 250,
              "intensidade": 0
          },
          {
              "pk": 2,
              "nome": "Futebol",
              "dataRealizada": 17,
              "duracao": 1,
              "passos": 0,
              "intensidade": 3
          }
          ]

          const sintomasList = [
            {
              "pk": 1,
              "data": 17,
              "chiado": 4,
              "tosse": 1,
              "dormir": 2,
              "faltaDeAr": 2,
              "bombinha": 2,
              "observacao": "Dor no peito"
          },
          {
              "pk": 2,
              "data": 19,
              "chiado": 1,
              "tosse": 2,
              "dormir": 3,
              "faltaDeAr": 4,
              "bombinha": 5,
              "observacao": "Dor de cabeça"
          }
          ]

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
                <b>Caminhada e corrida</b>
                <p></p>
                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Hoje" key="1">
                        <h5>Restam 250 passos</h5>
                        <Progress type="circle" percent={10} />
                    </TabPane>
                    <TabPane tab="Esta semana" key="2">
                        <h5>sábado - 06/06/2020</h5>
                        <h6> </h6>
                        <Progress type="circle" percent={50} />
                    </TabPane>
                    <TabPane tab="Este mês" key="3">
                        <h5>sexta-feira - 05/06/2020</h5>
                        <h6> </h6>
                        <Progress type="circle" percent={75} />
                    </TabPane>
                    </Tabs>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                <b>Outras atividades</b>
                <p></p>
                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Hoje" key="1">
                        <h5>Restam 2 horas</h5>
                        <h6> </h6>
                        <Progress type="circle" percent={0} />
                    </TabPane>
                    <TabPane tab="Esta semana" key="2">
                        <h5>sábado - 06/06/2020</h5>
                        <h6> </h6>
                        <Progress type="circle" percent={50} />
                    </TabPane>
                    <TabPane tab="Este mês" key="3">
                        <h5>sexta-feira - 05/06/2020</h5>
                        <h6> </h6>
                        <Progress type="circle" percent={75} />
                    </TabPane>
                    </Tabs>
                </Card.Grid>
              </Card>

              <Divider/>
              <Card dark title = "Sintomas recentes" bordered={false} style={{ width: 800 }}>
              <Table dataSource={sintomasList}>
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
              <Table dataSource={atividades}>
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