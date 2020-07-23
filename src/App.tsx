import React from "react";
import "./App.css";
import Layout from "./components/MasterLayout";
import theme from "./theme";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
