import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableHead, TableRow } from '@mui/material';

TbHead.propTypes = {
  columns: PropTypes.array,
};

TbHead.defaultProps = {
  columns: [],
};

function TbHead({ columns }) {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.id} style={{ top: 57, minWidth: column.minWidth }}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default TbHead;
