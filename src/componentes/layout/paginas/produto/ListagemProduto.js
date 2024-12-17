import {React, useState} from 'react'
import Header from '../../elementos/header/Header.js';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral.js';
import './listagem-prod.css'
import Topo from '../elementos-gerais/topo/Topo.js';
import CamposListagemProd from './CamposListagemProd.js';
import TabelaListagem from '../elementos-gerais/tabela-listagem/TabelaListagem.js';
import DadosTesteListProd from './DadosTesteListProd.js';

const ListagemProduto = () => {
    const [botaoClicado, setBotaoClicado ] = useState(true);

    const clicarBotao = () => {
        setBotaoClicado(!botaoClicado);
    }
  return (
    <div className='fundo-listagem-prod'>
      <Header clicarBotao={clicarBotao}/>
      <div className='conteudo-pagina-listagem-prod'>
        <MenuLateral botaoClicado={botaoClicado}/>
        
        <div className='conteudo-listagem-prod'>

            <Topo 
             nomeModulo={'Prod'}
             descricaoModulo={'Cadastre, altere e exclua funcionários'}
             />

            <TabelaListagem camposTabela={CamposListagemProd} dadosTabela={DadosTesteListProd}/>

        </div>
      </div>
    </div>
  )
}


export default ListagemProduto
