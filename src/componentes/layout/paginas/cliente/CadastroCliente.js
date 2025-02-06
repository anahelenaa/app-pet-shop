import React, { Fragment, useState } from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-cadastro/Topo';
import DadosCadastro from '../elementos-gerais/dados-cadastro/DadosCadastro';
import CamposEdicaoCliente from './CamposEdicaoCliente';

const CadastroCliente = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }
  return (
    <Fragment>
          <div className='fundo-edicao-cli'>
            <Header clicarBotao={clicarBotao}/>
            <div className='conteudo-pagina-edicao-cli'>
              <MenuLateral botaoClicado={botaoClicado}/>
              
              <div className='conteudo-edicao-cli'>
                <Topo nomeObjetoModulo={'Cliente'}/>

                <div className='dados-cli'>
                  <DadosCadastro camposCadastro={CamposEdicaoCliente}/>
                </div>

              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default CadastroCliente

