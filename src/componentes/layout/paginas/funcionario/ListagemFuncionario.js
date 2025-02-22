import {React, useState} from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import './listagem-funcionario.css'
import Topo from '../elementos-gerais/topo-listagem/Topo';
import CamposListagemFuncionario from './CamposListagemFuncionario';
import TabelaListagem from '../elementos-gerais/tabela-listagem/TabelaListagem';
import DadosTesteListFunc from './DadosTesteListFunc';

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
