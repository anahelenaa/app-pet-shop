import { useState } from 'react';
import Api from '../../Api'; 

function ExclusaoPetApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const excluir = (idPet) => {
    setLoading(true);
    setError(null);

    Api.delete(`/pet/excluir/${idPet}`)
      .then(() => {
        setLoading(false);
        window.location.href = '/pets' ;
      })
      .catch((err) => {
        setLoading(false);
        setError('Ocorreu um erro ao excluir o pet. Tente novamente.');
        console.error('Erro ao excluir o pet:', err);
      });
  };

  return { excluir, loading, error };
}

export default ExclusaoPetApi;
