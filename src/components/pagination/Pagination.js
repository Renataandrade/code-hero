import React, { useEffect, useState } from 'react';

const Pagination = ({ total, page, setPage }) => {
	let [columns, setColumns] = useState([1, 2, 3, 4, 5]);

	let totalPages = parseInt(total / 10);

	useEffect(() => {
		setColumns([page - 3, page - 2, page - 1, page]);
		if (page <= 5) {
			 setColumns([1, 2, 3, 4]);
		}
	}, [page])

	return (
		<div className="pagination">

			{/* Botões com ações para página anterior */}
			{(() => {
				if(page > 1) {
					return(<>
						<button 
							type="button" 
							className="pagination__number"
							onClick={() => {
								setPage(1)
							}}
						>{`<<`}</button>
						<button 
							type="button" 
							className="pagination__number"
							onClick={() => {
								setPage(page-1)
							}}
						>{`<`}</button>
					</>)
				}
			})()}


			{/* Número de páginas visiveis */}
			{(() => {
				return columns.map(pageNumber => {
					return (
						<button
							type="button" 
							key={pageNumber} 
							className={`pagination__number ${pageNumber === page && 'pagination__number--active'}`}
							onClick={() => {
								setPage(pageNumber)
							}}
						>
							{pageNumber}
						</button>
					)
				});
			})()}

			{/* Botões com ações para próxima página */}
			{(() => {
				if(page < totalPages) {
					return(<>
						<button 
							type="button" 
							className="pagination__number"
							onClick={() => {
								setPage(page+1)
							}}
						>
							>
						</button>
						<button 
							type="button" 
							className="pagination__number"
							onClick={() => {
								setPage(totalPages)
							}}
						>>></button>
					</>)
				}
			})()}
		</div>
	)
}

export default Pagination;