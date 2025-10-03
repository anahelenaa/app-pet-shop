import React, { Fragment } from 'react'
import './cadastro.css'
import ImagemLogo from '../../imagens/logo-removebg-preview.png'

const Cadastro = () => {
  return (
    <Fragment>
        <div className='fundo-cadastro'>
            <div className='conteudo-cadastro'>
                <img src={ImagemLogo} className='imagem-logo'/>
                <h1 className='nome-pagina-cadastro'>Gerenciador de estoque</h1>

                <div className='dados-cadastro'>
                <input placeholder='Nome'></input>
                <input placeholder='Endereco'></input>
                <input placeholder='Telefone'></input>
                <input placeholder='E-mail'></input>
                <input placeholder='Senha' type='password'></input>
                </div>

                <div className='botoes-cadastro'>
                <button>Cadastrar</button>
                <p>Já tem uma conta?  <a href='/login'>Entrar</a></p>
                
                </div>
            </div>
        </div> 
    </Fragment>
  )
}

export default Cadastro
