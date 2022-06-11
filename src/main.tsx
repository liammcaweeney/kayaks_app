import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { light } from './Theme/themes'

const GlobalStyle = createGlobalStyle`
  body * {
    font-family: "Lucida Console", "Courier New", monospace;
  }
  body {
    margin: 0;
    height: 100%;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
