import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function EdicaoFuncionarioApi({ dadosFuncionario }) {
  const [funcionario, setFuncionario] = useState(dadosFuncionario);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idFuncionario } = useParams();

  useEffect(() => {
    if (dadosFuncionario && Object.keys(dadosFuncionario).length > 0) {
      setLoading(true);
      Api
        .put(`/funcionario/alterar/${idFuncionario}`, JSON.stringify(dadosFuncionario), {
          headers: {
            'Content-Type': 'application/json', 
          }
        })
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
  }, [dadosFuncionario]);

  if (error) {
    return <div className='erro-atualizacao-funcionario'>{error}</div>;
  }

  if (funcionario && Object.keys(funcionario).length > 0) {
    return (
      <div className='funcionario-atualizado'>
        <h3>Funcionario <strong>{funcionario.nome}</strong> atualizado com sucesso!</h3>
      </div>
    );
  }
}

export default EdicaoFuncionarioApi;