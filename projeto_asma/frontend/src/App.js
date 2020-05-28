import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cadastro from "./components/Cadastro";
import DadosPessoais from "./components/DadosPessoais";
import CadastroAtividades from "./components/CadastroAtividades";
import AtividadeComFitBit from "./components/AtividadeComFitBit";
import Login from "./components/Login";
import AlterarDados from "./components/AlterarDados";
import './App.css'
import AlterarSenha from "./components/AlterarSenha";
import ListaAtividades from "./components/ListaAtividades";



class App extends Component {
  render() {
    return (
      <Fragment>
        <ListaAtividades/>
      </Fragment>
    );
  }
}

export default App;