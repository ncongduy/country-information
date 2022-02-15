import { useCallback } from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import type { RowTbBody, RowListTbBody, ColumnItem, ColumnsTbHead } from '../../../types';

type TbBodyProps = {
  rows: RowListTbBody;
  columns: ColumnsTbHead;
  page: number;
  rowsPerPage: number;
};

const styles = {
  linkLight: {
    textDecoration: 'none',
    color: '#01579b',
  },

  linkDark: {
    textDecoration: 'none',
    color: '#ff9800',
  },
};

function TbBody({ rows, columns, page, rowsPerPage }: TbBodyProps) {
  const theme = useTheme();

  const renderValue = useCallback(
    (col, value) => {
      if (col.id === 'flag') {
        return <img src={value} alt={`Flag of nation`} width="80rem" />;
      } else if (col.format && typeof value === 'number') {
        return col.format(value);
      } else if (col.id === 'name') {
        return (
          <Link
            to={`/${value}`}
            style={theme.palette.mode === 'dark' ? styles.linkDark : styles.linkLight}
          >
            {value}
          </Link>
        );
      } else {
        return value;
      }
    },
    [theme.palette.mode]
  );

  return (
    <TableBody>
      {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: RowTbBody) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
            {columns.map((column: ColumnItem) => {
              const keyObj: string = column.id;
              const value: string | number = row[keyObj];
              return <TableCell key={keyObj}>{renderValue(column, value)}</TableCell>;
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
}

export default TbBody;
