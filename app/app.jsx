import React from "react"
import ReactDOM from "react-dom"
import Decoder from './decoder.jsx';
require('../assets/stylesheets/base.scss');

const bandNumberOptions = ['4', '5', '6'];
const resistorDecoderArray= [];

ReactDOM.render(
  <Decoder bandNumberOptions={bandNumberOptions}/>, document.getElementById('root'))
