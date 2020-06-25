import React, { Component, Fragment } from "react";
import moment from 'moment';
import { Layout, Menu, Space, Card, Form, Divider, Comment, Tooltip, List, Avatar, Descriptions, Badge, DatePicker, Input, Select, Button, InputNumber, PageHeader, Row } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  FileSearchOutlined, FormOutlined, CalendarOutlined, LineChartOutlined, HeartOutlined} from '@ant-design/icons';
import axios from 'axios'
import MenuLateral from './components/MenuLateral'
import './App.css'
import { Link } from 'react-router-dom'
class PlantaoDuvidas extends Component {
  getMessages = () => {
    axios.get("http://localhost:8000/api/getAllMessagesFromAlocacao/",
      { headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }}).then(res => this.setState({ atividadesList: res.data }));
  };
  getListofMessages = () => {
    axios.get("http://localhost:8000/api/getListofMessages/",
      { headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }}).then(res => this.setState({ atividadesList: res.data }));
  };
  getListofMessagesReceived = () => {
    axios.get("http://localhost:8000/api/getListofMessagesReceived/",
      { headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }}).then(res => this.setState({ atividadesList: res.data }));
  };
  setMessage = () =>{
    console.log(this.state.messageList);
    console.log(this.state.message,this.state.alocacao,this.state.data,this.state.ativo)
    axios.post("http://localhost:8000/api/createMessage/",
      {
        message: this.state.message,
        alocacao: this.state.alocacao,
        data: this.state.data,
        ativo: this.state.ativo,
      },
      { headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }}).then(() => {
        console.log("Deu certo")
        window.location.reload(false);
    })
  }
  onChangeMessage = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        message: e.target.value
    });
  };
  onChangeAlocacao = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        alocacao: e.target.value
    });
  };
  onChangeData = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        data: e.target.value
    });
  };
  onChangeAtivo = e => {
    console.log('radio checked', e.target.value);
    this.setState({
        ativo: e.target.value
    });
  };

    render() {
        const { Header, Content, Sider } = Layout;
        const data = [
          {
            author: 'Paciente 23',
            avatar: <Avatar size="large" icon={<UserOutlined />} />,
            content: (
              <p>
                Eu acho que 9 meses atrás, posso marcar um exame com o senhor?
              </p>
            ),
            datetime: (
              <Tooltip
                title={moment()
                  .subtract(10, 'minutes')
                  .format('DD-MM-YYYY HH:mm:ss')}
              >
                <span>
                  {moment()
                    .subtract(10, 'minutes')
                    .fromNow()}
                </span>
              </Tooltip>
            ),
          },
          {
            author: 'Doutor Roberto',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
              <p>
                Olá Paciente 23. É incomum ocorrer Z junto com X e Y, porém não costuma ser nada sério.
                Qual foi a última vez que o senhor veio ao hospital para realizar um exame geral?
              </p>
            ),
            datetime: (
              <Tooltip
                title={moment()
                  .subtract(30, 'minutes')
                  .format('DD-MM-YYYY HH:mm:ss')}
              >
                <span>
                  {moment()
                    .subtract(30, 'minutes')
                    .fromNow()}
                </span>
              </Tooltip>
            ),
          },
          {
            author: 'Paciente 23',
            avatar: <Avatar size="large" icon={<UserOutlined />} />,
            content: (
              <p>
                Bom dia, nos últimos dias tive X e Y como costumo ter, porém ontem também tive Z. 
                O que quase nunca ocorre com X e Y, devo me preocupar?
              </p>
            ),
            datetime: (
              <Tooltip
                title={moment()
                  .subtract(2, 'hours')
                  .format('DD-MM-YYYY HH:mm:ss')}
              >
                <span>
                  {moment()
                    .subtract(2, 'hours')
                    .fromNow()}
                </span>
              </Tooltip>
            ),
          }
        ];
        const gridStyle = {
          textAlign: 'center',
        };
        const layout = {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 18,
          },
        };
        const { TextArea } = Input;
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
              <MenuLateral valueFromParent={'11'} />
              <Layout style={{ padding: '0 24px 24px' }}>
                <PageHeader
                  className="site-page-header"
                  title="Plantão de dúvidas"
                />
               <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 1100
              }}
            >

            <Card title="Novo comentário" style={{ width: 700 }, {textAlign: 'center'}}>
            <Form
              {...layout}
               name="basic"
               style={{textAlign: 'center'}}
               initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
             >
              <Form.Item onChange={this.onChangeMessage}>
              <TextArea rows={4}/></Form.Item>
              
              <Button type="primary">Submeter</Button>
            </Form>
            </Card>
            <Divider/>
            <List
            className="comment-list"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <li>
                <Comment
                  actions={item.actions}
                  author={item.author}
                  avatar={item.avatar}
                  content={item.content}
                  datetime={item.datetime}
                />
              </li>
            )}
          />
            </Content>
              </Layout>
            </Layout>
          </Layout>
          </Fragment>
          
        );
      }
};

export default PlantaoDuvidas;