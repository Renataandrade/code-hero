import React from 'react';
import { Link } from 'react-router-dom';

import { columnFilter } from '../../utils/column-filter';

const CardBase = ({ character }) => {
  const { series, events, name, thumbnail } = character;
  const { path, extension } = thumbnail;

  return (
    <div className="list__item" >
      <Link to={`/character/${character.id}`}>
        <div className="card">
          <div className="card__column-character">
            <img
              src={`${path}.${extension}`}
              alt="name"
              className="card__image"
            />
            <h3 className="card__title">{name}</h3>
          </div>

          <div className="card__column-serie">
            {columnFilter(series)}
          </div>

          <div className="card__column-event">
            {columnFilter(events)}
          </div>
      </div>
    </Link>
  </div>
  )
}

export default CardBase;