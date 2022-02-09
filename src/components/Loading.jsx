import React from 'react';
import { Alert, AlertTitle, CircularProgress, Stack } from '@mui/material';

function Loading(props) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="info">
        <AlertTitle>Loading...</AlertTitle>
        <CircularProgress />
      </Alert>
    </Stack>
  );
}

export default Loading;
