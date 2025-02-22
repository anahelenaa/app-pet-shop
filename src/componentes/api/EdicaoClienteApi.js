import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function EdicaoClienteApi({ dadosCliente }) {
  const [cliente, setCliente] = useState(dadosCliente);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idCliente } = useParams();

  useEffect(() => {
    if (dadosCliente && Object.keys(dadosCliente).length > 0) {
      setLoading(true);
      Api
        .put(`/cliente/alterar/${idCliente}`, JSON.stringify(dadosCliente), {
          headers: {
            'Content-Type': 'application/json', 
          }
        })
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
  }, [dadosCliente]);

  if (error) {
    return <div className='erro-atualizacao-cliente'>{error}</div>;
  }

  if (cliente && Object.keys(cliente).length > 0) {
    return (
      <div className='cliente-atualizado'>
        <h3>Cliente <strong>{cliente.nome}</strong> atualizado com sucesso!</h3>
      </div>
    );
  }
}

export default EdicaoClienteApi;