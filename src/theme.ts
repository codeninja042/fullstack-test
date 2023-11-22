// theme.js

import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "8px",
        },
      },
    },
  },
});

export default theme;
