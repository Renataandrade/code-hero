import React from 'react';
import { 
  CardBase, 
  PaginationTable 
} from '../../components';

import '../../assets/styles/pages/_list-character.scss';
import SearchBase from '../../components/base/SearchBase';
import { Link } from 'react-router-dom';

const ListCharacter = () => {
  return (
    <main className="list">
      <div className="list__description">
        <p className="list__description-title">
          Busca de personagens
        </p>
      </div>
      
      {/* Campo de Pesquisa */}
			<SearchBase />

      {/* Listagem de Personagem */}
      <Link to="/character/1">
        <div className="list__item">
            <CardBase />
        </div>
      </Link>
      <Link to="/character/1">
        <div className="list__item">
            <CardBase />
        </div>
      </Link>

      <div className="list__footer">
        <PaginationTable />
      </div>
    </main>
  )
}

export default ListCharacter;