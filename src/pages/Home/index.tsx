import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Table, TableContainer, TablePagination } from '@mui/material';
import { useParams } from 'react-router-dom';

import TbHead from './components/TbHead';
import TbBody from './components/TbBody';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { fetchALLCountriesByRedux } from '../../redux/actions';
import { ValueContext } from '../../contexts';

import type { RootState } from '../../redux/store';
import type { ColumnsTbHead, Countries, RowListTbBody } from '../../types';
import type { ValueContextType } from '../../types';

const styles = {
  paper: {
    width: '100%',
  },

  tableContainer: {
    maxHeight: 'calc(100vh - 4rem - 4rem)', // 4rem tablePagination, 4rem HeaderApp
    padding: '0 1rem',
  },

  tablePagination: {
    height: '4rem',
  },
};

function HomePage() {
  //  set up local state
  const columns = useMemo<ColumnsTbHead>(
    () => [
      { id: 'flag', label: 'Flag', minWidth: '10rem' },
      { id: 'name', label: 'Name', minWidth: '10rem' },
      { id: 'capital', label: 'Capital', minWidth: '10rem' },
      { id: 'region', label: 'Region', minWidth: '10rem' },
      {
        id: 'population',
        label: 'Population',
        minWidth: '10rem',
        format: (value: number): string => value.toLocaleString('en-US'),
      },
      {
        id: 'favorite',
        label: 'Favorite',
        minWidth: '8rem',
      },
    ],
    []
  );
  const [rows, setRows] = useState<RowListTbBody>([
    {
      flag: '',
      name: '',
      population: 0,
      region: '',
      capital: '',
    },
  ]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // useContext from AppContext
  const { countryName } = useParams();
  const { setNameCountry } = useContext<ValueContextType>(ValueContext);

  // use Redux-Thunk to fetch data countries
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.countries.isLoading);
  const dataCountries = useSelector((state: RootState) => state.countries.data);
  const error = useSelector((state: RootState) => state.countries.error);

  // Redux State: favorite country feature
  const favoriteCountryList = useSelector((state: RootState) => state.favorite.favorite);
  const displayFavoriteCountry = useSelector((state: RootState) => state.favorite.display);

  // Redux State: sort data feature
  const categorySort = useSelector((state: RootState) => state.sort.categorySort);
  const typeSort = useSelector((state: RootState) => state.sort.sortData);

  // data to render UI
  const data = useMemo(() => {
    return dataCountries.map((country: Countries) => ({
      flag: country?.flags?.svg || country?.flags?.png,
      name: country?.name?.common,
      capital: country?.capital,
      region: country?.region,
      population: country?.population,
      favorite: 'normal',
    }));
  }, [dataCountries]);

  // fetch API
  useEffect(() => {
    if (dataCountries.length !== 0) {
      setRows(data);
    } else {
      dispatch(fetchALLCountriesByRedux());
    }
  }, [dispatch, dataCountries, data]);

  // update h1 in AppHeader component => Countries in the world
  useEffect(() => {
    setNameCountry(countryName as undefined);
  }, [setNameCountry, countryName]);

  // function sort data
  const sortData: () => void = useCallback(() => {
    if (typeSort === 'asc') {
      const sortedData = [...data].sort((a, b) => (a[categorySort] > b[categorySort] ? 1 : -1));
      setRows(sortedData);
    } else {
      const sortedData = [...data].sort((a, b) => (a[categorySort] < b[categorySort] ? 1 : -1));
      setRows(sortedData);
    }
  }, [categorySort, data, typeSort]);

  // sort list data
  useEffect(() => {
    if (!data) return;
    sortData();
  }, [data, sortData]);

  // display favorite country
  useEffect(() => {
    if (displayFavoriteCountry) {
      setRows(favoriteCountryList);
    } else {
      setRows(data);
      sortData();
    }
  }, [displayFavoriteCountry, data, favoriteCountryList, sortData]);

  // function handle event
  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchCountry = (countryName: string): void => {
    const newData = data.filter((row) => row.name.toLowerCase().startsWith(countryName.toLowerCase()));
    setRows(newData);
  };

  // render UI when loading or error
  if (isLoading === true) {
    return <Loading />;
  } else if (error) {
    return <Error error={error} />;
  }

  return (
    <Paper sx={styles.paper} elevation={0}>
      <TableContainer sx={styles.tableContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TbHead columns={columns} onSearch={handleSearchCountry} sort={sortData} />
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
