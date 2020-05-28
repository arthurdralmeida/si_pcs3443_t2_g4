import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home'
import Login from './Login';
import DadosPessoais from './DadosPessoais';
import CadastroAtividades from './CadastroAtividades'
import ListaAtividades from './ListaAtividades'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/informacoes-pessoais" component={DadosPessoais} />
      <Route path="/cadastro-atividade" component={CadastroAtividades} />
      <Route path="/atividades" component={ListaAtividades} />
      <Route path="/metas" />
      <Route path="/calendario"/>
      <Route path="/saude-pessoal" />
      <Route path="/estatisticas" />
      <Route path="/faq"/>
      <Route path="/config" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
