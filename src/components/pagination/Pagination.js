import React, { useEffect, useState } from 'react';

const Pagination = ({ total, page, setPage }) => {
	let [columns, setColumns] = useState([1, 2, 3, 4, 5]);

	let totalPages = parseInt(total / 10);

	useEffect(() => {
		setColumns([page - 2, page - 1, page]);
		if (page <= 5) {
			 setColumns([1, 2, 3]);
		}
	}, [page])

	return (
		<div className="pagination">

			{/* Botões com ações para página anterior */}
			{(() => {
				if(page > 1) {
					return(<>
						<span 
							type="button" 
							className="pagination__number"
							onClick={() => {
								setPage(1)
							}}
						>{`<<`}</span>
						<span 
							type="button" 
							className="pagination__number"
							onClick={() => {
								setPage(page-1)
							}}
						>{`<`}</span>
					</>)
				}
			})()}


			{/* Número de páginas visiveis */}
			{(() => {
				return columns.map(pageNumber => {
					return (
						<span
							type="button" 
							key={pageNumber} 
							className={`pagination__number ${pageNumber === page && 'pagination__number--active'}`}
							onClick={() => {
								setPage(pageNumber)
							}}
						>
							{pageNumber}
						</span>
					)
				});
			})()}

			{/* Botões com ações para próxima página */}
			{(() => {
				if(page < totalPages) {
					return(<>
						<span 
							type="button" 
							className="pagination__number"
							onClick={() => {
								setPage(page+1)
							}}
						>
							{`>`}
						</span>
						<span 
							type="button" 
							className="pagination__number"
							onClick={() => {
								setPage(totalPages)
							}}
						>{`>>`}</span>
					</>)
				}
			})()}
		</div>
	)
}

export default Pagination;