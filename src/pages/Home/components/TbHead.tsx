import { TableCell, TableHead, TableRow } from '@mui/material';

import type { ColumnsTbHead, ColumnItem } from '../../../types';

type TbHeadProps = {
  columns: ColumnsTbHead;
};

const styles = {
  countries: {
    fontSize: '2rem',
    fontWeight: 700,
  },

  menu: {
    backgroundColor: '#203663',
    color: '#fff',
    top: '3.56rem',
  },
};

function TbHead({ columns }: TbHeadProps) {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={styles.countries} align="center" colSpan={5}>
          Countries
        </TableCell>
      </TableRow>

      <TableRow>
        {columns.map((column: ColumnItem) => (
          <TableCell sx={styles.menu} key={column.id} style={{ minWidth: column.minWidth }}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default TbHead;
