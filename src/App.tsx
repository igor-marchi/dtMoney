import { Fragment } from "react";
import { Header } from "./compenents/Header";
import { GlobalStyle } from "./styles/Global";

export function App() {
  return (
    <Fragment>
      <Header />
      <GlobalStyle />
    </Fragment>
  );
}
