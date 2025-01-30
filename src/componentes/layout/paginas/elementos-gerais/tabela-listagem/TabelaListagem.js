import React, { Fragment } from 'react'
import './tabela-listagem.css'
import * as FaIcon from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TabelaListagem = ({camposTabela, dadosTabela, nomeCampoId}) => {
  return (
    <Fragment>
        <table>
            <tbody>
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
                            <tr className='tr-listagem'>
                                {
                                    camposTabela.map((campo, indexCampo) => {
                                        if(campo.nomeAtributo === 'excluir'){
                                            return (<td className='td-acao'> 
                                                        <i className='icone-excluir'><FaIcon.FaTrash/></i> 
                                                    </td>)

                                        } else if (campo.nomeAtributo === 'editar'){
                                            return (<td className='td-acao'> 
                                                        <Link to={campo.linkEdicao + dado[nomeCampoId]}>
                                                            <i className='icone-editar'><FaIcon.FaPen/></i> 
                                                        </Link>
                                                        
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
            </tbody>
        </table>
        
        
    </Fragment>
  )
}

export default TabelaListagem
