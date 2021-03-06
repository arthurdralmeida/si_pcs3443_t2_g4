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


class DiarioDeSintomas extends Component {
  state={
    tosse:1,
    chiado:1,
    dormir:1,
    faltaDeAr:1,
    bombinha:1,
    observacao:' ',
    sintomasList:[],
    feito:false,
    paciente: {},
  }
  
  setSintomas = () =>{
    console.log(this.state.tosse,this.state.chiado,this.state.dormir,this.state.faltaDeAr,this.state.bombinha,this.state.observacao)
    axios.post("http://localhost:8000/api/createDiarioDeSintomas/",
      {
        tosse: this.state.tosse,
        chiado: this.state.chiado,
        dormir: this.state.dormir,
        faltaDeAr: this.state.faltaDeAr,
        bombinha: this.state.bombinha,
        observacao: this.state.observacao,
        paciente: this.state.paciente,
        data: '2020-06-24',
      },
      { headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }}).then(() => {
        console.log("Deu certo")
        window.location.reload();
    })
  }
  onChangeTosse = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        tosse: e.target.value
    });
  };
  onChangeChiado = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        chiado: e.target.value
    });
  };
  onChangeDormir = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        dormir: e.target.value
    });
  };
  onChangeFaltaDeAr = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        faltaDeAr: e.target.value
    });
  };
  onChangeBombinha = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        bombinha: e.target.value
    });
  };
  onChangeObservacao = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        observacao: e.target.value
    });
  };

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
      
    axios.get('http://localhost:8000/api/getListDiarioDeSintomasLogged/',
      { headers:{
      'Content-Type': 'application/json',
      'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }})
      .then(res => {
        this.setState({sintomasList: res.data});
        console.log(res.data)
      })
  }


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
        this.setSintomas();      
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
        <MenuLateral valueFromParent={'7'} />
        <Layout style={{ padding: '0 24px 24px' }}>
          <PageHeader
            className="site-page-header"
            title="Diario de Sintomas"
          />
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 1100
                  }}
                > 
    <Table dataSource={this.state.sintomasList}>
    <ColumnGroup title='Sintomas dos últimos dias'>
    <Column title="Data" dataIndex="data" key="data" />
    <Column title="Tosse" dataIndex="tosse" key="tosse" />
    <Column title="Chiados no peito" dataIndex="chiado" key="chiado" />
    <Column title="Problemas para dormir" dataIndex="dormir" key="dormir" />
    <Column title="Falta de Ar" dataIndex="faltaDeAr" key="faltaDeAr" />
    <Column title="Uso da Bombinha" dataIndex="bombinha" key="bombinha" />
    <Column title="Observações" dataIndex="observacao" key="observacao" />
    </ColumnGroup>
    </Table>
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}

    >
     <Divider>Sintomas de Hoje</Divider>
      <Tooltip title="A tosse é uma reação involuntária e um dos principais sintomas da asma. Acontece
mais frequentemente no período da noite ou de manhã cedo. " placement="topLeft"> 
       <Divider orientation='left'>  <span>Em uma escala de 1 a 6, como foi a tosse hoje?</span></Divider>   
      </Tooltip>

      <Radio.Group onChange={this.onChangeTosse}  key='tosse'>
        <Radio value={1}>1</Radio>
        <Radio value={2}>2</Radio>
        <Radio value={3}>3</Radio>
        <Radio value={4}>4</Radio>
        <Radio value={5}>5</Radio>
        <Radio value={6}>6</Radio>
      </Radio.Group>

      <Tooltip title="O chiado no peito também pode ser chamado de “gatinhos no peito” ou “sibilância”,
