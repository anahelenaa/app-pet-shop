import React, { Fragment } from 'react'
import './menu-lateral.css'
import ItensMenuLateral from './ItensMenuLateral'
import dadosItens from './dados/ItensMenuLateralDados';

const MenuLateral = ({botaoClicado}) => {
  return (
    <Fragment>
        <div className={botaoClicado ? 'fundo-menu' : 'fundo-menu inativo'}>
            {
              dadosItens.map((item, index)=>{
                return(
                  <ItensMenuLateral
                     index={index}
                     item={item}
                  />
                )
              })
           } 
        </div>
    </Fragment>
  )
}

export default MenuLateral
