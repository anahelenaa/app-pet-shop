import React from 'react'

const CamposListagemPet = [
    {
        nome:'Nome',
        nomeAtributo: 'nome'
    },
    {
        nome:'Raça',
        nomeAtributo: 'raca'
    },
    {
        nome:'Porte',
        nomeAtributo: 'porte'
    },
    {
        nome:'Espécie',
        nomeAtributo: 'especie'
    },
    {
        nome:'Dono',
        nomeAtributo:'cliente',
        nomeAtributoSecundario:'nome'

    },
    {
        nome:'Excluir',
        nomeAtributo: 'excluir'
    },
    {
        nome:'Editar',
        nomeAtributo: 'editar',
        linkEdicao: '/pets/editar/'
    },
]

export default CamposListagemPet
