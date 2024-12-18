import React, { Fragment } from 'react'
import './topo.css'
import * as FaIcons from 'react-icons/fa'

const Topo = ({nomeModulo, descricaoModulo}) => {
  return (
    <Fragment>
        <div className='dados-modulo-topo'>
            <h3 className='nome-modulo'>{nomeModulo}</h3>
            <p className='descricao-modulo'>{descricaoModulo}</p>
            <i className='botao-adicionar-topo'>
              <FaIcons.FaPlus/>
              <p>Adicionar</p>
            </i>
        </div>
    </Fragment>
  )
}

export default Topo
