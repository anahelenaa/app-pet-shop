import {React, useState} from 'react'
import Header from '../../elementos/header/Header.js';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral.js';
import './listagem-pedido.css'
import Topo from '../elementos-gerais/topo-listagem/Topo.js';
import CamposListagemPedido from './CamposListagemPedido.js';
import TabelaListagem from '../elementos-gerais/tabela-listagem/TabelaListagem.js';
import DadosTesteListPedido from './DadosTesteListPedido.js';

const ListagemPedido = () => {
    const [botaoClicado, setBotaoClicado ] = useState(true);

    const clicarBotao = () => {
        setBotaoClicado(!botaoClicado);
    }
  return (
    <div className='fundo-listagem-pedido'>
      <Header clicarBotao={clicarBotao}/>
      <div className='conteudo-pagina-listagem-pedido'>
        <MenuLateral botaoClicado={botaoClicado}/>
        
        <div className='conteudo-listagem-pedido'>

            <Topo 
             nomeModulo={'Pedidos'}
             descricaoModulo={'Cadastre, altere e exclua pedidos'}
             caminhoModulo={'/pedidos'}
             />

            <TabelaListagem camposTabela={CamposListagemPedido} dadosTabela={DadosTesteListPedido} nomeCampoId={'idPedido'}/>

        </div>
      </div>
    </div>
  )
}


export default ListagemPedido
