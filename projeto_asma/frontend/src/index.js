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
import HomeMedico from './HomeMedico'
import Videos from './Videos'

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ListaPacientes from './components/ListaPacientes';
import PlantaoDuvidas from './PlantaoDuvidas';
import { PrivateRoute } from './components/PrivateRoute'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      
      <Route path="/login" component={Login} />
      <Route path='/cadastro' component={CadastroPaciente} />

      <PrivateRoute exact path="/informacoes-pessoais" component={DadosPessoais} />
      <PrivateRoute exact path="/cadastro-atividade" component={CadastroAtividades} />
      <PrivateRoute exact path="/atividades" component={ListaAtividades} />
      <PrivateRoute exact path="/metas" component={Metas} />
      <PrivateRoute exact path="/calendario" component={Calendario} />
      <PrivateRoute exact path="/diariodesintomas" component={DiarioDeSintomas} />
      <PrivateRoute exact path="/saude-pessoal" component={SaudePessoal} />
      <PrivateRoute exact path="/estatisticas" component={Estatisticas} />
      <Route path="/faq" component={Faq} />
      <PrivateRoute exact path="/ListaPacientes" component={ListaPacientes} />
      <Route path="/config" component={Configuracao} />
<<<<<<< HEAD
      <Route path="/diariodesintomas" component={DiarioDeSintomas} />
      <Route path="/PlantaoDuvidas" component={PlantaoDuvidas} />
      <Route path="/homemedico" component={HomeMedico} />
      <Route path="/videos" component={Videos} />
=======
      <PrivateRoute exact path="/PlantaoDuvidas" component={PlantaoDuvidas} />
      <PrivateRoute exact path="/home-m" component={HomeMedico} />
>>>>>>> 9edc48d9c5cbb13a615c6eb943f0a46d956ddca7
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
