import React, { Component, Fragment } from "react";
import { Layout,  Space, Calendar, Badge, Select, Button, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined, FileSearchOutlined, FormOutlined, CalendarOutlined, LineChartOutlined, HeartOutlined} from '@ant-design/icons';

import axios from 'axios'
import moment from 'moment';
import MenuLateral from './components/MenuLateral'
import './App.css'
import { Link } from 'react-router-dom'
class Calendario extends Component {

  getAtividades = () => {
    axios.get("http://localhost:8000/api/getListAtividadeLogged/",
      { headers:{
      'Content-Type': 'application/json',
      'Authorization': `Token ${JSON.parse(sessionStorage.getItem('token'))}`,
      }}).then(res => this.setState({ atividadesList: res.data }));
  };

    render() {
        const { Header, Content, Sider } = Layout;
        function getListData(value) {
          let listData;
          switch (value.date()) {
            case 16:
              listData = [
                { type: 'error', content: 'Sem atividade' },
              ];
              break;
            case 10:
              listData = [
                { type: 'warning', content: 'Abaixo da meta' },
              ];
              break;
            case 12:
                listData = [
                  { type: 'warning', content: 'Abaixo da meta' },
                ];
                break;
            case 15:
              listData = [
                { type: 'success', content: 'Atingiu meta' },
              ];
              break;
            default:
          }
          return listData || [];
        }
        
        function dateCellRender(value) {
          const listData = getListData(value);
          return (
            <ul className="events">
              {listData.map(item => (
                <li key={item.content}>
                  <Badge status={item.type} text={item.content} />
                </li>
              ))}
            </ul>
          );
        }
        function getMonthData(value) {
          if (value.month() === 8) {
            return ;
          }
        }
        
        function monthCellRender(value) {
          const num = getMonthData(value);
          return num ? (
            <div className="notes-month">
              <section>{num}</section>
              <span>Backlog number</span>
            </div>
          ) : null;
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
              <MenuLateral valueFromParent={'6'} />
              <Layout style={{ padding: '0 24px 24px' }}>
                <PageHeader
                  className="site-page-header"
                  title="Calendário de atividades"
                />
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 800
                  }}
                > 
                <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
                
                </Content>
              </Layout>
            </Layout>
          </Layout>
          </Fragment>
        );
      }
};

export default Calendario;