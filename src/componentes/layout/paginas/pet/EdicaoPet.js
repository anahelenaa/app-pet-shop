import {React,  Fragment, useState } from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-edicao/Topo';
import DadosEdicao from '../elementos-gerais/dados-edicao/DadosEdicao';
import CamposEdicaoPet from './CamposEdicaoPet';
import DadosTesteEdicaoPet from './DadosTesteEdicaoPet';
import DetalhePetApi from '../../../api/DetalhePetApi';
import './edicao-pet.css';

const EdicaoPet = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }

  const pet = DetalhePetApi();

  return (
    <Fragment>
          <div className='fundo-edicao-pet'>
            <Header clicarBotao={clicarBotao}/>
            <div className='conteudo-pagina-edicao-pet'>
              <MenuLateral botaoClicado={botaoClicado}/>
              
              <div className='conteudo-edicao-pet'>
                <Topo nomeObjetoModulo={'Pet'} descricaoModulo={'Visualize e edite os dados do pet'}/>

                <div className='dados-pet'>
                  <DadosEdicao camposEdicao={CamposEdicaoPet} dadosObjeto={pet} modulo={'pet'}/>
                </div>

              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default EdicaoPet
