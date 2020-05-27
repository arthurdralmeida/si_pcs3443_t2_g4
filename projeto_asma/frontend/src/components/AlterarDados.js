import React, { Component } from "react";
import { Layout, Menu, PageHeader, Space, Form, Select, InputNumber, Input, Button } from 'antd';
import { UserOutlined, 
  FormOutlined,
  QuestionCircleOutlined,
  LineChartOutlined,
  ToolFilled,
  HeartOutlined,
  CalendarOutlined,
  SearchOutlined } from '@ant-design/icons';

class AlterarDados extends Component {
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
            <Button icon={<SearchOutlined />}>Search</Button>
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
                <Menu.Item key="1" icon={<UserOutlined/>}><b>Informações pessoais</b></Menu.Item>
                <Menu.Item key="2" icon={<FormOutlined />}><b>Metas</b></Menu.Item>
                <Menu.Item key="3" icon={<CalendarOutlined />}><b>Calendário</b></Menu.Item>
                <Menu.Item key="4" icon={<QuestionCircleOutlined />}><b>F.A.Q</b></Menu.Item>
                <Menu.Item key="5" icon={<HeartOutlined />}><b>Saúde pessoal</b></Menu.Item>
                <Menu.Item key="6" icon={<LineChartOutlined />}><b>Estatísticas</b></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item key="8" icon={<ToolFilled />}><b>Configurações</b></Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <PageHeader
              onBack={() => null}
              className="site-page-header"
              title="Alterar dados"
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
                >
                  <Input style={{ width: '50%' }}/>
                </Form.Item>

                <Form.Item
                  label="Nome"
                  name="nome"
                >
                  <Input/>
                </Form.Item>

                <Form.Item
                  label="Idade"
                  name="idade"
                >
                  <InputNumber min={1} max={120} defaultValue={0} onChange={onChange} />
                  </Form.Item>
                <Form.Item
                  label="Altura"
                  name="altura"
                >
                  <InputNumber min={60} max={300} defaultValue={0} onChange={onChange} />    cm 
                </Form.Item>

                <Form.Item
                  label="Peso"
                  name="peso"
                >
                  <InputNumber min={1} max={500} defaultValue={0} onChange={onChange} /> kg
                </Form.Item>

                <Form.Item
                  label="Grau de Asma"
                  name="grauAsma"
                >
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

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Atualizar
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

export default AlterarDados;