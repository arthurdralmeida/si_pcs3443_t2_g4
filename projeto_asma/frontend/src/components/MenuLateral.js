import React, { Component } from 'react'
import { Layout, Menu, Space, Form, DatePicker, Input, Select, Button, InputNumber, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined, FileSearchOutlined, FormOutlined, CalendarOutlined, LineChartOutlined, HeartOutlined} from '@ant-design/icons';
  import { Link } from 'react-router-dom'
  import '../App.css'

class MenuLateral extends Component {
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
              <Sider width={240} className="site-layout-background">
                <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                <Menu.Item key="1" icon={<UserOutlined/>}><Link className="link" style={{ textDecoration: 'none', color: '#f1f1f1' }} to="/informacoes-pessoais"><b>Informações pessoais</b></Link></Menu.Item>
                <Menu.Item key="2" icon={<FormOutlined />}><Link style={{ textDecoration: 'none', color: '#f1f1f1'}} to="/cadastro-atividade"><b>Cadastro de Atividade</b></Link></Menu.Item>
                <Menu.Item key="3" icon={<FileSearchOutlined />}><Link style={{ textDecoration: 'none', color: '#f1f1f1',  }} to="/atividades"><b>Visualização de atividades</b></Link></Menu.Item>  
                <Menu.Item key="4" icon={<FormOutlined />}><Link style={{ textDecoration: 'none', color: '#f1f1f1' }} to="/metas"><b>Metas</b></Link></Menu.Item>
                <Menu.Item key="5" icon={<CalendarOutlined />}><Link style={{ textDecoration: 'none', color: '#f1f1f1' }} to="/calendario"><b>Calendário</b></Link></Menu.Item>
                <Menu.Item key="6" icon={<HeartOutlined />}><Link style={{ textDecoration: 'none', color: '#f1f1f1' }} to="/saude-pessoal"><b>Saúde pessoal</b></Link></Menu.Item>
                <Menu.Item key="7" icon={<LineChartOutlined />}><Link style={{ textDecoration: 'none', color: '#f1f1f1' }} to="/estatisticas"><b>Estatísticas</b></Link></Menu.Item>
                <Menu.Item key="8" icon={<QuestionCircleOutlined />}><Link style={{ textDecoration: 'none', color: '#f1f1f1' }} to="/faq"><b>F.A.Q</b></Link></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item key="9" icon={<ToolFilled />}><Link style={{ textDecoration: 'none', color: '#f1f1f1' }} to="/config"><b>Configurações</b></Link></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                </Menu>
              </Sider>
        );
      }
};

export default MenuLateral;