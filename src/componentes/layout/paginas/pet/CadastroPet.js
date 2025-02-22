import React, { Fragment, useState } from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-cadastro/Topo';
import DadosCadastro from '../elementos-gerais/dados-cadastro/DadosCadastro';
import CamposEdicaoPet from './CamposEdicaoPet';

const CadastroPet = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }
  return (
    <Fragment>
          <div className='fundo-edicao-pet'>
            <Header clicarBotao={clicarBotao}/>
            <div className='conteudo-pagina-edicao-pet'>
              <MenuLateral botaoClicado={botaoClicado}/>
              
              <div className='conteudo-edicao-pet'>
                <Topo nomeObjetoModulo={'Pet'}/>

                <div className='dados-pet'>
                  <DadosCadastro camposCadastro={CamposEdicaoPet} modulo='pet'/>
                </div>

              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default CadastroPet

