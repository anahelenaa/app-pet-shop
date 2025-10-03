import React, { useEffect, useState } from 'react';
import Api from '../../Api';

function CadastroFuncionarioApi({ dadosFuncionario }) {
  const [funcionario, setFuncionario] = useState(dadosFuncionario);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dadosFuncionario && Object.keys(dadosFuncionario).length > 0) {
      setLoading(true);
      Api
        .post("/funcionario/salvar", JSON.stringify(dadosFuncionario), {
          headers: {
            'Content-Type': 'application/json', // Definindo o Content-Type
          }
        })
        .then((response) => {
          console.log("Funcionario recebido da API:", response.data); // Verificando os dados
          setFuncionario(response.data);
        })
        .catch((err) => {
          console.error("Erro ao cadastrar funcionario." + err);
          setError("Ocorreu um erro ao cadastrar o funcionario. Tente novamente mais tarde.");
        })
        .finally(() => setLoading(false));
    }
  }, [dadosFuncionario]);

  if (error) {
    return <div className='erro-cadastro-cli'>{error}</div>;
  }

  if (funcionario && Object.keys(funcionario).length > 0) {
    return (
      <div className='funcionario-cadastrado'>
        <h3>Funcionario <strong>{funcionario.nome}</strong> cadastrado com sucesso!</h3>
      </div>
    );
  }
}


export default CadastroFuncionarioApi;