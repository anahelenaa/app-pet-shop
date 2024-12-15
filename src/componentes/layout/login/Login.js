import React, { Fragment } from 'react'
import './login.css'

const Login = () => {
  return (
    <Fragment>
       <div className='fundo'>
            <div className='conteudo'>
                <h1 className='nome-pagina'>PetShop</h1>

                <div className='dados-login'>
                <input placeholder='E-mail'></input>
                <input placeholder='Senha'></input>
                </div>

                <div className='botoes-login'>
                <button>Entrar</button>
                <p>Não tem conta? <a href='#'>Cadastre-se</a></p>
                
                </div>
            </div>
        </div> 
    </Fragment>
  
  )
}

export default Login
