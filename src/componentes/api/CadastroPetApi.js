import React, { useEffect, useState } from 'react';
import Api from '../../Api';

function CadastroPetApi({ dadosPet }) {
  const [pet, setPet] = useState(dadosPet);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
    console.log(dadosPet)
  useEffect(() => {
    if (dadosPet && Object.keys(dadosPet).length > 0) {
      setLoading(true);
      Api
        .post("/pet/salvar", JSON.stringify(dadosPet), {
          headers: {
            'Content-Type': 'application/json', 
          }
        })
        .then((response) => {
          console.log("Pet recebido da API:", response.data); 
          setPet(response.data);
        })
        .catch((err) => {
          console.error("Erro ao cadastrar pet." + err);
          setError("Ocorreu um erro ao cadastrar o pet. Tente novamente mais tarde.");
        })
        .finally(() => setLoading(false));
    }
  }, [dadosPet]);

  if (error) {
    return <div className='erro-cadastro-pet'>{error}</div>;
  }

  if (pet && Object.keys(pet).length > 0) {
    return (
      <div className='pet-cadastrado'>
        <h3>Pet <strong>{pet.nome}</strong> cadastrado com sucesso!</h3>
      </div>
    );
  }
}


export default CadastroPetApi;