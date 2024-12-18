import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from '../componentes/layout/login/Login';
import Cadastro from '../componentes/layout/cadastro-funcionario/Cadastro';
import Dashboard from '../componentes/layout/dashboard/Dashboard';
import ListagemCliente from '../componentes/layout/paginas/cliente/ListagemCliente';
import ListagemFuncionario from '../componentes/layout/paginas/funcionario/ListagemFuncionario';
import EdicaoCliente from '../componentes/layout/paginas/cliente/EdicaoCliente';
import ListagemPet from '../componentes/layout/paginas/pet/ListagemPet';
import ListagemProduto from '../componentes/layout/paginas/produto/ListagemProduto';
import ListagemFornecedor from '../componentes/layout/paginas/fornecedor/ListagemFornecedor';
import ListagemPedido from '../componentes/layout/paginas/pedido/ListagemPedido';
import ListagemBanho from '../componentes/layout/paginas/banho-e-tosa/ListagemBanho';


const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route element = {<Login/>}               path="/" exact />
           <Route element = {<Login/>}               path="/login" exact />
           <Route element = {<Cadastro/>}            path="/cadastro" exact />
           <Route element = {<Dashboard/>}           path="/dashboard" exact />
           <Route element = {<ListagemCliente/>}     path="/clientes" exact />
           <Route element = {<ListagemFuncionario/>} path="/funcionarios" exact />
           <Route element = {<EdicaoCliente/>}       path="/clientes/editar/idCliente" exact />
           <Route element = {<ListagemPet/>}         path= "/pets" exact />
           <Route element = {<ListagemProduto/>}         path= "/produtos" exact />
           <Route element = {<ListagemFornecedor/>}         path= "/fornecedores" exact />
           <Route element = {<ListagemPedido/>}         path= "/pedidos" exact />
           <Route element = {<ListagemBanho/>}         path= "/banho-e-tosa" exact />
        </Routes>
        
    </BrowserRouter>
  )
}

export default Rotas
