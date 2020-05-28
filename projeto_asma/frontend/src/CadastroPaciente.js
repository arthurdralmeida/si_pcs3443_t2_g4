import React, { Component } from "react";
import moment from 'moment';
import { Layout, Menu, DatePicker, Space, Form, Input, Select, Button, InputNumber, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined } from '@ant-design/icons';

class CadastroPaciente extends Component {
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
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Nome"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Insire seu nome completo',
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
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Insire seu email',
                    },
                  ]}
                >
                  <Input  style={{ width: '50%' }}/>
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

export default CadastroPaciente;