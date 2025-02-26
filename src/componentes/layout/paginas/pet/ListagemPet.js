import {React, useState} from 'react'
import Header from '../../elementos/header/Header.js';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral.js';
import './listagem-pet.css'
import Topo from '../elementos-gerais/topo-listagem/Topo.js';
import CamposListagemPet from './CamposListagemPet.js';
import TabelaListagem from '../elementos-gerais/tabela-listagem/TabelaListagem.js';
import ListagemPetsApi from '../../../api/ListagemPetsApi.js';

const ListagemPet = () => {
    const [botaoClicado, setBotaoClicado ] = useState(true);

    const clicarBotao = () => {
        setBotaoClicado(!botaoClicado);
    }

    const pets = ListagemPetsApi();
  return (
    <div className='fundo-listagem-pet'>
      <Header clicarBotao={clicarBotao}/>
      <div className='conteudo-pagina-listagem-pet'>
        <MenuLateral botaoClicado={botaoClicado}/>
        
        <div className='conteudo-listagem-pet'>

            <Topo 
             nomeModulo={'Pets'}
             descricaoModulo={'Cadastre, altere e exclua pets'}
             caminhoModulo={'/pets'}
             />

            <TabelaListagem camposTabela={CamposListagemPet} dadosTabela={pets} nomeCampoId={'codigo'} modulo={'pet'}/>

        </div>
      </div>
    </div>
  )
}


export default ListagemPet
