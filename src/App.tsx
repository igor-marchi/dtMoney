import { Fragment } from "react";
import { Deshboard } from "./compenents/Deshboard";
import { Header } from "./compenents/Header";
import { GlobalStyle } from "./styles/Global";

export function App() {
  return (
    <Fragment>
      <Header />
      <Deshboard />
      <GlobalStyle />
    </Fragment>
  );
}
