import React from 'react';

import '../../assets/styles/components/_card-base.scss';
import PhotoPNG from '../../assets/images/photo.png';

const CardBase = () => {
    return(
        <div className="card">
            <div className="card__wrapper">
                <img 
                    src={PhotoPNG} 
                    alt="name"
                    className="card__image" 
                />

                <h3 className="card__title">
                    Abner Jenkins
                </h3>
            </div>
        </div>
    )
}

export default CardBase;