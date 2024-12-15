import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from '../componentes/layout/login/Login';
import Cadastro from '../componentes/layout/cadastro/Cadastro';
import Dashboard from '../componentes/layout/dashboard/Dashboard';

const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route element = {<Login/>}  path="/" exact />
           <Route element = {<Login/>} path="/login" exact />
           <Route element = {<Cadastro/>}  path="/cadastro" exact />
           <Route element = {<Dashboard/>} path="/dashboard" exact />
        </Routes>
        
    </BrowserRouter>
  )
}

export default Rotas
