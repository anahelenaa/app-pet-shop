import { useState } from 'react';
import Api from '../../Api'; 

function ExclusaoClienteApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const excluir = (idCliente) => {
    setLoading(true);
    setError(null);

    Api.delete(`/cliente/excluir/${idCliente}`)
      .then(() => {
        setLoading(false);
        window.location.href = '/clientes' ;
      })
      .catch((err) => {
        setLoading(false);
        setError('Ocorreu um erro ao excluir o cliente. Tente novamente.');
        console.error('Erro ao excluir o cliente:', err);
      });
  };

  return { excluir, loading, error };
}

export default ExclusaoClienteApi;
