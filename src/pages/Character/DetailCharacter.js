import React, { useEffect } from 'react';

import { actions } from '../../store/ducks/character';
import { connect } from 'react-redux';

import '../../assets/styles/pages/_detail-character.scss';
import { Carosel } from '../../components';

const DetailCharacter = (props) => {
  const { 
    characters: { details, comics },
    characters: { details: { thumbnail } },
    getCharacterById,
    getComicsByCharacter,
    match: { params } 
  } = props;

  useEffect(() => {
    getCharacterById(params.id)
    getComicsByCharacter(params.id)

  }, [getCharacterById, getComicsByCharacter, params])

	return (
		<main>
      <div className="content-centered">
        <div className="detail">

          <div className="detail__header">
            <img 
              className="detail__header-photo" 
              alt="Character" 
              src={`${thumbnail.path}.${thumbnail.extension}`} 
            />

            <h3 className="detail__header-title">
              {details.name}
            </h3>
          </div>

          <div className="detail__body">
            <p className="detail__description">
              {details.description}
            </p>
          </div>
        </div>

        <h4 className="detail__title">Comics</h4>
        <div className="detail__carosel">
          {(() => {
            return (comics.length > 0) ? (
              comics.map(v => {
                return (
                  (v.images) ? (
                    <div className="carosel">
                        <img 
                            className="carosel__image" 
                            alt={v.title} 
                            src={`${v.images.path}.${v.images.extension}`} 
                        />

                      <p className="carosel__title">{v.title}</p>
                    </div>
                  ) : ('')
                )
              })
            ) : ('...carregando')
          })()}
        </div>
      </div>
		</main>
	)
}

export default connect(
  ({ characters }) => ({ characters }),
  actions
)(DetailCharacter);