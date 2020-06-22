import React, { Component, Fragment } from "react";
import { Card } from 'antd';
import { Layout, Menu, Space, Form, DatePicker, Input, Select, Button, InputNumber, PageHeader, Checkbox } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined, FileSearchOutlined, FormOutlined, CalendarOutlined, LineChartOutlined, HeartOutlined} from '@ant-design/icons';

  import { Progress, Result, Carousel, Tabs } from 'antd';
import MenuLateral from './components/MenuLateral'
import './App.css'
import { Link } from 'react-router-dom'

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

class Home extends Component { 
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
        
        function onChange(a, b, c) {
          console.log(a, b, c);
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

          const { TabPane } = Tabs;
          
          function callback(key) {
            console.log(key);
          }


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
              <MenuLateral valueFromParent={'1'} />
              <Layout style={{ padding: '0 24px 24px' }}>
                <PageHeader
                  className="site-page-header"
                  title="Página Principal"
                />
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 800
                  }}
                > 

                <Card title="Meta de Passos:" bordered={true} style={{ width: 500 }} theme="dark">
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
                  
                  name="MetaPassos" 
                >
                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Hoje" key="1">
                        <h5>Hoje - 07/06/2020</h5>
                        <h6> </h6>
                        <Progress type="circle" percent={0} />
                    </TabPane>
                    <TabPane tab="Sábado" key="2">
                        <h5>sábado - 06/06/2020</h5>
                        <h6> </h6>
                        <Progress type="circle" percent={50} />
                    </TabPane>
                    <TabPane tab="Sexta-feira" key="3">
                        <h5>sexta-feira - 05/06/2020</h5>
                        <h6> </h6>
                        <Progress type="circle" percent={75} />
                    </TabPane>
                    <TabPane tab="Quinta-feira" key="4">
                        <h5>quinta-feira - 04/06/2020</h5>
                        <h6> </h6>
                        <Progress type="circle" percent={100} />
                    </TabPane>
                    <TabPane tab="Quarta-feira" key="5">
                        <h5>quarta-feira - 03/06/2020</h5>
                        <h6> </h6>
                        <Progress type="circle" percent={25} />
                    </TabPane>
                    <TabPane tab="Terça-feira" key="6">
                        <h5>terça-feira - 02/06/2020</h5>
                        <h6> </h6>
                        <Progress type="circle" percent={5} />
                    </TabPane>
                    <TabPane tab="Segunda-feira" key="7">
                        <h5>segunda-feira - 01/06/2020</h5>
                        <h6> </h6>
                        <Progress type="circle" percent={100} />
                    </TabPane>
                    </Tabs>

                </Form.Item>                
              </Form>
              </Card>

              <h5>  </h5>
              <Card dark title = "Diário de Sintomas:" bordered={false} style={{ width: 500 }}>
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
                  name="DiarioDeSintomas:"
                  >
                    <Result
                        status="success"
                        title="Diário de Sintomas Salvo!"/>
                  </Form.Item>

                </Form>
              </Card>

              <h5>  </h5>
              <Card dark title = "Atividade Física" bordered={false} style={{ width: 500 }}>
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
                  name="Atividade Física:"
                  >
                    <h5>Correr</h5>
                    <h5>Jogar um fut</h5>
                    <h5>Nadar</h5>
                  </Form.Item>

                </Form>
              </Card>          

                </Content>
              </Layout>
            </Layout>
          </Layout>
          </Fragment>
        );
      }
};




export default Home;