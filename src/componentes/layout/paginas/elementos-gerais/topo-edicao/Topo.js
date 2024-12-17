import React, { Fragment } from 'react'
import './topo.css'

const Topo = ({nomeObjetoModulo, descricaoModulo}) => {
  return (
    <Fragment>
        <div className='dados-modulo-topo-edicao'>
            <h3 className='nome-modulo-edicao'>Detalhes do {nomeObjetoModulo}</h3>
            <p className='descricao-modulo-edicao'>{descricaoModulo}</p>
        </div>
    </Fragment>
  )
}

export default Topo