import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Paper, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { toggleDisplay } from '../../../redux/actions/favoriteCountryAction';
import { setCurrentSort, setSortData } from '../../../redux/actions/sortAction';

import type { RootState } from '../../../redux/store';
import type { ColumnsTbHead, ColumnItem, CategorySort } from '../../../types';
import { debounce } from '../../../utility';

type TbHeadProps = {
  columns: ColumnsTbHead;
  onSearch: (countryName: string) => void;
  sort: () => void;
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

function TbHead({ columns, onSearch, sort }: TbHeadProps) {
  const currentSort = useSelector((state: RootState) => state.sort.currentSort);
  const sortData = useSelector((state: RootState) => state.sort.sortData);
  const dispatch = useDispatch();

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>): void {
    if (!onSearch) return;
    const valueUserType = evt.target.value;
    debounce(() => {
      onSearch(valueUserType);
      dispatch(toggleDisplay(false));
    }, 200)();
  }

  function handleSortClick(column: CategorySort): void {
    dispatch(setCurrentSort(column));
    if (sortData === 'asc') {
      dispatch(setSortData('dsc'));
      sort();
    } else {
      dispatch(setSortData('asc'));
      sort();
    }
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
            {column.label === 'Flag' || column.label === 'Favorite' ? (
              column.label
            ) : (
              <div>
                <IconButton
                  color={column.id === currentSort ? 'error' : 'info'}
                  onClick={() => handleSortClick(column.id as CategorySort)}
                >
                  {sortData === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                </IconButton>
                {column.label}
              </div>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default TbHead;
