import React from 'react';
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/defaultTheme";

function Wrapper({ children}) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

export default Wrapper;
