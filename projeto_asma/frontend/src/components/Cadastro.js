import React, { Component } from "react";
import { Layout, DatePicker, Menu, Space, Form, Input, Select, Button, InputNumber, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined } from '@ant-design/icons';
import moment from 'moment';

class Cadastro extends Component {
  render() {
    const { Header, Content, Sider } = Layout;
    
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
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
      <Layout>
        <Header className="header">
          
          <div className="logo" />
          <div>
            <Space size={22}>
            <Space size={86}>
            <p style={{color: '#f1f1f1'}}>Projeto Asma</p>
            <Button type="primary">Sign Up</Button>
            </Space>
            <Button>Log In</Button>
            </Space>
          </div>
        </Header>
        <Layout>
          <Sider width={230} className="site-layout-background">
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1" icon={<UserOutlined/>}><b>Cadastro</b></Menu.Item>
                <Menu.Item key="2" icon={<QuestionCircleOutlined />}><b>F.A.Q</b></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item key="8" icon={<ToolFilled />}><b>Configurações</b></Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <PageHeader
              className="site-page-header"
              title="Sign Up"
            />
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
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
                  label="Usuário"
                  name="login"
                  rules={[
                    {
                      required: true,
                      message: 'Insira um nome de usuário',
                    },
                  ]}
                >
                  <Input style={{ width: '50%' }}/>
                </Form.Item>

                <Form.Item
                  label="Senha"
                  name="senha"
                  rules={[
                    {
                      required: true,
                      message: 'Insira uma senha válida para sua conta',
                    },
                  ]}
                >
                  <Input.Password style={{ width: '50%' }}/>
                </Form.Item>

                <Form.Item
                  label="Senha novamente"
                  name="senha2"
                  rules={[
                    {
                      required: true,
                      message: 'Insira a senha que escolheu novamente',
                    },
                  ]}
                >
                  <Input.Password style={{ width: '50%' }}/>
                </Form.Item>

                <Form.Item
                  label="Nome"
                  name="nome"
                  rules={[
                    {
                      required: true,
                      message: 'Insira seu nome completo',
                    },
                  ]}
                >
                  <Input/>
                </Form.Item>

                <Form.Item
                  label="Data de nascimento"
                  name="dataNascimento"
                  rules={[
                    {
                      required: true,
                      message: 'Insira sua data de nascimento',
                    },
                  ]}
                >
                  <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                  </Form.Item>
                <Form.Item
                  label="Altura"
                  name="altura"
                  rules={[
                    {
                      required: true,
                      message: 'Insira sua altura',
                    },
                  ]}
                >
                  <InputNumber min={60} max={300} defaultValue={0} onChange={onChange} />    cm 
                </Form.Item>

                <Form.Item
                  label="Peso"
                  name="peso"
                  rules={[
                    {
                      required: true,
                      message: 'Insira seu peso',
                    },
                  ]}
                >
                  <InputNumber min={1} max={500} defaultValue={0} onChange={onChange} /> kg
                </Form.Item>

                <Form.Item
                  label="CPF"
                  name="cpf"
                  rules={[
                    {
                      required: true,
                      message: 'Insira seu CPF',
                    },
                  ]}
                >
                  <InputNumber style={{ width: '30%' }} max={99999999999} min={1} />
                </Form.Item>

                <Form.Item
                  label="Grau de Asma"
                  name="grauAsma"
                  rules={[
                    {
                      required: true,
                      message: 'Identifique seu grau de asma',
                    },
                  ]}>
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Identifique seu grau de asma"
                    optionFilterProp="children"
                    onChange={onChange2}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="Grave">Grave</Option>
                    <Option value="Leve">Leve</Option>
                    <Option value="Desconheço">Desconheço</Option>
                  </Select>
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

export default Cadastro;