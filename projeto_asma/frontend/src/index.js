import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home'
import Login from './Login';
import CadastroPaciente from './CadastroPaciente'
import DadosPessoais from './DadosPessoais';
import CadastroAtividades from './CadastroAtividades'
import ListaAtividades from './ListaAtividades'
import Metas from './Metas'
import Calendario from './Calendario'
import SaudePessoal from './SaudePessoal'
import Estatisticas from './Estatisticas'
import Faq from './Faq'
import Configuracao from './Configuracao'
import DiarioDeSintomas from './DiarioDeSintomas'

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ListaPacientes from './components/ListaPacientes';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
      <Route path='/cadastro' component={CadastroPaciente} /> 
      <Route path="/informacoes-pessoais" component={DadosPessoais} />
      <Route path="/cadastro-atividade" component={CadastroAtividades} />
      <Route path="/atividades" component={ListaAtividades} />
      <Route path="/metas" component={Metas} />
      <Route path="/calendario" component={Calendario} />
      <Route path="/saude-pessoal" component={SaudePessoal} />
      <Route path="/estatisticas" component={Estatisticas} />
      <Route path="/faq" component={Faq} />
      <Route path="/ListaPacientes" component={ListaPacientes} />
      <Route path="/config" component={Configuracao} />
      <Route path="/diariodesintomas" component={DiarioDeSintomas} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
