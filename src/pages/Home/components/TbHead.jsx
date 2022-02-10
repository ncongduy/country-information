import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableHead, TableRow } from '@mui/material';

TbHead.propTypes = {
  columns: PropTypes.array,
};

TbHead.defaultProps = {
  columns: [],
};

const styles = {
  countries: {
    fontSize: '2rem',
    fontWeight: 700,
  },

  menu: {
    backgroundColor: '#203663',
    color: '#fff',
  },
};

function TbHead({ columns }) {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={styles.countries} align="center" colSpan={5}>
          Countries
        </TableCell>
      </TableRow>

      <TableRow>
        {columns.map((column) => (
          <TableCell
            sx={styles.menu}
            key={column.id}
            style={{ top: 57, minWidth: column.minWidth }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default TbHead;
