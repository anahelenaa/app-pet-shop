import {React,  useState } from 'react'
import Header from '../elementos/header/Header'
import MenuLateral from '../elementos/menu-lateral/MenuLateral';
import ConteudoDashboard from './conteudo/ConteudoDashboard';
import './dashboard.css';

const Dashboard = () => {
    const [botaoClicado, setBotaoClicado ] = useState(true);

    const clicarBotao = () => {
        setBotaoClicado(!botaoClicado);
    }
  return (
    <div className='fundo-dashboard'>
      <Header clicarBotao={clicarBotao}/>
      <div className='conteudo-pagina-dashboard'>
        <MenuLateral botaoClicado={botaoClicado}/>
        <ConteudoDashboard menuAberto={botaoClicado}/>
      </div>
      
    </div>
  )
}

export default Dashboard
