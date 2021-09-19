import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';


const template = (
  <div>
    <h1>Microfrontend Template</h1>
  </div>
);

ReactDOM.render(
  template,
  document.querySelector(
    '#fromjs'
  )
);
