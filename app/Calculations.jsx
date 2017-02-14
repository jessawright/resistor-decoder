import React from 'react';
import ReactDOM from 'react-dom';
import CalcBox from './calc-box.jsx';

class Calculations extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    var activeBands = Object.keys(this.props.resistorDecoderInfo.bandMeanings[this.props.selectedBandNumber]);
    var bandColors = this.props.bandColors;
    var resistorDecoderInfo = this.props.resistorDecoderInfo;
    var selectedBandNumber = this.props.selectedBandNumber;
    var activeBandColors = activeBands.map(function(value) {
      return bandColors[value];
    });
    var decodedResistor = {
      digits: []
    };
    function decode(val) {
      switch (resistorDecoderInfo.bandMeanings[selectedBandNumber][val]) {
        case 'digit':
          decodedResistor.digits.push(resistorDecoderInfo.bandColorCode['digit'][bandColors[val]]);
          break;
        case 'multiplier':
          decodedResistor.multiplier = resistorDecoderInfo.bandColorCode['multiplier'][bandColors[val]];
          break;
        case 'tolerance':
          decodedResistor.tolerance = resistorDecoderInfo.bandColorCode['tolerance'][bandColors[val]];
          break;
        case 'tempCoefficient':
          decodedResistor.tempCoefficient = resistorDecoderInfo.bandColorCode['tempCoefficient'][bandColors[val]];
          break;
      }
    };

    if (!activeBandColors.includes('blank')) {
      activeBands.forEach(decode);
    };



    return (
      <div className="calculations">
        <h2>Resistor Value</h2>
        <ul className='calc-boxes'>
          <CalcBox resistorDecoderInfo={this.props.resistorDecoderInfo} id="digit-box" decodedResistor={decodedResistor} activeBandColors={activeBandColors} calcLabel="Resistance"/>
          <CalcBox resistorDecoderInfo={this.props.resistorDecoderInfo} id="tolerance-box" decodedResistor={decodedResistor} activeBandColors={activeBandColors} calcLabel="Tolerance"/>
          {this.props.selectedBandNumber === '6'
            ? <CalcBox resistorDecoderInfo={this.props.resistorDecoderInfo} id="tempCoefficient-box" decodedResistor={decodedResistor} activeBandColors={activeBandColors} calcLabel="Temperature Coefficient"/>
            : ''}
        </ul>
      </div>

    )
  }
}

export default Calculations
