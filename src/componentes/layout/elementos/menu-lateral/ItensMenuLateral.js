import {React,  Fragment } from 'react'
import { Link } from 'react-router-dom'

const ItensMenuLateral = ({item}) => {
  return (
    <Fragment>
        <Link to={ item.path || '#'} className='menu-lateral-item'>
        { item.icon && <i>{item.icon}</i>}
        { item.page }
        </Link>
    </Fragment>
  )
}

export default ItensMenuLateral
