//CÓDIGO CERTO
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
const data = [
  {
    key: '5',
    diaDaSemana: 'Sexta',
    tags: ['Tosse', 'Chiado no peito'],
  },
  {
    key: '6',
    diaDaSemana: 'Sábado',
    tags: ['Falta de ar','Dificuldade de dormir'],
  },
  {
    key: '7',
    diaDaSemana: 'Domingo',
    tags: ['Falta de ar','Dificuldade de dormir'],
  },
  {
    key: '1',
    diaDaSemana: 'Segunda',
    tags: ['Tosse', 'Falta de ar'],
    observacoes: 'Muita tosse de manhã'
  },
  {
    key: '2',
    diaDaSemana: 'Terça',
    tags: ['Tosse', 'Chiado no peito'],
  },

];

class DiarioDeSintomas extends Component {
  state={
    tosse:false,
    chiado:false,
    dormir:true,
    faltaDeAr:false,
    observacao:' '
  }
  setSintomas = () =>{
    console.log(this.state.tosse,this.state.chiado,this.state.dormir,this.state.faltaDeAr,this.state.observacao)
    axios.post("https://localhost:8000/api/cadastrarsintomas/",{
      tosse: this.state.tosse,
      chiado: this.state.chiado,
      dormir: this.state.dormir,
      faltaDeAr: this.state.faltaDeAr,
      observacao: this.state.observacao,
      data: '2020-06-07',
      paciente: 2,
    }).then(() => {
      console.log("Deu certo")
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
  onChangeObservacao = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        observacao: e.target.value
    });
  };
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
      const onFinish = values => {
        console.log('Success:', values);
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
          <Link to={'/login'} ><Button>Log Out</Button></Link>
          </Space>
          </Space>
        </div>
      </Header>
      <Layout >
        <MenuLateral valueFromParent={'3'} />
        <Layout style={{ padding: '0 24px 24px' }}>
          <PageHeader
            className="site-page-header"
            title="Diario de Sintomas"
          />
    <Table dataSource={data}>
    <ColumnGroup title='Sintomas da última semana'>
      <Column title="Dia da Semana" dataIndex="diaDaSemana" key="diaDaSemana" />
    <Column
      title="Sintomas"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="red" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
      )}
      />
    <Column title="Observações" dataIndex="observacoes" key="observacoes" />
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
       <Divider orientation='left'>  <span>Teve tosse hoje?</span></Divider>   
      </Tooltip>

      <Radio.Group onChange={this.onChange}  key='tosse'>
        <Radio value={true}>Sim</Radio>
        <Radio value={false}>Não</Radio>
      </Radio.Group>

      <Tooltip title="O chiado no peito também pode ser chamado de “gatinhos no peito” ou “sibilância”,
é um sintoma que acontece frequentemente quando os sintomas da asma pioram. O
ruído (barulho) é agudo e acontece, principalmente, quando o ar entra nos pulmões.
Isto acontece porque o tamanho dos brônquios (vias aéreas) diminui
(broncoconstrição)." placement="topLeft"> 
       <Divider orientation='left'>  <span>Sentiu algum chiado no peito ou “gatinhos no peito" hoje?</span></Divider>   
      </Tooltip>
      <Radio.Group onChange={this.onChangeChiado}  key='chiado'>
        <Radio value={true}>Sim</Radio>
        <Radio value={false}>Não</Radio>
      </Radio.Group>
      
      <Tooltip title="Os sintomas da asma podem mudar a qualidade do seu sono. Uma noite mal
                      dormida pode afetar as atividades do seu dia-a-dia e piorar os sintomas de asma. Por
                      isso, é importante seguir o tratamento, buscando controlar os sintomas e melhorar as
                      noites de sono." placement="topLeft"> 
       <Divider orientation='left'>  <span>Teve problemas para dormir e acordar hoje?</span></Divider>   
      </Tooltip>

      <Radio.Group onChange={this.onChangeDormir} key='dormir'>
        <Radio value={true}>Sim</Radio>
        <Radio value={false}>Não</Radio>
      </Radio.Group>

      <Tooltip title="A falta de ar é a dificuldade de respirar. Algumas pessoas sentem como uma
                      sensação de peso no peito, esforço para respirar e até mesmo quando não consegue
                      respirar fundo. Acontece porque os brônquios (ou vias aéreas) se fecham e dificultam
                      a passagem de ar. Muitas vezes vem junto com o chiado. Costuma aliviar quando usa
                      a “bombinha” (broncodilatador)" arrowPointAtCenter> 
       <Divider orientation='left'>  <span>Sentiu falta de ar hoje?</span></Divider>   
      </Tooltip>

      <Radio.Group onChange={this.onChangeFaltaDeAr} key='FaltaDeAr'>
        <Radio value={true}>Sim</Radio>
        <Radio value={false}>Não</Radio>
      </Radio.Group>
      <Divider> </Divider>
    
    <Form.Item onChange={this.onChangeObservacao} label='Observações:' orientation="left">
        <Input.TextArea />
    </Form.Item>
    <Form.Item {...tailLayout2}>
      <Link to={'/diariodesintomas'}><Button type="primary" onSubmit={this.setSintomas()}>Enviar</Button></Link>
    </Form.Item>
    </Form>
    </Layout>
    </Layout>
    </Layout>
 
    )};
}

export default DiarioDeSintomas;