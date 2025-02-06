import React, { Fragment } from 'react'
import './dados-cadastro.css'

const DadosCadastro = ({camposCadastro}) => {
  return (
      <Fragment>
        <form>
          {
              camposCadastro.map((campo, index) => {
                  return (
                    <div className={'conjunto-dados-cadastro dados-cadastro-' + campo.classe}>
                    <p><b>{campo.nome}:</b></p> 
                    <input name={campo.nomeAtributo}/>
                    </div>         
                  )
              })
          } 
  
          <button className={'botao-cadastro'}>Enviar</button>
        </form> 
      </Fragment>
    )
}

export default DadosCadastro
