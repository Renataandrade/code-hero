import React from 'react';

import '../../assets/styles/pages/_detail-character.scss';
import PhotoPNG from '../../assets/images/photo.png';
import { Carosel } from '../../components';

const DetailCharacter = () => {
	return (
		<main>
      <div className="detail">

        <div className="detail__header">
          <img className="detail__header-photo" src={PhotoPNG} />

          <h3 className="detail__header-title">
            Name
          </h3>
        </div>

        <div className="detail__body">
          <p className="detail__description">
            Rick Jones has been Hulk's best bud since day one, 
            but now he's more than a friend...he's a teammate! 
            Transformed by a Gamma energy explosion, A-Bomb's thick, 
            armored skin is just as strong and powerful as it is blue. 
            And when he curls into action, 
            he uses it like a giant bowling ball of destruction!
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

export default DetailCharacter;