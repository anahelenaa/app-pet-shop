import React, { useEffect, useState } from 'react';
import Api from '../../Api';

const ListagemClientesApi = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Api.get("/cliente/listar")
      .then((response) => {
        setClientes(response.data)
      })
      .catch((err) => {
        console.error("Nenhum cliente encontrado." + err);
        setError("Ocorreu um erro ao buscar os clientes. Tente novamente mais tarde.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return []
  }

  if (error) {
    return []
  }

  return clientes;
};

export default ListagemClientesApi;