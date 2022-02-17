import { useDispatch } from 'react-redux';
import { Paper, TableCell, TableHead, TableRow, TextField } from '@mui/material';

import { toggleDisplay } from '../../../redux/actions/favoriteCountryAction';
import type { ColumnsTbHead, ColumnItem } from '../../../types';

type TbHeadProps = {
  columns: ColumnsTbHead;
  onSearch: (countryName: string) => void;
};

const styles = {
  countries: {
    fontSize: '2rem',
    fontWeight: 700,
  },

  paper: {
    maxWidth: '50%',
    margin: '0 auto',
  },

  menu: {
    backgroundColor: '#203663',
    color: '#fff',
    top: '5.5rem',
  },
};

function TbHead({ columns, onSearch }: TbHeadProps) {
  const dispatch = useDispatch();

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>): void {
    if (!onSearch) return;
    onSearch(evt.target.value);
    dispatch(toggleDisplay(false));
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell sx={styles.countries} align="center" colSpan={6}>
          <Paper sx={styles.paper} elevation={3}>
            <TextField
              onChange={handleChange}
              fullWidth
              label="Enter country name here"
              id="fullWidth"
            />
          </Paper>
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
