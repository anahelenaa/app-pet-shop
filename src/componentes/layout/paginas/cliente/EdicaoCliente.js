import {React,  Fragment, useState } from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-edicao/Topo';
import './edicao-cliente.css';
import DadosEdicao from '../elementos-gerais/dados-edicao/DadosEdicao';
import CamposEdicaoCliente from './CamposEdicaoCliente';
import DetalheClienteApi from '../../../api/DetalheClienteApi';

const EdicaoCliente = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }

  const cliente = DetalheClienteApi();

  return (
    <Fragment>
          <div className='fundo-edicao-cli'>
            <Header clicarBotao={clicarBotao}/>
            <div className='conteudo-pagina-edicao-cli'>
              <MenuLateral botaoClicado={botaoClicado}/>
              
              <div className='conteudo-edicao-cli'>
                <Topo nomeObjetoModulo={'Cliente'} descricaoModulo={'Visualize e edite os dados do cliente'}/>

                <div className='dados-cli'>
                  <DadosEdicao camposEdicao={CamposEdicaoCliente} dadosObjeto={cliente} modulo={'cli'}/>
                </div>

              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default EdicaoCliente
