import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Transfers from "./containers/Transfers/Transfers"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Transfers />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;