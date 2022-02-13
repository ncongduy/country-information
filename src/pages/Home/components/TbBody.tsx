import { useCallback } from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';

import type { RowTbBody, RowListTbBody, ColumnItem, ColumnsTbHead } from '../../../types';

type TbBodyProps = {
  rows: RowListTbBody;
  columns: ColumnsTbHead;
  page: number;
  rowsPerPage: number;
};

function TbBody({ rows, columns, page, rowsPerPage }: TbBodyProps) {
  const renderValue = useCallback((col, value) => {
    if (col.id === 'flag') {
      return <img src={value} alt={`Flag of nation`} width="50" />;
    } else if (col.format && typeof value === 'number') {
      return col.format(value);
    } else if (col.id === 'name') {
      return (
        <Link to={`/${value}`} style={{ textDecoration: 'none', color: 'blue' }}>
          {value}
        </Link>
      );
    } else {
      return value;
    }
  }, []);

  return (
    <TableBody>
      {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: RowTbBody) => {
        return (
          <TableRow key={row.name}>
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
