import React from 'react';
import PropTypes from 'prop-types';

import { Stack, Alert, AlertTitle } from '@mui/material';

Error.propTypes = {
  error: PropTypes.string,
};

Error.defaultProps = {
  error: 'Error',
};

function Error({ error }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>{error}</AlertTitle>
      </Alert>
    </Stack>
  );
}

export default Error;