é um sintoma que acontece frequentemente quando os sintomas da asma pioram. O
ruído (barulho) é agudo e acontece, principalmente, quando o ar entra nos pulmões.
Isto acontece porque o tamanho dos brônquios (vias aéreas) diminui
(broncoconstrição)." placement="topLeft"> 
       <Divider orientation='left'>  <span>Em uma escala de 1 a 6, como foram os chiado no peito ou “gatinhos no peito" hoje?</span></Divider>   
      </Tooltip>
      <Radio.Group onChange={this.onChangeChiado}  key='chiado'>
      <Radio value={1}>1</Radio>
        <Radio value={2}>2</Radio>
        <Radio value={3}>3</Radio>
        <Radio value={4}>4</Radio>
        <Radio value={5}>5</Radio>
        <Radio value={6}>6</Radio>
      </Radio.Group>
      
      <Tooltip title="Os sintomas da asma podem mudar a qualidade do seu sono. Uma noite mal
                      dormida pode afetar as atividades do seu dia-a-dia e piorar os sintomas de asma. Por
                      isso, é importante seguir o tratamento, buscando controlar os sintomas e melhorar as
                      noites de sono." placement="topLeft"> 
       <Divider orientation='left'>  <span>Em uma escala de 1 a 6, teve problemas para dormir e acordar hoje?</span></Divider>   
      </Tooltip>

      <Radio.Group onChange={this.onChangeDormir} key='dormir'>
        <Radio value={1}>1</Radio>
        <Radio value={2}>2</Radio>
        <Radio value={3}>3</Radio>
        <Radio value={4}>4</Radio>
        <Radio value={5}>5</Radio>
        <Radio value={6}>6</Radio>
      </Radio.Group>

      <Tooltip title="A falta de ar é a dificuldade de respirar. Algumas pessoas sentem como uma
                      sensação de peso no peito, esforço para respirar e até mesmo quando não consegue
                      respirar fundo. Acontece porque os brônquios (ou vias aéreas) se fecham e dificultam
                      a passagem de ar. Muitas vezes vem junto com o chiado. Costuma aliviar quando usa
                      a “bombinha” (broncodilatador)" placement="topLeft"> 
       <Divider orientation='left'>  <span>Em uma escala de 1 a 6, sentiu falta de ar hoje?</span></Divider>   
      </Tooltip>

      <Radio.Group onChange={this.onChangeFaltaDeAr} key='FaltaDeAr'>
      <Radio value={1}>1</Radio>
        <Radio value={2}>2</Radio>
        <Radio value={3}>3</Radio>
        <Radio value={4}>4</Radio>
        <Radio value={5}>5</Radio>
        <Radio value={6}>6</Radio>
      </Radio.Group>
      <Divider> </Divider>

      <Tooltip title="A “bombinha” (ou broncodilatador) é usado para aliviar os sintomas da asma. Para
                      o medicamento fazer efeito, é importante seguir as orientações dos profissionais de
                      saúde e usá-lo corretamente. O efeito da “bombinha” (ou broncodilatador) é relaxar os 
                      músculos dos brônquios (vias aéreas) e facilitar a passagem de ar e aliviar os
                      sintomas" placement="topLeft"> 
       <Divider orientation='left'>  <span>Em uma escala de 1 a 6, quanto usou a "bombinha" hoje?</span></Divider>   
      </Tooltip>

      <Radio.Group onChange={this.onChangeBombinha} key='Bombinha'>
      <Radio value={1}>1</Radio>
        <Radio value={2}>2</Radio>
        <Radio value={3}>3</Radio>
        <Radio value={4}>4</Radio>
        <Radio value={5}>5</Radio>
        <Radio value={6}>6</Radio>
      </Radio.Group>
      <Divider> </Divider>
    
    <Form.Item onChange={this.onChangeObservacao} label='Observações:' orientation="left">
        <Input.TextArea />
    </Form.Item>
    <Form.Item {...tailLayout2}>
    <Button type="primary" htmlType="submit">
          Enviar 
          </Button>
      </Form.Item>
    </Form>
    </Content>
    </Layout>
    </Layout>
    </Layout>
 
    )};
}

export default DiarioDeSintomas;