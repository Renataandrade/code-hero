import React from 'react';

import PhotoPNG from '../../assets/images/photo.png';

const CardBase = () => {
  return (
    <div className="card">
      <div className="card__column-character">
        <img
          src={PhotoPNG}
          alt="name"
          className="card__image"
        />
        <h3 className="card__title">Abner Jenkins</h3>
      </div>

      <div className="card__column-serie">
        <p>Abner Jenkins</p>
        <p>Abner Jenkins</p>
        <p>Abner Jenkins</p>
      </div>

      <div className="card__column-event">
        <p>Abner Jenkins</p>
        <p>Abner Jenkins</p>
        <p>Abner Jenkins</p>
      </div>
  </div>
  )
}

export default CardBase;