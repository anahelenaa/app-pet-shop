import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function EdicaoPetApi({ dadosPet }) {
  const [pet, setPet] = useState(dadosPet);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idPet } = useParams();

  useEffect(() => {
    if (dadosPet && Object.keys(dadosPet).length > 0) {
      setLoading(true);
      Api
        .put(`/pet/alterar/${idPet}`, JSON.stringify(dadosPet), {
          headers: {
            'Content-Type': 'application/json', 
          }
        })
        .then((response) => {
          console.log("Pet recebido da API:", response.data); 
          setPet(response.data);
        })
        .catch((err) => {
          console.error("Erro ao atualizar o pet." + err);
          setError("Ocorreu um erro ao atualizar o pet. Tente novamente mais tarde.");
        })
        .finally(() => setLoading(false));
    }
  }, [dadosPet]);

  if (error) {
    return <div className='erro-atualizacao-pet'>{error}</div>;
  }

  if (pet && Object.keys(pet).length > 0) {
    return (
      <div className='pet-atualizado'>
        <h3>Pet <strong>{pet.nome}</strong> atualizado com sucesso!</h3>
      </div>
    );
  }
}

export default EdicaoPetApi;