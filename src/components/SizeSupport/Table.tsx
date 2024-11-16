import React from 'react';

type TableProps = {
    headers: string[];
    rows: (string | number)[][];
};

const Table: React.FC<TableProps> = ({ headers, rows }) => {
    return (
        <table className="min-w-full border-collapse border border-gray-300 mb-6">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th
                            key={index}
                            className="border border-gray-300 bg-gray-100 p-2 text-left font-semibold"
                        >
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td
                                key={cellIndex}
                                className="border border-gray-300 p-2 text-center"
                            >
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
