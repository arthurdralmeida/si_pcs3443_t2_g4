import React, { Component } from "react";
import moment from 'moment';
import { Layout, Menu,  Radio, DatePicker, Space, Form, Input, Select, Button, InputNumber, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { login } from "./actions/auth";

class CadastroPaciente extends Component {
  state={
    username:' ',
    password:' ',
    nome:' ',
    dataNascimento:'2020-05-05',
    peso:0,
    grauAsma:0,
    altura:0,
    cpf:' ',
    emEsperaDeMedico:false,
    cadastro:false,
  }
  setPaciente = () =>{
    console.log(this.state.username, this.state.password, this.state.nome,this.state.dataNascimento,this.state.peso,this.state.grauAsma,this.state.altura,this.state.cpf,this.state.emEsperaDeMedico,this.state.cadastro)
    axios.post("http://localhost:8000/api/createPaciente/",
      {
        email: this.state.username,
        password: this.state.password,
        nome: this.state.nome,
        dataNascimento: this.state.dataNascimento,
        peso: this.state.peso,
        grauAsma: this.state.grauAsma,
        altura: this.state.altura,
        cpf: this.state.cpf,
        emEsperaDeMedico: true,
      }).then(() => {
        console.log("Deu certo")
    })
  }
  onChangeUsername = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      username: e.target.value
    });
  };
  onChangePassword = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      password: e.target.value
    });
  };
  onChangeNome = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      nome: e.target.value
    });
  };
  onChangeDataNascimento = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      dataNascimento: e.target.value
    });
  };
  onChangePeso = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        peso: e.target.value
    });
  };
  onChangeGrauAsma = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        grauAsma: e.target.value
    });
  };
  onChangeAltura = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        altura: e.target.value
    });
  };
  onChangeCPF = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        cpf: e.target.value
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
    
    function onBlur() {
      console.log('blur');
    }
    
    function onFocus() {
      console.log('focus');
    }
    
    function onSearch(val) {
      console.log('search:', val);
    }
    function onChange(value) {
      console.log('changed', value);
    }
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const tailLayout = {
      wrapperCol: {
        offset: 6,
        span: 16,
      },
    };
      const onFinish = () => {
        console.log('Success:', this.state);
        this.setPaciente();
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
            <Space size={86}>
            <p style={{color: '#f1f1f1'}}>Projeto Asma</p>
            </Space>
            </Space>
          </div>
        </Header>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <PageHeader
              className="site-page-header"
              title="Registro"
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
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Nome"
                  name="name"
                  onChange={this.onChangeNome}
                >
                  <Input style={{ width: '50%' }}/>
                </Form.Item>

                <Form.Item
                  label="Senha"
                  name="password"
                  onChange={this.onChangePassword}
                >
                  <Input.Password style={{ width: '50%' }}/>
                </Form.Item>

                <Form.Item
                  label="Senha novamente"
                  name="password2"
                  onChange={this.onChangePassword}
                >
                  <Input.Password style={{ width: '50%' }}/>
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  onChange={this.onChangeUsername}
                >
                  <Input style={{ width: '50%' }}/>
                </Form.Item>

                <Form.Item
                  label="Data de nascimento"
                  name="dataNascimento"
                  onChange={this.onChangeDataNascimento}
                >
                   <Input style={{ width: '20%' }}/>   (dd/mm/yyyy)
                  </Form.Item>
                <Form.Item
                  label="Altura"
                  name="altura"
                  onChange={this.onChangeAltura}
                >
                  <InputNumber min={60} max={300} defaultValue={0} />    cm 
                </Form.Item>

                <Form.Item
                  label="Peso"
                  name="peso"
                  onChange={this.onChangePeso}
                >
                  <InputNumber min={1} max={500} defaultValue={0} /> kg
                </Form.Item>

                <Form.Item
                  label="CPF"
                  name="cpf"
                  onChange={this.onChangeCPF}
                >
                  <Input  style={{ width: '50%' }}/> 
                </Form.Item>

                <Form.Item
                  label="Grau de Asma"
                  name="grauAsma"
                >
                  <Radio.Group onChange={this.onChangeGrauAsma} key='grauAsma'>
                      <Radio value="Grave">Grave</Radio>
                        <Radio value="Leve">Leve</Radio>
                        <Radio value="Desconheço">Desconheço</Radio>
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
    );
  }
}

export default CadastroPaciente;