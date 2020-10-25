import React from 'react';

import LogoPNG from '../../assets/images/logo-objective.png';

const Header = () => {
	return (
		<header className="header">
			<img
				src={LogoPNG}
				alt="Objective"
				className="header__logo"
			/>

			<div className="header__description">
				<div className="header__description--right">
					<p className="header__description-title">
						Nome do candidato
					</p>
					<span>
						Teste de Front-end
					</span>
				</div>

				<span className="header__initials">
					RA
				</span>
			</div>
		</header>
	)
}

export default Header;