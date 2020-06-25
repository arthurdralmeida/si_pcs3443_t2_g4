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

  state={
    nome:' ',
    passos: 0,
    duracao: 2,
    intensidade: ' ',
    dataRealizada: '2020-05-05',
    paciente: {},
    atividades: [],
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
          dataRealizada: this.state.dataRealizada,
        },
        { headers:{
          'Content-Type': 'application/json',
          'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
        }}).then(() => {
          console.log("Deu certo")
      })
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
    onChangeDataRealizada = e => {
      console.log('radio checked', e.target.value);
      this.setState({
        dataRealizada: e.target.value
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
                    rules={[
                      {
                        required: true,
                        message: 'Duração da atividade física',
                      },
                    ]}>
                    <InputNumber style={{ width: '13%' }}/> horas
                    </Form.Item>
                    <Form.Item
                    label="Passos:"
                    name="passos"
                    onChange={this.onChangePassos}
                    rules={[
                      {
                        required: true,
                        message: 'Quantidade de passos',
                      },
                    ]}>
                      <Input style={{ width: '13%' }}/>
                    </Form.Item>

                    <Form.Item
                    label="Intensidade:"
                    name="intensidade"
                    onChange={this.onChangeIntensidade}
                    rules={[
                      {
                        required: true,
                        message: 'Intensidade',
                      },
                    ]}>
                    <Radio.Group onChange={this.onChangeIntensidade} key='Bombinha'>
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
                    onChange={this.onChangeNome}
                    rules={[
                      {
                        required: true,
                        message: 'Escolha qual exercício você fez',
                      },
                    ]}>
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Escolha uma atividade"
                        optionFilterProp="children"
                        onChange={onChange2}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="Vôlei">Vôlei</Option>
                        <Option value="Futebol">Futebol</Option>
                        <Option value="Basquete">Basquete</Option>
                        <Option value="Remo">Remo</Option>
                        <Option value="Natação">Natação</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                    label="Duração:"
                    name="duraçao"
                    onChange={this.onChangeDuracao}
                    rules={[
                      {
                        required: true,
                        message: 'Duração da atividade física',
                      },
                    ]}>
                    <InputNumber style={{ width: '13%' }}/> horas
                    </Form.Item>
                    <Form.Item
                    label="Intensidade:"
                    name="intensidade"
                    onChange={this.onChangeIntensidade}
                    rules={[
                      {
                        required: true,
                        message: 'Escolha a intensidade',
                      },
                    ]}>
                      <Radio.Group onChange={this.onChangeIntensidade} key='Bombinha'>
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