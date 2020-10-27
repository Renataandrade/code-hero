import React, { useEffect } from 'react';

import { actions } from '../../store/ducks/character';
import { connect } from 'react-redux';

import '../../assets/styles/pages/_detail-character.scss';
import PhotoPNG from '../../assets/images/photo.png';
import { Carosel } from '../../components';

const DetailCharacter = (props) => {
  const { 
    characters: { details },
    characters: { details: { thumbnail } },
    getCharacterById,
    match: { params } 
  } = props;
  console.log(params.id)

  useEffect(() => {
    getCharacterById(params.id)

  }, [getCharacterById, params])

	return (
		<main>
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
        <Carosel />
        <Carosel />
        <Carosel />
        <Carosel />
        <Carosel />
      </div>
		</main>
	)
}

export default connect(
  ({ characters }) => ({ characters }),
  actions
)(DetailCharacter);