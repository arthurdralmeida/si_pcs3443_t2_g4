import React, { Component, Fragment } from "react";
import { Layout, Menu, Space, Tabs, Form, Table, Descriptions, Badge, DatePicker, Input, Select, Button, InputNumber, PageHeader, Checkbox, Divider } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined, FileSearchOutlined, 
  FormOutlined,
  LineChartOutlined,
  HeartOutlined,
  CalendarOutlined} from '@ant-design/icons';
  import axios from 'axios'

  import { Progress } from 'antd';

import MenuLateral from './components/MenuLateral'
import './App.css'
import { Link } from 'react-router-dom'

const { Column, ColumnGroup } = Table;
const dataDia = [
  {
    atividade: 'Corrida',
    duracao: '1:30',
    passos: '250',
    intensidade: '---',
    
  },
  {
    atividade: 'Futebol',
    duracao: '2:00',
    passos: '---',
    intensidade: 'Moderada',
  },
];

const dataSemana = [
  {
    dia: '13',
    atividade: 'Corrida',
    duracao: '1:30',
    passos: '250',
    intensidade: '---',
    
  },
  {
    dia: '13',
    atividade: 'Futebol',
    duracao: '2:00',
    passos: '---',
    intensidade: 'Moderada',
  },
  {
    dia: '12',
    atividade: 'Futebol',
    duracao: '3:00',
    passos: '---',
    intensidade: 'Fraca',
  },
  {
    dia: '10',
    atividade: 'Caminhada',
    duracao: '2:00',
    passos: '450',
    intensidade: '---',
  },
  {
    dia: '10',
    atividade: 'Corrida',
    duracao: '1:00',
    passos: '200',
    intensidade: '---',
  },
  {
    dia: '9',
    atividade: 'Remo',
    duracao: '0:30',
    passos: '---',
    intensidade: 'Intensa',
  },
  {
    dia: '8',
    atividade: 'Remo',
    duracao: '2:00',
    passos: '---',
    intensidade: 'Moderada',
  },
];

const dataMes = [
  {
    dia: '13/06',
    atividade: 'Corrida',
    duracao: '1:30',
    passos: '250',
    intensidade: '---',
    
  },
  {
    dia: '13/06',
    atividade: 'Futebol',
    duracao: '2:00',
    passos: '---',
    intensidade: 'Moderada',
  },
  {
    dia: '12/06',
    atividade: 'Futebol',
    duracao: '3:00',
    passos: '---',
    intensidade: 'Fraca',
  },
  {
    dia: '10/06',
    atividade: 'Caminhada',
    duracao: '2:00',
    passos: '450',
    intensidade: '---',
  },
  {
    dia: '10/06',
    atividade: 'Corrida',
    duracao: '1:00',
    passos: '200',
    intensidade: '---',
  },
  {
    dia: '9/06',
    atividade: 'Remo',
    duracao: '0:30',
    passos: '---',
    intensidade: 'Intensa',
  },
  {
    dia: '8/06',
    atividade: 'Remo',
    duracao: '2:00',
    passos: '---',
    intensidade: 'Moderada',
  },
  {
    dia: '4/06',
    atividade: 'Remo',
    duracao: '0:30',
    passos: '---',
    intensidade: 'Intensa',
  },
  {
    dia: '2/06',
    atividade: 'Remo',
    duracao: '2:00',
    passos: '---',
    intensidade: 'Moderada',
  },
  {
    dia: '2/06',
    atividade: 'Remo',
    duracao: '0:30',
    passos: '---',
    intensidade: 'Intensa',
  },
  {
    dia: '28/05',
    atividade: 'Remo',
    duracao: '2:00',
    passos: '---',
    intensidade: 'Moderada',
  },
  {
    dia: '26/05',
    atividade: 'Remo',
    duracao: '0:30',
    passos: '---',
    intensidade: 'Intensa',
  },
  {
    dia: '25/05',
    atividade: 'Remo',
    duracao: '2:00',
    passos: '---',
    intensidade: 'Moderada',
  },
  {
    dia: '25/05',
    atividade: 'Remo',
    duracao: '0:30',
    passos: '---',
    intensidade: 'Intensa',
  },
  {
    dia: '24/05',
    atividade: 'Remo',
    duracao: '2:00',
    passos: '---',
    intensidade: 'Moderada',
  },
  {
    dia: '22/05',
    atividade: 'Remo',
    duracao: '0:30',
    passos: '---',
    intensidade: 'Intensa',
  },
  {
    dia: '21/05',
    atividade: 'Remo',
    duracao: '2:00',
    passos: '---',
    intensidade: 'Moderada',
  },
]; 

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

function callback(key) {
  console.log(key);
}
  
class ListaAtividades extends Component {

  getAtividades = () => {
    axios.get("http://localhost:8000/api/getListAtividadeLogged/",
      { headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }}).then(res => this.setState({ atividadesList: res.data }));
  };

    render() {
        const { Header, Content, Sider } = Layout;
        const { TabPane } = Tabs;
        const renderLogout = () => {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('user');
          sessionStorage.removeItem('paciente');
          sessionStorage.removeItem('medico');
        }
        const Demo = () => (
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Hoje" key="1">
                <Table dataSource={dataDia}>
                <ColumnGroup title='Atividades realizadas hoje'>
                  <Column title="Atividade" dataIndex="nome" key="nome" align="center"/>
                <Column title="Duração (horas)" dataIndex="duracao" key="duracao" align="center"/>
                <Column title="Número de passos" dataIndex="passos" key="passos" align="center"/>
                <Column title="Intensidade" dataIndex="intensidade" key="intensidade" align="center"/>
                </ColumnGroup>
                </Table>
            </TabPane>
            <TabPane tab="Última semana" key="2">
            <Table dataSource={dataSemana}>
                <ColumnGroup title='Atividades realizadas nos últimos 7 dias'>
                <Column title="Dia" dataIndex="dataRealizada" key="dataRealizada" align="center"/>
                  <Column title="Atividade" dataIndex="nome" key="nome" align="center"/>
                <Column title="Duração (horas)" dataIndex="duracao" key="duracao" align="center"/>
                <Column title="Número de passos" dataIndex="passos" key="passos" align="center"/>
                <Column title="Intensidade" dataIndex="intensidade" key="intensidade" align="center"/>
                </ColumnGroup>
                </Table>
            </TabPane>
            <TabPane tab="Último mês" key="3">
            <Table dataSource={dataMes}>
                <ColumnGroup title='Atividades realizadas nos últimos 30 dias'>
                <Column title="Dia" dataIndex="dataRealizada" key="dataRealizada" align="center"/>
                  <Column title="Atividade" dataIndex="nome" key="nome" align="center"/>
                <Column title="Duração (horas)" dataIndex="duracao" key="duracao" align="center"/>
                <Column title="Número de passos" dataIndex="passos" key="passos" align="center"/>
                <Column title="Intensidade" dataIndex="intensidade" key="intensidade" align="center"/>
                </ColumnGroup>
                </Table>
            </TabPane>
          </Tabs>
        );
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
                <p style={{color: '#f1f1f1'}}>Projeto Asma</p>
                <Link to={'/login'} ><Button onClick={() => renderLogout()} >Log Out</Button></Link>
                </Space>
                </Space>
              </div>
            </Header>
            <Layout>
              <MenuLateral valueFromParent={'4'} />
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
                    minHeight: 800
                  }}
                > 
                <Demo />
                </Content>
              </Layout>
            </Layout>
          </Layout>
          </Fragment>
        );
      }
};

export default ListaAtividades;