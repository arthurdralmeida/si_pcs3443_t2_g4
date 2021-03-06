import React, { Component } from 'react'
import { Layout, Menu, Space, Form, DatePicker, Input, Select, Button, InputNumber, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined, MessageOutlined, FileSearchOutlined, SolutionOutlined, FormOutlined, ProfileOutlined, CalendarOutlined, LineChartOutlined, HeartOutlined, HomeOutlined, YoutubeOutlined,CloudUploadOutlined} from '@ant-design/icons';
  import { Link } from 'react-router-dom'
  import '../App.css'

class MenuLateral extends Component {
    state = {
      paciente: {},
      medico: {},
    }

    componentDidMount(){
      this.setState({ paciente: JSON.parse(sessionStorage.getItem('paciente'))})
      this.setState({ medico: JSON.parse(sessionStorage.getItem('medico'))})
    }
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
                  defaultSelectedKeys={[this.props.valueFromParent]}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  {this.state.paciente &&
                    <Menu.Item key="1" icon={<HomeOutlined />}><Link className="link" style={{ textDecoration: 'none', color: '#f1f1f1' }} to="/"><b>Home</b></Link></Menu.Item>
                  }
                  {this.state.paciente &&
                    <Menu.Item key="2" icon={<UserOutlined/>}><Link className="link" style={{ textDecoration: 'none', color: '#f1f1f1' }} to="/informacoes-pessoais"><b>Informações pessoais</b></Link></Menu.Item>
                  }
                  {this.state.paciente &&
                    <Menu.Item key="3" icon={<FormOutlined />}><Link style={{ textDecoration: 'none', color: '#f1f1f1'}} to="/cadastro-atividade"><b>Atividade</b></Link></Menu.Item>
                  }
                  {this.state.paciente &&
                    <Menu.Item key="4" icon={<CloudUploadOutlined />}><Link style={{ textDecoration: 'none', color: '#f1f1f1'}} to="/fitbit"><b>FitBit</b></Link></Menu.Item>
                  }
                  {this.state.paciente &&
                    <Menu.Item key="7" icon={<HeartOutlined />}><Link style={{ textDecoration: 'none', color: '#f1f1f1' }} to="/diariodesintomas"><b>Diário de Sintomas</b></Link></Menu.Item>
                  }
                  {this.state.paciente &&
                    <Menu.Item key="11" icon={<MessageOutlined />}><Link style={{ textDecoration: 'none', color: '#f1f1f1' }} to="/PlantaoDuvidas"><b>Plantão de Dúvidas</b></Link></Menu.Item>
                  }
                  {this.state.medico &&
                    <Menu.Item key="13" icon={<HomeOutlined />}><Link className="link" style={{ textDecoration: 'none', color: '#f1f1f1' }} to="/home"><b>Home</b></Link></Menu.Item>
                  }
                <Menu.Item key="12" icon={<YoutubeOutlined />}><Link style={{ textDecoration: 'none', color: '#f1f1f1' }} to="/videos"><b>Videos de Exercícios</b></Link></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                <Menu.Item disabled="true"></Menu.Item>
                </Menu>
              </Sider>
        );
      }
};

export default MenuLateral;