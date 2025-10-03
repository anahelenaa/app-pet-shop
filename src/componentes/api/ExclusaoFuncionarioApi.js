import { useState } from 'react';
import Api from '../../Api'; 

function ExclusaoFuncionarioApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const excluir = (idFuncionario) => {
    setLoading(true);
    setError(null);

    Api.delete(`/funcionario/excluir/${idFuncionario}`)
      .then(() => {
        setLoading(false);
        window.location.href = '/funcionarios' ;
      })
      .catch((err) => {
        setLoading(false);
        setError('Ocorreu um erro ao excluir o funcionario. Tente novamente.');
        console.error('Erro ao excluir o funcionario:', err);
      });
  };

  return { excluir, loading, error };
}

export default ExclusaoFuncionarioApi;
