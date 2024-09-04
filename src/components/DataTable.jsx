import React, { useContext, useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { FormContext } from '../context/FormContext';

const DataTable = () => {
    const { formData } = useContext(FormContext);

    const columns = useMemo(
        () => [
            { Header: 'First Name', accessor: 'firstName' },
            { Header: 'Last Name', accessor: 'lastName' },
            { Header: 'Date of Birth', accessor: 'dateOfBirth' },
            { Header: 'Start Date', accessor: 'startDate' },
            { Header: 'Street', accessor: 'street' },
            { Header: 'City', accessor: 'city' },
            { Header: 'State', accessor: 'state' },
            { Header: 'Zipcode', accessor: 'zip' },
            { Header: 'Department', accessor: 'department' }
        ],
        []
    );

    const data = useMemo(() => formData, [formData]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        state,
        setGlobalFilter,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 5 }
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { globalFilter, pageIndex, pageSize } = state;

    return (
        <div className="datatable-container">
            <div className="datatable-top">
                <div className="input__container input__container--black">
                    <select
                            value={pageSize}
                            onChange={e => {
                                setPageSize(Number(e.target.value));
                            }}
                            className="table-select"
                        >
                        {[5, 10, 20].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="input__container input__container--black">
                    <input
                        type="text"
                        value={globalFilter || ''}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        name="search"
                    />
                    <label htmlFor="search">Search</label>
                </div>
            </div>
            
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup, index) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                            {headerGroup.headers.map((column, index) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} key={index}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, index) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={index}>
                                {row.cells.map((cell, index) => (
                                    <td {...cell.getCellProps()} key={index}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div>
                <span style={{ marginRight: '16px' }}>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>
                <span style={{  marginLeft: '16px' }}>
                    | Go to page:{' '}
                    <div className="input__container input__container--black" style={{ display: 'inline' }}>
                        <input
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
                                gotoPage(pageNumber);
                            }}
                            style={{ width: '50px', marginLeft: '8px' }}
                        />
                    </div>
                </span>{' '}
            </div>
        </div>
    );
};

export default DataTable;
