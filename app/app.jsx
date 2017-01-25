import React from "react"
import ReactDOM from "react-dom"
import Decoder from './decoder.jsx';
require('../assets/stylesheets/base.scss');

const resistorDecoderInfo = {
  bandNumberOptions: ['4', '5', '6'],
  bandColorCode: {
    Digit: {
      'black': 0,
      'brown': 1,
      'red': 2,
      'orange': 3,
      'yellow': 4,
      'green': 5,
      'blue': 6,
      'violet': 7,
      'grey': 8,
      'white': 9
    },
    Multiplier: {
      'pink': .001,
      'silver': .01,
      'gold': .1,
      'black': 1,
      'brown': 10,
      'red': 100,
      'orange': 1000,
      'yellow': 10000,
      'green': 100000,
      'blue': 1000000,
      'violet': 10000000
    },
    Tolerance: {
      'none': 20,
      'silver': 10,
      'gold': 5,
      'brown': 1,
      'red': 2,
      'green': .5,
      'blue': .25,
      'violet': .1,
      'grey': .05
    },
    TempCoefficient: {
      'brown': 100,
      'red': 50,
      'orange': 15,
      'yellow': 25
    }
  }
};

ReactDOM.render(
  <Decoder resistorDecoderInfo={resistorDecoderInfo}/>, document.getElementById('root'))
