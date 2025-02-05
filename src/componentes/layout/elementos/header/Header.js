import {React, useState} from 'react';
import './header.css';
import ImagemHeader from '../../../imagens/pata-branca.png';
import * as MdIcons from 'react-icons/md';
import DadosTesteLogin from './DadosTesteLogin';

const Header = ({clicarBotao}) => {

    const [botaoClicado, setBotaoClicado] = useState(true);

    const clicarBotaoHeader = () => {
       setBotaoClicado(!botaoClicado);
       clicarBotao(botaoClicado);
    }

  return (
    <div className='header'>

        <div className='nome-sistema-header'>
            <img src={ImagemHeader} className='imagem-header'/>
            <h1 className='nome-header'>PetShop</h1>
        </div>

        <div className='dados-login-header'>
            <a className='link-botao-funcionario-logado-header'>
                <button className='botao-funcionario-logado-header'>
                    <i>{<MdIcons.MdPerson/>}</i>
                </button>
            </a>
            <h2>{DadosTesteLogin.nome}</h2>
        </div>

        <div className='botoes-header'>
            <a>
                <button className='botao-menu' onClick={() => clicarBotaoHeader()}>
                    <i>{!botaoClicado ? <MdIcons.MdDehaze size={50}/> : <MdIcons.MdClose size={50}/>}</i>
                </button>
            </a>
        </div>

    </div>
  )
}

export default Header
