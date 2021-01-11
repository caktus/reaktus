import React from 'react';
import GlobalStyles from './styles/globalStyles'
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/defaultTheme";

function Wrapper({ children}) {
  return( 
    <>
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </>
  )
}

export default Wrapper;
