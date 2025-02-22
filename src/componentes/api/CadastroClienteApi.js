import React, { useEffect, useState } from 'react';
import Api from '../../Api';

function CadastroClienteApi({ dadosCliente }) {
  const [cliente, setCliente] = useState(dadosCliente);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dadosCliente && Object.keys(dadosCliente).length > 0) {
      setLoading(true);
      Api
        .post("/cliente/salvar", JSON.stringify(dadosCliente), {
          headers: {
            'Content-Type': 'application/json', // Definindo o Content-Type
          }
        })
        .then((response) => {
          console.log("Cliente recebido da API:", response.data); // Verificando os dados
          setCliente(response.data);
        })
        .catch((err) => {
          console.error("Erro ao cadastrar cliente." + err);
          setError("Ocorreu um erro ao cadastrar o cliente. Tente novamente mais tarde.");
        })
        .finally(() => setLoading(false));
    }
  }, [dadosCliente]);

  if (error) {
    return <div className='erro-cadastro-cli'>{error}</div>;
  }

  if (cliente && Object.keys(cliente).length > 0) {
    return (
      <div className='cliente-cadastrado'>
        <h3>Cliente <strong>{cliente.nome}</strong> cadastrado com sucesso!</h3>
      </div>
    );
  }
}


export default CadastroClienteApi;