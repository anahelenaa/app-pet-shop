import {React, useState} from 'react'
import Header from '../../elementos/header/Header.js';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral.js';
import './listagem-pet.css'
import Topo from '../elementos-gerais/topo/Topo.js';
import CamposListagemPet from './CamposListagemPet.js';
import TabelaListagem from '../elementos-gerais/tabela-listagem/TabelaListagem.js';
import DadosTesteListPet from './DadosTesteListPet.js';

const ListagemFuncionario = () => {
    const [botaoClicado, setBotaoClicado ] = useState(true);

    const clicarBotao = () => {
        setBotaoClicado(!botaoClicado);
    }
  return (
    <div className='fundo-listagem-pet'>
      <Header clicarBotao={clicarBotao}/>
      <div className='conteudo-pagina-listagem-pet'>
        <MenuLateral botaoClicado={botaoClicado}/>
        
        <div className='conteudo-listagem-pet'>

            <Topo 
             nomeModulo={'Pets'}
             descricaoModulo={'Cadastre, altere e exclua funcionários'}
             />

            <TabelaListagem camposTabela={CamposListagemPet} dadosTabela={DadosTesteListPet}/>

        </div>
      </div>
    </div>
  )
}


export default ListagemFuncionario
