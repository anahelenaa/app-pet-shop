import React from 'react'
import * as FaIcon from 'react-icons/fa';

const ItensMenuLateralDados = [
    {
        page:'Clientes',
        icon: <FaIcon.FaUsers/>,
        path:'/clientes',
    },
    {
        page:'Funcionarios',
        icon: <FaIcon.FaPeopleCarry/>,
        path:'/funcionarios',
    },
    {
        page:'Fornecedores',
        icon: <FaIcon.FaTruck/>,
        path:'/fornecedores',
    },
    {
        page:'Produtos',
        icon: <FaIcon.FaBone/>,
        path:'/produtos',
    },
    {
        page:'Pedidos',
        icon: <FaIcon.FaReceipt/>,
        path:'/pedidos',
    },
]

export default ItensMenuLateralDados
