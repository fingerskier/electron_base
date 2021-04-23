import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Interface from "./interface";

function render() {
  const container = document.getElementById('main-app')
  ReactDOM.render(<Interface />, container);
}

render();