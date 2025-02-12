import React, { Fragment, useState } from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-cadastro/Topo';
import DadosCadastro from '../elementos-gerais/dados-cadastro/DadosCadastro';
import CamposEdicaoBanho from './CamposEdicaoBanho';

const CadastroBanho = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }
  return (
    <Fragment>
          <div className='fundo-edicao-ban'>
            <Header clicarBotao={clicarBotao}/>
            <div className='conteudo-pagina-edicao-ban'>
              <MenuLateral botaoClicado={botaoClicado}/>
              
              <div className='conteudo-edicao-ban'>
                <Topo nomeObjetoModulo={'Banho e Tosa'}/>

                <div className='dados-ban'>
                  <DadosCadastro camposCadastro={CamposEdicaoBanho}/>
                </div>

              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default CadastroBanho

