import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function DetalhePetApi() {
  const [pet, setPet] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idPet } = useParams();

  useEffect(() => {
    if (idPet) {
      setLoading(true);
      Api
        .get(`/pet/buscar/${idPet}`)
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
  }, []);

  if (loading) {
    return "Carregando dados do pet..."
  }

  if (error) {
    return <div className='erro-atualizacao-pet'>{error}</div>;
  }

  if (pet && Object.keys(pet).length > 0) {
    return pet;
  }
}

export default DetalhePetApi;