import React, { Component } from "react";
import { Table } from "reactstrap";
import { Button } from 'antd'


class AtendenteList extends Component {
  render() {
    const atendentes = this.props.atendentes;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {!atendentes || atendentes.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            atendentes.map(atendente => (
              <tr key={atendente.pk}>
                <td>{atendente.nome}</td>
                <td>{atendente.email}</td>
                <td><Button type="dashed">Oi</Button></td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default AtendenteList;