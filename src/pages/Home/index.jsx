import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Table, TableContainer, TablePagination } from '@mui/material';

// import useCountries from '../../custom-hooks/useCountries';
import TbHead from './components/TbHead';
import TbBody from './components/TbBody';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { fetchALLCountriesByRedux } from '../../redux/actions';

const styles = {
  paper: {
    width: '100%',
  },

  tableContainer: {
    maxHeight: 'calc(100vh - 4rem)',
    padding: '0 1rem',
  },

  tablePagination: {
    height: '4rem',
  },
};

function HomePage() {
  //  set up local state
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

  //
  // use custom hooks
  //
  // const [countries, isLoading, error] = useCountries();
  // useEffect(() => {
  //   if (countries.length === 0 || typeof countries === 'string') return;
  //   const data = countries.map((country) => ({
  //     flag: country?.flags?.svg || country?.flags?.png,
  //     name: country?.name?.common,
  //     population: country?.population,
  //     region: country?.continents[0],
  //     capital: country?.capital,
  //   }));
  //   setRows(data);
  // }, [countries]);

  //
  // use Redux-Thunk to fetch data countries
  //
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.countries.isLoading);
  const dataCountries = useSelector((state) => state.countries.data);
  const error = useSelector((state) => state.countries.error);

  useEffect(() => {
    if (dataCountries) return;
    dispatch(fetchALLCountriesByRedux());
  }, [dispatch, dataCountries]);

  useEffect(() => {
    if (!dataCountries) return;

    const data = dataCountries.map((country) => ({
      flag: country?.flags?.svg || country?.flags?.png,
      name: country?.name?.common,
      population: country?.population,
      region: country?.continents[0],
      capital: country?.capital,
    }));
    setRows(data);
  }, [dataCountries]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (isLoading === true) {
    return <Loading />;
  } else if (error) {
    return <Error error={error} />;
  }

  return (
    <Paper sx={styles.paper}>
      <TableContainer sx={styles.tableContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TbHead columns={columns} />
          <TbBody columns={columns} rows={rows} page={page} rowsPerPage={rowsPerPage} />
        </Table>
      </TableContainer>
      <TablePagination
        sx={styles.tablePagination}
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

export default HomePage;
