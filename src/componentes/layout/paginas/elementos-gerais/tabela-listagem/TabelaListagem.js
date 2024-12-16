import React, { Fragment } from 'react'
import './tabela-listagem.css'
import * as FaIcon from 'react-icons/fa';

const TabelaListagem = ({camposTabela, dadosTabela}) => {
  return (
    <Fragment>
        <table>
            <tr>
            {
                camposTabela.map((campo, index) => {
                    return (
                        <th className='th-listagem'>{campo.nome}</th>
                    )
                })
            }  
            </tr>

            {
                dadosTabela.map((dado, index) =>{
                    return (
                        <tr>
                            {
                                camposTabela.map((campo, indexCampo) => {
                                    if(campo.nomeAtributo === 'excluir'){
                                        return (<td className='td-acao'> 
                                                    <i className='icone-excluir'><FaIcon.FaTrash/></i> 
                                                </td>)

                                    } else if (campo.nomeAtributo === 'editar'){
                                        return (<td className='td-acao'> 
                                                    <i className='icone-editar'><FaIcon.FaPen/></i> 
                                                </td>)

                                    } else {
                                        return ( <td className='td-listagem'>{dado[campo.nomeAtributo]}</td> ) 

                                    }
                                })
                            }
                        </tr>
                    )
                })
            }

        </table>
        
        
    </Fragment>
  )
}

export default TabelaListagem
