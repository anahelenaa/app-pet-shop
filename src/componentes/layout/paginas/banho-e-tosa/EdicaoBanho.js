import {React,  Fragment, useState } from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-edicao/Topo';
import './edicao-banho.css';
import DadosEdicao from '../elementos-gerais/dados-edicao/DadosEdicao';
import CamposEdicaoBanho from './CamposEdicaoBanho';
import DadosTesteEdicaoBan from './DadosTesteEdicaoBan';

const EdicaoBanho = () => {
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
                <Topo nomeObjetoModulo={'Banho e Tosa'} descricaoModulo={'Visualize e edite os dados do banho e tosa'}/>

                <div className='dados-ban'>
                  <DadosEdicao camposEdicao={CamposEdicaoBanho} dadosObjeto={DadosTesteEdicaoBan} modulo={'ban'}/>
                </div>

              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default EdicaoBanho
