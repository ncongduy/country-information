import { Stack, Alert, AlertTitle } from '@mui/material';

type ErrorType = {
  error: string;
};

function Error({ error }: ErrorType) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>{error}</AlertTitle>
      </Alert>
    </Stack>
  );
}

export default Error;
