import React, { useEffect, useState } from 'react';
import { 
  CardBase, 
  PaginationTable 
} from '../../components';

import '../../assets/styles/pages/_list-character.scss';
import SearchBase from '../../components/base/SearchBase';

import { actions } from '../../store/ducks/character';
import { connect } from 'react-redux';

const ListCharacter = (props) => {
  const { 
    getAllCharacter, 
    characters, 
    characters: { total, isLoaded } 
  } = props;

  let [results, setResults] = useState([]);
	let [page, setPage] = useState(1);

  useEffect(() => {
    getAllCharacter(page)

  }, [getAllCharacter, page])


  const filter = (name) => {
    const filtered = characters.results.filter(v => {
      return v.name.toLowerCase().search(name.toLowerCase()) !== -1; 
    });
    setResults(filtered);
  }

  return (
    <main className="list">
      <div className="list__description">
        <p className="list__description-title">
          Busca de personagens
        </p>
      </div>
      
      {/* Campo de Pesquisa */}
			<SearchBase filter={filter} />

      {/* Listagem de Personagem */}
      {(() => {
        return (isLoaded) ? (
          (results.length > 0 ? results : characters.results).map((v, i) => {
            return (
              <CardBase character={v} />
            )
          })
        ) : ('...carregando')
      })()}

      {/* Pagination */}
      <div className="list__footer">
        <PaginationTable page={page} setPage={setPage} total={total} />
      </div>
    </main>
  )
}

export default connect(
  ({ characters }) => ({ characters }),
  actions
)(ListCharacter);