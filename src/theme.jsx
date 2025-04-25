import { createTheme } from "@mui/material/styles";

/*
Theme Colors
Aqua Blue/Cyan: #4ac3af
Bright Red: #df264e
Soft Orange: #f3c855
Moderate Orange: #d1894b
Very Dark Orange [Brown Tone]: #6b311b
Lime Green: #5cb87e
Soft Red: #f66277
*/

const theme = createTheme({
  typography: {
    fontFamily: '"Fira Sans Extra Condensed", -apple-system, BlinkMacSystemFont, '
              + '"Segoe UI", Roboto, sans-serif',
  },
});

export default theme;