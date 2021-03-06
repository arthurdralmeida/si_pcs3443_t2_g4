import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cadastro from "./components/Cadastro";
import ListaPacientes from "./components/ListaPacientes";
import DadosPessoais from "./components/DadosPessoais";
import CadastroAtividades from "./components/CadastroAtividades";
import AtividadeComFitBit from "./components/AtividadeComFitBit";
import Login from "./components/Login";
import AlterarDados from "./components/AlterarDados";
import './App.css'
import AlterarSenha from "./components/AlterarSenha";
import ListaAtividades from "./components/ListaAtividades";
import DiarioDeSintomas from "./DiarioDeSintomas"




class App extends Component {
  render() {
    return (
      <Fragment>
        <ListaPacientes/>
      </Fragment>
    );
  }
}

export default App;