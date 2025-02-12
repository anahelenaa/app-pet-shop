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
import EdicaoFuncionario from '../componentes/layout/paginas/funcionario/EdicaoFuncionario';
import CadastroCliente from '../componentes/layout/paginas/cliente/CadastroCliente';
import CadastroBanho from '../componentes/layout/paginas/banho-e-tosa/CadastroBanho';
import EdicaoBanho from '../componentes/layout/paginas/banho-e-tosa/EdicaoBanho';
import CadastroPet from '../componentes/layout/paginas/pet/CadastroPet';
import EdicaoPet from '../componentes/layout/paginas/pet/EdicaoPet';
import CadastroFuncionario from '../componentes/layout/paginas/funcionario/CadastroFuncionario';


const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route element = {<Login/>}               path="/" exact />
           <Route element = {<Login/>}               path="/login" exact />
           <Route element = {<Cadastro/>}            path="/cadastro" exact />
           <Route element = {<Dashboard/>}           path="/dashboard" exact />
           <Route element = {<ListagemCliente/>}     path="/clientes" exact />
           <Route element = {<CadastroCliente/>}     path="/clientes/cadastro" exact />
           <Route element = {<ListagemFuncionario/>} path="/funcionarios" exact />
           <Route element = {<EdicaoCliente/>}       path="/clientes/editar/idCliente" exact />
           <Route element = {<EdicaoFuncionario/>}   path="/funcionarios/editar/idFuncionario" exact />
           <Route element = {<ListagemPet/>}         path= "/pets" exact />
           <Route element = {<ListagemProduto/>}     path= "/produtos" exact />
           <Route element = {<ListagemFornecedor/>}  path= "/fornecedores" exact />
           <Route element = {<ListagemPedido/>}      path= "/pedidos" exact />
           <Route element = {<ListagemBanho/>}       path= "/banho-e-tosa" exact />
           <Route element = {<CadastroBanho/>}     path="/banho-e-tosa/cadastro" exact />
           <Route element = {<EdicaoBanho/>}     path="/banho-e-tosa/editar/idBanho" exact />
           <Route element = {<CadastroPet/>}         path= "/pets/cadastro" exact />
           <Route element = {<EdicaoPet/>}         path= "/pets/editar/idPet" exact />
           <Route element = {<CadastroFuncionario/>}   path="/funcionarios/cadastro" exact />
        </Routes>
        
    </BrowserRouter>
  )
}

export default Rotas
