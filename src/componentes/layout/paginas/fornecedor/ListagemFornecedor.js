import {React, useState} from 'react'
import Header from '../../elementos/header/Header.js';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral.js';
import './listagem-fornecedor.css'
import Topo from '../elementos-gerais/topo-listagem/Topo.js';
import CamposListagemFornec from './CamposListagemFornec.js';
import TabelaListagem from '../elementos-gerais/tabela-listagem/TabelaListagem.js';
import DadosTesteListFornec from './DadosTesteListFornec.js';


const ListagemFornecedor = () => {
    const [botaoClicado, setBotaoClicado ] = useState(true);

    const clicarBotao = () => {
        setBotaoClicado(!botaoClicado);
    }
  return (
    <div className='fundo-listagem-fornecedor'>
      <Header clicarBotao={clicarBotao}/>
      <div className='conteudo-pagina-listagem-fornecedor'>
        <MenuLateral botaoClicado={botaoClicado}/>
        
        <div className='conteudo-listagem-fornecedor'>

            <Topo 
             nomeModulo={'Fornecedores'}
             descricaoModulo={'Cadastre, altere e exclua fornecedores'}
             />

            <TabelaListagem camposTabela={CamposListagemFornec} dadosTabela={DadosTesteListFornec}/>

        </div>
      </div>
    </div>
  )
}


export default ListagemFornecedor
