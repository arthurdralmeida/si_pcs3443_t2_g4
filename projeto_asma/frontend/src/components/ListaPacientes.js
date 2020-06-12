import React, { Component, Fragment } from "react";
import Highlighter from 'react-highlight-words';
import { Layout, Menu, Space, Table, Form, DatePicker, Input, Select, Button, InputNumber, PageHeader } from 'antd';
import { UserOutlined, 
  QuestionCircleOutlined,
  ToolFilled,
  SearchOutlined, FileSearchOutlined, FormOutlined, CalendarOutlined, LineChartOutlined, HeartOutlined} from '@ant-design/icons';
import MenuLateral from './MenuLateral'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from "reactstrap";
import AtendenteList from "./AtendenteList";
 
const data = [
  {
    key: '1',
    Nome: 'John Brown',
    cpf: 11231232,
    Idade: 32,
    Peso: '67',
    altura: 1.67,
    grauAsma: 2,
    emEsperaDeMedico: 'sim',
  },
  {
    key: '2',
    Nome: 'Joe Black',
    cpf: 11223232,
    Idade: 42,
    Peso: '65',
    altura: 1.70,
    grauAsma: 1,
    emEsperaDeMedico: 'não',
  },
  {
    key: '3',
    Nome: 'Jim Green',
    cpf: 11313123,
    Idade: 20,
    Peso: '70',
    altura: 1.65,
    grauAsma: 3,
    emEsperaDeMedico: 'sim',
  },
  {
    key: '4',
    Nome: 'Jim Red',
    cpf: 11122323,
    Idade: 18,
    Peso: '60',
    altura: 1.73,
    grauAsma: 2,
    emEsperaDeMedico: 'sim',
  },
];

class ListaPacientes extends Component {
    state = {
      searchText: '',
      searchedColumn: '',
      filteredInfo: null,
      sortedInfo: null,
    };

    handleChange = (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      this.setState({
        filteredInfo: filters,
        sortedInfo: sorter,
      });
    };
  
    clearFilters = () => {
      this.setState({ filteredInfo: null });
    };
  
    clearAll = () => {
      this.setState({
        filteredInfo: null,
        sortedInfo: null,
      });
    };
  
    setAgeSort = () => {
      this.setState({
        sortedInfo: {
          order: 'descend',
          columnKey: 'idade',
        },
      });
    };

    getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              this.searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => this.searchInput.select());
        }
      },
      render: text =>
        this.state.searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        ) : (
          text
        ),
    });
  
    handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      this.setState({
        searchText: selectedKeys[0],
        searchedColumn: dataIndex,
      });
    };
  
    handleReset = clearFilters => {
      clearFilters();
      this.setState({ searchText: '' });
    };

    render() {

      let { sortedInfo, filteredInfo } = this.state;
      sortedInfo = sortedInfo || {};
      filteredInfo = filteredInfo || {};

      const columns = [
        {
          title: 'Nome',
          dataIndex: 'Nome',
          key: 'Nome',
          width: '11%',
          ...this.getColumnSearchProps('Nome'),
          filteredValue: filteredInfo.Nome || null,
          onFilter: (value, record) => record.Nome.includes(value),
          sorter: (a, b) => a.Nome.length - b.Nome.length,
          sortOrder: sortedInfo.columnKey === 'Nome' && sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'CPF',
          dataIndex: 'cpf',
          key: 'cpf',
          width: '6%',
          ...this.getColumnSearchProps('cpf'),
          sorter: (a, b) => a.cpf - b.cpf,
          sortOrder: sortedInfo.columnKey === 'cpf' && sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Idade',
          dataIndex: 'Idade',
          key: 'Idade',
          width: '5%',
          ...this.getColumnSearchProps('Idade'),
          sorter: (a, b) => a.Idade - b.Idade,
          sortOrder: sortedInfo.columnKey === 'Idade' && sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Peso',
          dataIndex: 'Peso',
          key: 'Peso',
          width: '5%',
          ...this.getColumnSearchProps('Peso'),
          sorter: (a, b) => a.Peso - b.Peso,
          sortOrder: sortedInfo.columnKey === 'Peso' && sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'altura',
          dataIndex: 'altura',
          key: 'altura',
          width: '5%',
          ...this.getColumnSearchProps('altura'),
          sorter: (a, b) => a.altura - b.altura,
          sortOrder: sortedInfo.columnKey === 'altura' && sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Grau de Asma',
          dataIndex: 'grauAsma',
          key: 'grauAsma',
          width: '7%',
          ...this.getColumnSearchProps('grauAsma'),
          sorter: (a, b) => a.grauAsma - b.grauAsma,
          sortOrder: sortedInfo.columnKey === 'grauAsma' && sortedInfo.order,
          ellipsis: true,
        },
        {
          title: 'Esperando consulta',
          dataIndex: 'emEsperaDeMedico',
          key: 'emEsperaDeMedico',
          width: '9%',
          ...this.getColumnSearchProps('emEsperaDeMedico'),
          filteredValue: filteredInfo.emEsperaDeMedico || null,
          onFilter: (value, record) => record.emEsperaDeMedico.includes(value),
          sorter: (a, b) => a.emEsperaDeMedico.length - b.emEsperaDeMedico.length,
          sortOrder: sortedInfo.columnKey === 'emEsperaDeMedico' && sortedInfo.order,
          ellipsis: true,
        },
      ];
    
        
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
              <MenuLateral valueFromParent={'10'} />
              <Layout style={{ padding: '0 24px 24px' }}>
                <PageHeader
                  className="site-page-header"
                  title="Lista de Pacientes"
                />
                <Content>
                <Table columns={columns} dataSource={data} onChange={this.handleChange}/>
                </Content>
              </Layout>
            </Layout>
          </Layout>
          </Fragment>
        );
      }
};

export default ListaPacientes;