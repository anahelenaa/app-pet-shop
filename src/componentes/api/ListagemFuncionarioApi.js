import React, { useEffect, useState } from 'react';
import Api from '../../Api';

const ListagemFuncionariosApi = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Api.get("/cliente/listar")
      .then((response) => {
        setFuncionarios(response.data)
      })
      .catch((err) => {
        console.error("Nenhum cliente encontrado." + err);
        setError("Ocorreu um erro ao buscar os funcionarios. Tente novamente mais tarde.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return []
  }

  if (error) {
    return []
  }

  return funcionarios;
};

export default ListagemClientesApi;