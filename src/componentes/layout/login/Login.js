import React, { Fragment } from 'react'
import './login.css'
import ImagemPata from '../../imagens/pata-verde-agua.png'
import Cadastro from '../cadastro/Cadastro'

const Login = () => {
  return (
    <Fragment>
       <div className='fundo-login'>
            <div className='conteudo-login'>
                <img src={ImagemPata} className='imagem-pata'/>
                <h1 className='nome-pagina-login'>PetShop</h1>

                <div className='dados-login'>
                <input placeholder='E-mail'></input>
                <input placeholder='Senha' type='password'></input>
                </div>

                <div className='botoes-login'>
                <button>Entrar</button>
                <p>Não tem conta? <a href='/cadastro'>Cadastre-se</a></p>
                
                </div>
            </div>
        </div> 
    </Fragment>
  
  )
}

export default Login
