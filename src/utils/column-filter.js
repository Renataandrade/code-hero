export const columnFilter = (column) => {
    let columns = column.items.map((v, i) => {
        return i <= 2 && <p key={i}>{v.name}</p>;
    })

    return !columns.length ? 
        <p>No events</p> :
        columns;
};