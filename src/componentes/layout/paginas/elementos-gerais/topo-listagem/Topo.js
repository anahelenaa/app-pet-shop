import React, { Fragment } from 'react'
import './topo.css'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Topo = ({nomeModulo, descricaoModulo, caminhoModulo}) => {
  return (
    <Fragment>
        <div className='dados-modulo-topo'>
            <h3 className='nome-modulo'>{nomeModulo}</h3>
            <p className='descricao-modulo'>{descricaoModulo}</p>
            <Link to={caminhoModulo + '/cadastro'}>
              <i className='botao-adicionar-topo'>
                <FaIcons.FaPlus/>
                <p>Adicionar</p>
              </i>
            </Link>
              
        </div>
    </Fragment>
  )
}

export default Topo
