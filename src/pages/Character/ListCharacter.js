import React from 'react';
import { CardBase } from '../../components';

import '../../assets/styles/pages/_list-character.scss';
import SearchBase from '../../components/base/SearchBase';

const ListCharacter = () => {
  return (
    <main className="list">
      <p className="list__title">
        Busca de personagens
			</p>
      
      {/* Campo de Pesquisa */}
      <p 
        className="list__subtitle"
      >
        Nome do personagem
      </p>
			<SearchBase />

      {/* Listagem de Personagem */}
      <CardBase />
      <CardBase />
    </main>
  )
}

export default ListCharacter;