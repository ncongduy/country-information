import React from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableCell, TableRow } from '@mui/material';

TbBody.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
};

TbBody.defaultProps = {
  rows: [],
  columns: [],
  page: 0,
  rowsPerPage: 10,
};

function renderValue(columns, value) {
  if (columns.id === 'flag') {
    return <img src={value} alt={`Flag of nation`} width="50" />;
  } else if (columns.format && typeof value === 'number') {
    return columns.format(value);
  } else {
    return value;
  }
}

function TbBody({ rows, columns, page, rowsPerPage }) {
  return (
    <TableBody>
      {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
        return (
          <TableRow key={row.name}>
            {columns.map((column) => {
              const value = row[column.id];
              return <TableCell key={column.id}>{renderValue(column, value)}</TableCell>;
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
}

export default TbBody;
