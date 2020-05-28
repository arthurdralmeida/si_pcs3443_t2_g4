import React, { Component } from "react";
import { Layout, Menu, Space, Form, Input, Select, Button, InputNumber, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined } from '@ant-design/icons';

class Cadastro extends Component {
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
            <Space size={94}>
            <Button icon={<SearchOutlined />}>Search</Button>
            <Button type="primary">Sign Up</Button>
            </Space>
            <Button>Log In</Button>
            </Space>
          </div>
        </Header>
        <Layout>
          <Sider width={240} className="site-layout-background">
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
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Insire um nome de usuário',
                    },
                  ]}
                >
                  <Input style={{ width: '50%' }}/>
                </Form.Item>

                <Form.Item
                  label="Senha"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Insire uma senha válida para sua conta',
                    },
                  ]}
                >
                  <Input.Password style={{ width: '50%' }}/>
                </Form.Item>

                <Form.Item
                  label="Senha novamente"
                  name="password2"
                  rules={[
                    {
                      required: true,
                      message: 'Insire a senha que escolheu novamente',
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
                      message: 'Insire seu nome completo',
                    },
                  ]}
                >
                  <Input/>
                </Form.Item>

                <Form.Item
                  label="Idade"
                  name="idade"
                  rules={[
                    {
                      required: true,
                      message: 'Insire sua idade',
                    },
                  ]}
                >
                  <InputNumber min={1} max={120} defaultValue={0} onChange={onChange} />
                  </Form.Item>
                <Form.Item
                  label="Altura"
                  name="altura"
                  rules={[
                    {
                      required: true,
                      message: 'Insire sua altura',
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
                      message: 'Insire seu peso',
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
                      message: 'Insire seu CPF',
                    },
                  ]}
                >
                  <Input.Group compact>
                    <InputNumber style={{ width: '12%' }} max={999} min={1} />
                    <InputNumber style={{ width: '12%' }} max={999} min={1} />
                    <InputNumber style={{ width: '12%' }} max={999} min={1} />
                    <InputNumber style={{ width: '10%' }} max={99} min={1} />
                  </Input.Group> 
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