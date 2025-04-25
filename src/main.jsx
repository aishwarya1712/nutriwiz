import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import "@fontsource/fira-sans-extra-condensed/300.css";
import "@fontsource/fira-sans-extra-condensed/400.css";
import "@fontsource/fira-sans-extra-condensed/500.css";
import "@fontsource/fira-sans-extra-condensed/700.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <App />
    </ThemeProvider>
  </StrictMode>,
)
