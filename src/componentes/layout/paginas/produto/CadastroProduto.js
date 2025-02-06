import React, { Fragment, useState } from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-cadastro/Topo';
import DadosCadastro from '../elementos-gerais/dados-cadastro/DadosCadastro';
import CamposEdicaoProduto from './CamposEdicaoProduto';

const CadastroProduto = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }
  return (
    <Fragment>
          <div className='fundo-edicao-prod'>
            <Header clicarBotao={clicarBotao}/>
            <div className='conteudo-pagina-edicao-prod'>
              <MenuLateral botaoClicado={botaoClicado}/>
              
              <div className='conteudo-edicao-prod'>
                <Topo nomeObjetoModulo={'Produto'}/>

                <div className='dados-prod'>
                  <DadosCadastro camposCadastro={CamposEdicaoProduto}/>
                </div>

              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default CadastroProduto

