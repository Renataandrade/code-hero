import React from 'react';

import '../../assets/styles/components/_carosel.scss';
import PhotoPNG from '../../assets/images/photo.png';

const Carosel = () => {
    return (
        <div className="carosel">
            <img className="carosel__image" src={PhotoPNG} />

            <p className="carosel__title"># Nome</p>
        </div>
    )
}

export default Carosel;