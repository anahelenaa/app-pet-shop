import {React, useState} from 'react'
import Topo from '../elementos-gerais/topo-listagem/Topo'
import MenuLateral from '../../elementos/menu-lateral/MenuLateral'
import Header from '../../elementos/header/Header'
import TabelaListagem from '../elementos-gerais/tabela-listagem/TabelaListagem'
import CamposListagemCliente from './CamposListagemCliente'
import ListagemClientesApi from '../../../api/ListagemClientesApi'
import './listagem-cliente.css'

const ListagemCliente = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }

  const clientes = ListagemClientesApi();

  return (
    <div className='fundo-listagem-cli'>
      <Header clicarBotao={clicarBotao}/>
      <div className='conteudo-pagina-listagem-cli'>
        <MenuLateral botaoClicado={botaoClicado}/>
        
        <div className='conteudo-listagem-cli'>

            <Topo
            nomeModulo={'Clientes'}
            descricaoModulo={'Cadastre, altere e exclua clientes'}
            caminhoModulo={'/clientes'}
            />

            <TabelaListagem camposTabela={CamposListagemCliente} dadosTabela={clientes} nomeCampoId={'codigo'} modulo={'cliente'}/>

        </div>
      </div>
    </div>
  )
}

export default ListagemCliente
