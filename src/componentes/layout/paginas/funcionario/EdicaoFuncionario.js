import React, { Fragment, useState } from 'react'
import CamposEdicaoFuncionario from './CamposEdicaoFuncionario';
import DadosTesteEdicaoFunc from './DadosTesteEdicaoFunc';
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-edicao/Topo';
import DadosEdicao from '../elementos-gerais/dados-edicao/DadosEdicao';
import './edicao-funcionario.css'


const EdicaoFuncionario = () => {
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
          <Topo nomeObjetoModulo={'Funcionário'} descricaoModulo={'Visualize e edite os dados do funcionário'}/>

          <div className='dados-func'>
            <DadosEdicao camposEdicao={CamposEdicaoFuncionario} dadosObjeto={DadosTesteEdicaoFunc} modulo={'func'}/>
          </div>

        </div>
      </div>
    </div>
</Fragment>
  )
}

export default EdicaoFuncionario
