import React from "react"
import ReactDOM from "react-dom"
import BandNumberMenu from './band-number-menu.jsx';
require('../assets/stylesheets/base.scss');

let bandNumbers = [4, 5, 6];

ReactDOM.render(
  <BandNumberMenu />,
    document.getElementById('root')
);
