import React, { Component, Fragment } from "react";
import moment from 'moment';
import { Layout, Space, Radio, Form, TimePicker, Checkbox, Divider, DatePicker, Input, Select, Button, InputNumber, PageHeader,Progress, Result, Carousel, Tabs, Table, Card } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined, FileSearchOutlined, FormOutlined, CalendarOutlined, LineChartOutlined, HeartOutlined} from '@ant-design/icons';

import MenuLateral from './components/MenuLateral'
import { Link } from 'react-router-dom'
import axios from "axios";
import './App.css'

const { Column, ColumnGroup } = Table;

const gridStyle = {
  width: '50%',
  textAlign: 'center',
};

class CadastroAtividades extends Component {
  state2 = {
    disabled: true,
  };
  state={
    nome:'Caminhada/Corrida',
    passos: 0,
    duracao: 0,
    intensidade: 0,
    dataRealizada: '2020-06-25',
    atividades:[],
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
      console.log('paciente: ', res.data)
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
      
    }

    setAtividade = () =>{
      console.log(this.state.nome, this.state.passos, this.state.duracao,this.state.intensidade,this.state.dataRealizada)
      axios.post("http://localhost:8000/api/createAtividadeLogged/",
        {
          nome: this.state.nome,
          passos: this.state.passos,
          duracao: this.state.duracao,
          intensidade: this.state.intensidade,
          dataRealizada: '2020-06-26',
          paciente: this.state.paciente,
        },
        { headers:{
          'Content-Type': 'application/json',
          'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
        }}).then(() => {
          console.log("Deu certo")
          window.location.reload();
      })
      window.location.reload();
    }
    onChangeNome = e => {
      console.log('radio checked', e.target.value);
      this.setState({
        nome: e.target.value
      });
    };
    onChangePassos = e => {
      console.log('radio checked', e.target.value);
      this.setState({
        passos: e.target.value
      });
    };
    onChangeDuracao = e => {
      console.log('radio checked', e.target.value);
      this.setState({
        duracao: e.target.value
      });
    };
    onChangeIntensidade = e => {
      console.log('radio checked', e.target.value);
      this.setState({
        intensidade: e.target.value
      });
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
        const normFile = e => {
          console.log('Upload event:', e);
          if (Array.isArray(e)) {
              return e;
          }
          return e && e.fileList;
          };
        const renderLogout = () => {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('user');
          sessionStorage.removeItem('paciente');
          sessionStorage.removeItem('medico');
        }
        
        function onBlur() {
          console.log('blur');
        }
        const format = 'HH:mm';
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
            console.log('Success:', this.state);
            this.setAtividade();
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
              <MenuLateral valueFromParent={'3'} />
              <Layout style={{ padding: '0 24px 24px' }}>
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
              <Divider/>


                <PageHeader
                  className="site-page-header"
                  title="Caminhada ou corrida"
                />
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 800
                  }}
                > 
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
                    >
                    <InputNumber style={{ width: '13%' }} min={0.1} max={15}/> horas
                    </Form.Item>
                    <Form.Item
                    label="Passos:"
                    name="passos"
                    onChange={this.onChangePassos}
                    >
                      <InputNumber style={{ width: '13%' }} min={0.1}/>
                    </Form.Item>

                    <Form.Item
                    label="Intensidade:"
                    name="intensidade"
                    >
                    <Radio.Group onChange={this.onChangeIntensidade} key='intensidade'>
                      <Radio value={1}>Leve</Radio>
                        <Radio value={2}>Moderado</Radio>
                        <Radio value={3}>Forte</Radio>
                      </Radio.Group>
                    </Form.Item>
                    
                    <Form.Item {...tailLayout}>
                      <Button type="primary" htmlType="submit">
                        Cadastrar
                      </Button>
                    </Form.Item>
                  </Form>
                  <Divider dashed/>
                  <PageHeader
                  className="site-page-header"
                  title="Outra atividade"
                  />
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
                    label="Atividade:"
                    name="nome"
                    >
                      <Radio.Group onChange={this.onChangeNome} key='intensidade'>
                      <Radio value={'Volei'}>Vôlei</Radio>
                        <Radio value={'Futebol'}>Futebol</Radio>
                        <Radio value={'Remo'}>Remo</Radio>
                        <Radio value={'Natação'}>Natação</Radio>
                        <Radio value={'Basquete'}>Basquete</Radio>
                        <Radio value={'Musculação'}>Musculação</Radio>
                      </Radio.Group>
                    </Form.Item>

                    <Form.Item
                    label="Duração:"
                    name="duraçao"
                    onChange={this.onChangeDuracao}
                    >
                    <InputNumber style={{ width: '13%' }} min={0.1} max={15}/> horas
                    </Form.Item>
                    <Form.Item
                    label="Intensidade:"
                    name="intensidade"
                    >
                      <Radio.Group onChange={this.onChangeIntensidade} key='intensidade'>
                      <Radio value={1}>Leve</Radio>
                        <Radio value={2}>Moderado</Radio>
                        <Radio value={3}>Forte</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                      <Button type="primary" htmlType="submit">
                        Cadastrar
                      </Button>
                    </Form.Item>
                  </Form>
                </Content>
                
              </Layout>
              
            </Layout>
            
          </Layout>
          </Fragment>
        );
      }
};

export default CadastroAtividades;