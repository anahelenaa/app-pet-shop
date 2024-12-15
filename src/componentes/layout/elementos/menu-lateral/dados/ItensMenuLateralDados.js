import React from 'react'
import * as FaIcon from 'react-icons/fa';

const ItensMenuLateralDados = [
    {
        page:'Clientes',
        icon: <FaIcon.FaUsers/>,
        path:'/clientes',
    },
    {
        page:'Pets',
        icon: <FaIcon.FaCat/>,
        path:'/pets',
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
        page:'Vendas',
        icon: <FaIcon.FaReceipt/>,
        path:'/vendas',
    },
    {
        page:'Banho e tosa',
        icon: <FaIcon.FaSoap/>,
        path:'/banho-e-tosa',
    },
]

export default ItensMenuLateralDados
