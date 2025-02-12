import React, { Fragment, useState } from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-cadastro/Topo';
import DadosCadastro from '../elementos-gerais/dados-cadastro/DadosCadastro';
import CamposEdicaoFuncionario from './CamposEdicaoFuncionario';

const CadastroFuncionario = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }
  return (
    <Fragment>
          <div className='fundo-edicao-func'>
            <Header clicarBotao={clicarBotao}/>
            <div className='conteudo-pagina-edicao-func'>
              <MenuLateral botaoClicado={botaoClicado}/>
              
              <div className='conteudo-edicao-func'>
                <Topo nomeObjetoModulo={'Funcionario'}/>

                <div className='dados-func'>
                  <DadosCadastro camposCadastro={CamposEdicaoFuncionario}/>
                </div>

              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default CadastroFuncionario

