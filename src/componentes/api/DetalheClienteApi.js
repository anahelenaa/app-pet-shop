import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function DetalheClienteApi() {
  const [cliente, setCliente] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idCliente } = useParams();

  useEffect(() => {
    if (idCliente) {
      setLoading(true);
      Api
        .get(`/cliente/buscar/${idCliente}`)
        .then((response) => {
          console.log("Cliente recebido da API:", response.data); 
          setCliente(response.data);
        })
        .catch((err) => {
          console.error("Erro ao atualizar o cliente." + err);
          setError("Ocorreu um erro ao atualizar o cliente. Tente novamente mais tarde.");
        })
        .finally(() => setLoading(false));
    }
  }, []);

  if (loading) {
    return "Carregando dados do cliente..."
  }

  if (error) {
    return <div className='erro-atualizacao-cliente'>{error}</div>;
  }

  if (cliente && Object.keys(cliente).length > 0) {
    return cliente;
  }
}

export default DetalheClienteApi;