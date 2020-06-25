import React, { Component, Fragment } from "react";
import { Card } from 'antd';
import { Layout, Menu, Space, Form, Divider, Descriptions, Badge, DatePicker, Input, Select, Button, InputNumber, PageHeader, Checkbox } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled, SmileTwoTone,
  SearchOutlined, FileSearchOutlined, FormOutlined, CalendarOutlined, LineChartOutlined, HeartOutlined, WechatOutlined, HeartTwoTone} from '@ant-design/icons';
import moment from 'moment';
import { Progress, Result, Table} from 'antd';
import MenuLateral from './components/MenuLateral'
import './App.css'
import { Link } from 'react-router-dom'
import axios from "axios";


function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

class MedicoPaciente extends Component { 
  state = {
    paciente:{},
    atividades:[],
    sintomasList:[],
    metaMensal:{},
  };
  componentDidMount() {
    this.setState({ paciente: JSON.parse(sessionStorage.getItem('paciente_selected'))})
    axios.get('http://localhost:8000/api/getListDiarioDeSintomasOfPaciente/',
    { headers:{
    'Content-Type': 'application/json',
    'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
    }})
    .then(res => {
      this.setState({sintomasList: res.data});
      console.log(res.data)
    })

    axios.get('http://localhost:8000/api/getListAtividadeOfPaciente/',
    { headers:{
    'Content-Type': 'application/json',
    'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
    }})
    .then(res => {
      this.setState({atividades: res.data});
      console.log(res.data)
    })
  }
  getPacientes = () => {
    axios.get('https://localhost:8000/api/getPaciente/',
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
        
        const format = 'HH:mm';
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

          const paciente = {
              key: '2',
              nome: 'Bruno Del Bianco Soares',
              dataNascimento: 2,
              peso: 70,
              grauAsma: 0,
              altura: 1.7,
              cpf: 1111111111,
              login: 2,
              emEsperaDeMedico: 'False',
            };

            const atividades = [
              {
                "pk": 1,
                "nome": "Caminhada",
                "dataRealizada": 16/5,
                "duracao": 2,
                "passos": 250,
                "intensidade": 0
            },
            {
                "pk": 2,
                "nome": "Futebol",
                "dataRealizada": 15/5,
                "duracao": 1,
                "passos": 0,
                "intensidade": 3
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
                  title="Página do Paciente: " 
                />
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 800
                  }}
                > 
                <Card title="Informações Pessoais" bordered={true} style={{ width: 800}}>
                  <Descriptions bordered>
                  <Descriptions.Item label="Nome" span={2}>{this.state.paciente.nome}</Descriptions.Item>
                  <Descriptions.Item label="Data de nascimento">{this.state.paciente.dataNascimento}</Descriptions.Item>
                  <Descriptions.Item label="Altura (cm)">{this.state.paciente.altura}</Descriptions.Item>
                  <Descriptions.Item label="Peso (kg)">{this.state.paciente.peso}</Descriptions.Item>
                  <Descriptions.Item label="Grau de Asma">{this.state.paciente.grauAsma}</Descriptions.Item>

                  
                  </Descriptions>
                </Card>
                <h5> </h5>
                <h5> </h5>

                <Card title="Atividades Realizadas:" bordered={true} style={{ width: 800}}>
                <Table dark 
                dataSource={this.state.atividades}>
                  <Column title="Nome" dataIndex="nome" key="nome" align='center'/>                               
                  <Column title="Duração" dataIndex="duracao" key="duracao" align='center'/>
                  <Column title="Data Realizada" dataIndex="dataRealizada" key="dataRealizada" align='center'/> 
                  <Column title="Passos" dataIndex="passos" key="passos" />
                  <Column title="Intensidade" dataIndex="intensidade" key="intensidade" align='center'/>                
                </Table>,
                </Card> 
                <h5> </h5>
                <h5> </h5>
                <Card title="Sintomas:" bordered={true} style={{ width: 800}}>
                  <Table dataSource={this.state.sintomasList}>
                    <Column title="Data" dataIndex="data" key="data" align='center'/>
                    <Column title="Tosse" dataIndex="tosse" key="tosse" align='center'/>
                    <Column title="Chiados no peito" dataIndex="chiado" key="chiado" align='center'/>
                    <Column title="Problemas para dormir" dataIndex="dormir" key="dormir" align='center'/>
                    <Column title="Falta de Ar" dataIndex="faltaDeAr" key="faltaDeAr" align='center'/>
                    <Column title="Uso da Bombinha" dataIndex="bombinha" key="bombinha" align='center'/>
                    <Column title="Observações" dataIndex="observacao" key="observacao" align='center'/>
                  </Table>
                </Card>
                <h5> </h5>
                <h5> </h5>
                <Card title="Meta Mensal:" bordered={true} style={{ width: 800}}>
                  {(!this.state.metaMensal) ?
                  <p>Meta mensal ainda não criada</p>:
                  <>
                  <p>Meta de passos: </p>
                  <p>Meta de horas de atividade: </p>
                  <p> </p>
                  </>
                  }
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
                    label="Duração:"
                    name="duraçao"
                    onChange={this.onChangeDuracao}
                    rules={[
                      {
                        required: true,
                        message: 'Horas de Atividade Física',
                      },
                    ]}>
                    <InputNumber min={0}/> horas
                    </Form.Item>
                    <Form.Item
                    onChange={this.onChangePassos}
                    label="Passos:"
                    name="passos"
                    rules={[
                      {
                        required: true,
                        message: 'Insira o mês',
                      },
                    ]}>
                      <InputNumber min={0}/>
                    </Form.Item>
                    
                    <Form.Item  {...tailLayout}>
                      <Button type="primary" htmlType="submit">
                        Cadastrar
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
                  
  
                </Content>
              </Layout>
            </Layout>
          </Layout>
          </Fragment>
        );
      }
};




export default MedicoPaciente;