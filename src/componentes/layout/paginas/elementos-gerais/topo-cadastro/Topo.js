import React, { Fragment } from 'react'
import './topo.css'

const Topo = ({nomeObjetoModulo}) => {
  return (
    <Fragment>
        <div className='dados-modulo-topo-cadastro'>
            <h3 className='nome-modulo-cadastro'>Cadastro de {nomeObjetoModulo}</h3>
        </div>
    </Fragment>
  )
}

export default Topo