import React, { Fragment } from 'react'
import './topo.css'

const Topo = ({nomeModulo, descricaoModulo}) => {
  return (
    <Fragment>
        <div className='dados-modulo-topo'>
            <h3 className='nome-modulo'>{nomeModulo}</h3>
            <p className='descricao-modulo'>{descricaoModulo}</p>
        </div>
    </Fragment>
  )
}

export default Topo
