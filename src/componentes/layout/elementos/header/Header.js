import {React, useState} from 'react';
import './header.css';
import ImagemHeader from '../../../imagens/pata-branca.png';
import * as MdIcons from 'react-icons/md';

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
