import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function DetalheFuncionarioApi() {
  const [funcionario, setFuncionario] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idFuncionario } = useParams();

  useEffect(() => {
    if (idFuncionario) {
      setLoading(true);
      Api
        .get(`/funcionario/buscar/${idFuncionario}`)
        .then((response) => {
          console.log("Funcionario recebido da API:", response.data); 
          setFuncionario(response.data);
        })
        .catch((err) => {
          console.error("Erro ao atualizar o funcionario." + err);
          setError("Ocorreu um erro ao atualizar o funcionario. Tente novamente mais tarde.");
        })
        .finally(() => setLoading(false));
    }
  }, []);

  if (loading) {
    return "Carregando dados do funcionario..."
  }

  if (error) {
    return <div className='erro-atualizacao-funcionario'>{error}</div>;
  }

  if (funcionario && Object.keys(funcionario).length > 0) {
    return funcionario;
  }
}

export default DetalheFuncionarioApi;