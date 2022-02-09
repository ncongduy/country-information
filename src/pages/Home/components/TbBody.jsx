import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';

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

function TbBody({ rows, columns, page, rowsPerPage }) {
  const renderValue = useCallback((col, value) => {
    if (col.id === 'flag') {
      return <img src={value} alt={`Flag of nation`} width="50" />;
    } else if (col.format && typeof value === 'number') {
      return col.format(value);
    } else if (col.id === 'name') {
      return <Link to={`/${value}`}>{value}</Link>;
    } else {
      return value;
    }
  }, []);

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
