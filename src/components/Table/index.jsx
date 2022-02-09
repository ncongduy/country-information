import { useEffect, useState } from 'react';
import {
  Alert,
  AlertTitle,
  Paper,
  Stack,
  Table,
  TableContainer,
  TablePagination,
} from '@mui/material';

import useCountries from '../../custom-hooks/useCountries';
import TbHead from '../TableHead';
import TbBody from '../TableBody';

function TableFeature() {
  const countries = useCountries();
  const [columns] = useState(() => [
    { id: 'flag', label: 'Flag', minWidth: 160 },
    { id: 'name', label: 'Name', minWidth: 160 },
    { id: 'capital', label: 'Capital', minWidth: 160 },
    { id: 'region', label: 'Region', minWidth: 160 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 160,
      format: (value) => value.toLocaleString('en-US'),
    },
  ]);
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    if (countries.length === 0 || typeof countries === 'string') return;

    const data = countries.map((country) => ({
      flag: country?.flags?.svg || country?.flags?.png,
      name: country?.name?.common,
      population: country?.population,
      region: country?.continents[0],
      capital: country?.capital,
    }));

    setRows(data);
  }, [countries]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (typeof countries === 'string') {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>{countries}</AlertTitle>
        </Alert>
      </Stack>
    );
  }

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: '90vh' }}>
        <Table>
          <TbHead columns={columns} />
          <TbBody columns={columns} rows={rows} page={page} rowsPerPage={rowsPerPage} />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default TableFeature;
