import {React, useState} from 'react'
import Header from '../../elementos/header/Header.js';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral.js';
import './listagem-funcionario.css'
import Topo from '../elementos-gerais/topo-listagem/Topo.js';
import CamposListagemFuncionario from './CamposListagemFuncionario.js';
import TabelaListagem from '../elementos-gerais/tabela-listagem/TabelaListagem.js';
import DadosTesteListFunc from './DadosTesteListFunc.js';

const ListagemFuncionario = () => {
    const [botaoClicado, setBotaoClicado ] = useState(true);

    const clicarBotao = () => {
        setBotaoClicado(!botaoClicado);
    }
  return (
    <div className='fundo-listagem-func'>
      <Header clicarBotao={clicarBotao}/>
      <div className='conteudo-pagina-listagem-func'>
        <MenuLateral botaoClicado={botaoClicado}/>
        
        <div className='conteudo-listagem-func'>

            <Topo 
             nomeModulo={'Funcionários'}
             descricaoModulo={'Cadastre, altere e exclua funcionários'}
             caminhoModulo={'/funcionarios'}
             />

            <TabelaListagem camposTabela={CamposListagemFuncionario} dadosTabela={DadosTesteListFunc} nomeCampoId={'idFuncionario'} modulo={'funcionario'}/>

        </div>
      </div>
    </div>
  )
}

export default ListagemFuncionario
