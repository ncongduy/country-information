import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

import { addFavorite, removeFavorite } from '../../../redux/actions/favoriteCountryAction';
import type { RootState } from '../../../redux/store';
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
  const dispatch = useDispatch();
  const favoriteCountryList = useSelector((state: RootState) => state.favorite.favorite);

  const handleClick = useCallback(
    (row: RowTbBody) => {
      const checkCountry = favoriteCountryList.some((country) => country.name === row.name);
      if (checkCountry) {
        dispatch(removeFavorite(row));
      } else {
        dispatch(addFavorite(row));
      }
    },
    [dispatch, favoriteCountryList]
  );

  const renderValue = useCallback(
    (row: RowTbBody, col: ColumnItem, value: string | number) => {
      switch (col.id) {
        case 'flag':
          return (
            <Link to={`/${row.name}`}>
              <img src={value as string} alt={`Flag of nation`} width="80rem" />
            </Link>
          );

        case 'name':
          return (
            <Link
              to={`/${value}`}
              style={theme.palette.mode === 'dark' ? styles.linkDark : styles.linkLight}
            >
              <b>{value}</b>
            </Link>
          );

        case 'population':
          const formatNumber = col.format as (value: number) => string;
          return formatNumber(value as number);

        case 'favorite':
          return (
            <IconButton onClick={() => handleClick(row)}>
              {favoriteCountryList.map((country) => country.name).includes(row.name) ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          );

        default:
          return value;
      }
    },
    [theme.palette.mode, handleClick, favoriteCountryList]
  );

  return (
    <TableBody>
      {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: RowTbBody) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
            {columns.map((column: ColumnItem) => {
              const keyObj: string = column.id;
              const value: string | number = row[keyObj];
              return (
                <TableCell key={keyObj} align={column.align}>
                  {renderValue(row, column, value)}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
}

export default TbBody;
