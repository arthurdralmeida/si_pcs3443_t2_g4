import React, { Component, Fragment } from "react";
import { Layout, Menu, Space, Tabs, Form, Descriptions, Badge, DatePicker, Input, Select, Button, InputNumber, PageHeader, Checkbox, Divider } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined, FileSearchOutlined, 
  FormOutlined,
  LineChartOutlined,
  HeartOutlined,
  CalendarOutlined} from '@ant-design/icons';

  import { Progress } from 'antd';

import MenuLateral from './components/MenuLateral'
import './App.css'
import { Link } from 'react-router-dom'

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

function callback(key) {
  console.log(key);
}
  
class ListaAtividades extends Component {
    render() {
        const { Header, Content, Sider } = Layout;
        const { TabPane } = Tabs;
        const Demo = () => (
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Hoje" key="1">
            <PageHeader
              title="Caminhada ou corrida"
            />
            <Descriptions bordered>
            <Descriptions.Item label="Passos dados">10293</Descriptions.Item>
            <Descriptions.Item label="Horas ativas">1h23</Descriptions.Item>
            <Descriptions.Item label="Metros percorridos⁎">4560m</Descriptions.Item>
            <Descriptions.Item label="Meta de hoje" span={3}>
            <Progress percent={65} status="active" />
            </Descriptions.Item>
          </Descriptions>
          ⁎ = percorridos em média
          <PageHeader
              title="Outras atividades"
            />
          <Descriptions bordered>
            <Descriptions.Item label="Atividade realizada" span={2}>
              Judô
            </Descriptions.Item>
            <Descriptions.Item label="Duração">1h30</Descriptions.Item>
            <Descriptions.Item label="Atividade realizada" span={2}>
              Futebol
            </Descriptions.Item>
            <Descriptions.Item label="Duração">0h30</Descriptions.Item>
            </Descriptions>
            </TabPane>
            <TabPane tab="Esta semana" key="2">
            <PageHeader
              title="Caminhada ou corrida"
            />
            <Descriptions bordered>
            <Descriptions.Item label="Passos dados">10293</Descriptions.Item>
            <Descriptions.Item label="Horas ativas">1h23</Descriptions.Item>
            <Descriptions.Item label="Metros percorridos⁎">4560m</Descriptions.Item>
            <Descriptions.Item label="Meta de hoje" span={3}>
            <Progress percent={65} status="active" />
            </Descriptions.Item>
          </Descriptions>
          ⁎ = percorridos em média
          <PageHeader
              title="Outras atividades"
            />
          <Descriptions bordered>
            <Descriptions.Item label="Atividade realizada" span={2}>
              Judô
            </Descriptions.Item>
            <Descriptions.Item label="Duração">1h30</Descriptions.Item>
            <Descriptions.Item label="Atividade realizada" span={2}>
              Futebol
            </Descriptions.Item>
            <Descriptions.Item label="Duração">0h30</Descriptions.Item>
            </Descriptions>
            </TabPane>
            <TabPane tab="Este mês" key="3">
            <PageHeader
              title="Caminhada ou corrida"
            />
            <Descriptions bordered>
            <Descriptions.Item label="Passos dados">10293</Descriptions.Item>
            <Descriptions.Item label="Horas ativas">1h23</Descriptions.Item>
            <Descriptions.Item label="Metros percorridos⁎">4560m</Descriptions.Item>
            <Descriptions.Item label="Meta de hoje" span={3}>
            <Progress percent={65} status="active" />
            </Descriptions.Item>
          </Descriptions>
          ⁎ = percorridos em média
          <PageHeader
              title="Outras atividades"
            />
          <Descriptions bordered>
            <Descriptions.Item label="Atividade realizada" span={2}>
              Judô
            </Descriptions.Item>
            <Descriptions.Item label="Duração">1h30</Descriptions.Item>
            <Descriptions.Item label="Atividade realizada" span={2}>
              Futebol
            </Descriptions.Item>
            <Descriptions.Item label="Duração">0h30</Descriptions.Item>
            </Descriptions>
            </TabPane>
          </Tabs>
        );
        const layout = {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 16,
          },
        };
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
                <Link to={'/login'} ><Button>Log Out</Button></Link>
                </Space>
                </Space>
              </div>
            </Header>
            <Layout>
              <MenuLateral valueFromParent={'4'} />
              <Layout style={{ padding: '0 24px 24px' }}>
                <PageHeader
                  className="site-page-header"
                  title="Lista de atividades"
                />
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 800
                  }}
                > 
                <Demo />
                </Content>
              </Layout>
            </Layout>
          </Layout>
          </Fragment>
        );
      }
};

export default ListaAtividades;