import React, { Fragment } from 'react'
import './conteudo-dashboard.css'

const ConteudoDashboard = ({menuAberto}) => {
  return (
    <Fragment>
        <div className={menuAberto ? 'conteudo-dashboard menu-aberto' : 'conteudo-dashboard'}>

        </div>
    </Fragment>
  )
}

export default ConteudoDashboard
