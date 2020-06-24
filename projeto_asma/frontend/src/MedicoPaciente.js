import React, { Component, Fragment } from "react";
import { Card } from 'antd';
import { Layout, Menu, Space, Form, TimePicker, Divider, Descriptions, Badge, DatePicker, Input, Select, Button, InputNumber, PageHeader, Checkbox } from 'antd';
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
    
  };
  componentDidMount() {
    this.resetState();
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
            const nome = paciente.nome; 
          
          
          

          
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
                  <Descriptions.Item label="Nome" span={2}>{paciente.nome}</Descriptions.Item>
                  <Descriptions.Item label="Data de nascimento">{paciente.dataNascimento}</Descriptions.Item>
                  <Descriptions.Item label="Altura">{paciente.altura}</Descriptions.Item>
                  <Descriptions.Item label="Grau de Asma">{paciente.grauAsma}</Descriptions.Item>
                  <Descriptions.Item label="Meta desta semana" span={3}>
                    <Badge status="success" text="Atingida" />
                  </Descriptions.Item>
                  <Descriptions.Item label="Membro desde">2020-04-24</Descriptions.Item>
                  
                  </Descriptions>
                </Card>
                <h5> </h5>
                <h5> </h5>

                <Card title="Atividades Cadastradas:" bordered={true} style={{ width: 800}}>
                <Table dark 
                dataSource={atividades}>
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
                <h5> </h5>
                <h5> </h5>
                <Card title="Cadastrar Atividade:" bordered={true} style={{ width: 800}}>
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
                    label="Intensidade:"
                    name="intensidade"
                    rules={[
                      {
                        required: true,
                        message: 'Escolha qual exercício você fez',
                      },
                    ]}>
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Caminhada ou corrida"
                        optionFilterProp="children"
                        onChange={onChange2}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="Corrida">Corrida</Option>
                        <Option value="Caminhada">Caminhada</Option>
                        <Option value="Ambos">Ambos</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                    label="Duração:"
                    name="duraçao"
                    rules={[
                      {
                        required: true,
                        message: 'Duração da atividade física',
                      },
                    ]}>
                    <TimePicker style={{ width: '13%' }} defaultValue={moment('00:00', format)} format={format} /> horas
                    </Form.Item>
                    <Form.Item
                    label="Passos:"
                    name="passos"
                    rules={[
                      {
                        required: true,
                        message: 'Quantidade de passos',
                      },
                    ]}>
                      <Input style={{ width: '13%' }}/>
                    </Form.Item>
                    <Form.Item label="Realizadar hoje?:">
                    <Checkbox defaultChecked='true' onChange={onChange}><b>Sim</b></Checkbox> <Divider type="vertical" /><Divider type="vertical" /><Divider type="vertical" />
                    Caso não tenha sido hoje, selecione o dia: <DatePicker onChange={onChange} />
                    </Form.Item>
                    
                    <Form.Item {...tailLayout}>
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