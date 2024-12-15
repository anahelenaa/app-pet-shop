import React, { Fragment } from 'react'
import './cadastro.css'
import ImagemPata from '../../imagens/pata-verde-agua.png'

const Cadastro = () => {
  return (
    <Fragment>
        <div className='fundo-cadastro'>
            <div className='conteudo-cadastro'>
                <img src={ImagemPata} className='imagem-pata'/>
                <h1 className='nome-pagina-cadastro'>PetShop</h1>

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
