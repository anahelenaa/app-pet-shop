import React, { Fragment } from "react";
import "./tabela-listagem.css";
import * as FaIcon from "react-icons/fa";
import { Link } from "react-router-dom";
import BotaoExclusao from "../botao-exclusao/BotaoExclusao";

const TabelaListagem = ({ camposTabela, dadosTabela, nomeCampoId, modulo }) => {

  if (dadosTabela.length <= 0) {
    return (
      <Fragment>
        <table>
          <tbody>
            <tr>
              {camposTabela.map((campo, index) => {
                return <th className="th-listagem">{campo.nome}</th>;
              })}
            </tr>

            <tr className="tr-listagem">
              <td className="td-nenhum-item-encontrado">
                Nenhum item encontrado.
              </td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <table>
          <tbody>
            <tr>
              {camposTabela.map((campo, index) => {
                return <th className="th-listagem">{campo.nome}</th>;
              })}
            </tr>

            {dadosTabela.map((dado, index) => {
              return (
                <tr className="tr-listagem">
                  {camposTabela.map((campo, indexCampo) => {
                    if (campo.nomeAtributo === "excluir") {
                      return (
                        <td className="td-acao">
                          <BotaoExclusao modulo={modulo} codigo={dado[nomeCampoId]} />
                        </td>
                      );
                    } else if (campo.nomeAtributo === "editar") {
                      return (
                        <td className="td-acao">
                          <Link to={campo.linkEdicao + dado[nomeCampoId]}>
                            <i className="icone-editar">
                              <FaIcon.FaPen />
                            </i>
                          </Link>
                        </td>
                      );
                    } else if(campo.nomeAtributoSecundario){
                        return (
                            <td className="td-listagem">
                              {dado[campo.nomeAtributo][campo.nomeAtributoSecundario]}
                            </td>
                          );
                    } else {
                      return (
                        <td className="td-listagem">
                          {dado[campo.nomeAtributo]}
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
};

export default TabelaListagem;
