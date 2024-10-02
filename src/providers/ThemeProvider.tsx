import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider
} from "@mui/material";
import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "dark"
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
