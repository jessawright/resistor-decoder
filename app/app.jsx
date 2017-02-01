import React from "react"
import ReactDOM from "react-dom"
import Decoder from './decoder.jsx';
require('../assets/stylesheets/base.scss');

const resistorDecoderInfo = {
  bandNumberOptions: ['4', '5', '6'],
  bandColorCode: {
    'digit': {
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
    'multiplier': {
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
    'tolerance': {
      'silver': 10,
      'gold': 5,
      'brown': 1,
      'red': 2,
      'green': .5,
      'blue': .25,
      'violet': .1,
      'grey': .05
    },
    'tempCoefficient': {
      'brown': 100,
      'red': 50,
      'orange': 15,
      'yellow': 25
    }
  },
  bandMeanings: {
    '4': {
      'band1': 'digit',
      'band2': 'digit',
      'band3': 'multiplier',
      'band6': 'tolerance'
    },
    '5': {
      'band1': 'digit',
      'band2': 'digit',
      'band3': 'digit',
      'band4': 'multiplier',
      'band6': 'tolerance'
    },
    '6': {
      'band1': 'digit',
      'band2': 'digit',
      'band3': 'digit',
      'band4': 'multiplier',
      'band5': 'tolerance',
      'band6': 'tempCoefficient'

    }

  },
  units: {
    'multiplier': '&#8486;', /* html entity for ohm */
    'tolerance': '%',
    'tempCoefficient': 'ppm/degreeC'
  }
};

ReactDOM.render(
  <Decoder resistorDecoderInfo={resistorDecoderInfo}/>, document.getElementById('root'))
