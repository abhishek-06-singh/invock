import React, { Fragment } from "react";
import Api from "./components/Api";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Api />
    </Fragment>
  );
};

export default App;
