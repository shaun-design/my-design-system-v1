import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { spacing } from './spacing';
import { shape } from './shape';
import { shadows } from './shadows';

export const theme = createTheme({
  palette,
  typography,
  spacing,
  shape,
  shadows,
});
