import React from 'react';

import '../../assets/styles/components/_pagination-table.scss';

const PaginationTable = () => {
	return (
		<div className="pagination">
			<a className="pagination__number pagination__number--active">1</a>
			<a className="pagination__number">2</a>
			<a className="pagination__number">3</a>

			<a className="pagination__number">></a>
			<a className="pagination__number">>></a>
		</div>
	)
}

export default PaginationTable;