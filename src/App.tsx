import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/MasterLayout";
import Content from "./components/Content";
import theme from "./theme";
import { Grid, ThemeProvider, Paper, CssBaseline } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
