import { createMuiTheme } from "@material-ui/core/styles";

import purple from "@material-ui/core/colors/purple";

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});
