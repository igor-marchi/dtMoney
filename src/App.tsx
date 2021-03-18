import { Fragment } from "react";
import { Dashboard } from "./compenents/Dashboard";
import { Header } from "./compenents/Header";
import { GlobalStyle } from "./styles/Global";

export function App() {
  return (
    <Fragment>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </Fragment>
  );
}
