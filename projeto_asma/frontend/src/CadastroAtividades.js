import React, { Component, Fragment } from "react";
import moment from 'moment';
import { Layout, Space, Form, TimePicker, Checkbox, Divider, DatePicker, Input, Select, Button, InputNumber, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined, FileSearchOutlined, FormOutlined, CalendarOutlined, LineChartOutlined, HeartOutlined} from '@ant-design/icons';

import MenuLateral from './components/MenuLateral'
import { Link } from 'react-router-dom'
import './App.css'
class CadastroAtividades extends Component {
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
                    <Form.Item label="Realizada hoje?:">
                    <Checkbox defaultChecked='true' onChange={onChange}><b>Sim</b></Checkbox> <Divider type="vertical" /><Divider type="vertical" /><Divider type="vertical" />
                    Caso não tenha sido hoje, selecione o dia: <DatePicker onChange={onChange} />
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
                    name="atividade"
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
                    rules={[
                      {
                        required: true,
                        message: 'Duração da atividade física',
                      },
                    ]}>
                    <TimePicker style={{ width: '13%' }} defaultValue={moment('00:00', format)} format={format} /> horas
                    </Form.Item>
                    <Form.Item
                    label="Intensidade:"
                    name="intensidade"
                    rules={[
                      {
                        required: true,
                        message: 'Escolha a intensidade',
                      },
                    ]}>
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Escolha a intensidade"
                        optionFilterProp="children"
                        onChange={onChange2}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="Vôlei">Fraca</Option>
                        <Option value="Futebol">Moderada</Option>
                        <Option value="Basquete">Intensa</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item label="Realizada hoje?:">
                    <Checkbox defaultChecked='true' onChange={onChange}><b>Sim</b></Checkbox> <Divider type="vertical" /><Divider type="vertical" /><Divider type="vertical" />
                    Caso não tenha sido hoje, selecione o dia: <DatePicker onChange={onChange} />
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