import {React, useState} from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import './listagem-banho.css'
import Topo from '../elementos-gerais/topo-listagem/Topo';
import CamposListagemBanho from './CamposListagemBanho';
import TabelaListagem from '../elementos-gerais/tabela-listagem/TabelaListagem';
import DadosTesteListBanho from './DadosTesteListBanho';
 
const ListagemBanho = () => {
    const [botaoClicado, setBotaoClicado ] = useState(true);

    const clicarBotao = () => {
        setBotaoClicado(!botaoClicado);
    }
  return (
    <div className='fundo-listagem-banho'>
      <Header clicarBotao={clicarBotao}/>
      <div className='conteudo-pagina-listagem-banho'>
        <MenuLateral botaoClicado={botaoClicado}/>
        
        <div className='conteudo-listagem-banho'>

            <Topo 
             nomeModulo={'Banho e tosa'}
             descricaoModulo={'Cadastre, altere e exclua Banho e tosa'}
             />

            <TabelaListagem camposTabela={CamposListagemBanho} dadosTabela={DadosTesteListBanho}/>

        </div>
      </div>
    </div>
  )
}

export default ListagemBanho
