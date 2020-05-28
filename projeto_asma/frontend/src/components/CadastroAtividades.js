import React, { Component } from 'react'
import { Layout, Menu, Space, Form, DatePicker, Input, Select, Button, InputNumber, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined, FileSearchOutlined, FormOutlined, CalendarOutlined, LineChartOutlined, HeartOutlined} from '@ant-design/icons';

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
                <Button>Log Out</Button>
                </Space>
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
                <Menu.Item key="3" icon={<UserOutlined/>}><b>Informações pessoais</b></Menu.Item>
                <Menu.Item key="1" icon={<FormOutlined />}><b>Cadastro de Atividade</b></Menu.Item>
                <Menu.Item key="2" icon={<FileSearchOutlined />}><b>Visualização de atividades</b></Menu.Item>  
                <Menu.Item key="4" icon={<FormOutlined />}><b>Metas</b></Menu.Item>
                <Menu.Item key="5" icon={<CalendarOutlined />}><b>Calendário</b></Menu.Item>
                <Menu.Item key="6" icon={<HeartOutlined />}><b>Saúde pessoal</b></Menu.Item>
                <Menu.Item key="7" icon={<LineChartOutlined />}><b>Estatísticas</b></Menu.Item>
                <Menu.Item key="8" icon={<QuestionCircleOutlined />}><b>F.A.Q</b></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item key="9" icon={<ToolFilled />}><b>Configurações</b></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <PageHeader
                  className="site-page-header"
                  title="Cadastrar atividade"
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
                    <Form.Item label="Nome do paciente:">
                    <Input style={{ width: '40%' }}/>
                     </Form.Item>

                    <Form.Item label="Atividade:">
                    <Input style={{ width: '40%' }}/>
                    </Form.Item>

                    <Form.Item label="Meta mensal:">
                        <InputNumber min={0} defaultValue={0} onChange={onChange} /> km
                    </Form.Item>

                    <Form.Item label="Duração:">
                         <InputNumber min={0} defaultValue={0} max={1440} onChange={onChange} /> em minutos
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
};

export default CadastroAtividades;