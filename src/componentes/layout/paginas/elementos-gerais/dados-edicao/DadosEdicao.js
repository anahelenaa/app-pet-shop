import React, { Fragment } from 'react'
import './dados-edicao.css'

const DadosEdicao = ({camposEdicao, dadosObjeto}) => {
  return (
    <Fragment>
      <form>
        {
            camposEdicao.map((campo, index) => {
                return (
                  <div className={'conjunto-dados-edicao dados-edicao-' + campo.classe}>
                  <p><b>{campo.nome}:</b></p> 
                  <input name={campo.nomeAtributo} value={dadosObjeto[campo.nomeAtributo]}/>
                  </div>         
                )
            })
        } 

        <button className={'botao-edicao'}>Enviar</button>
      </form> 
    </Fragment>
  )
}

export default DadosEdicao
