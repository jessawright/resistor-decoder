import React from 'react';
import ReactDOM from 'react-dom';

class CalcBox extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    var boxContent = '';
    var decodedResistor = this.props.decodedResistor;
    var id = this.props.id;
    var units = this.props.resistorDecoderInfo.units;
    var display = this.props.display;


    function displayValues() {
      switch (id) {
        case 'digit-box':
          if ((decodedResistor.digits.join('') * decodedResistor['multiplier']) >= 1000000) {
            boxContent = ((decodedResistor.digits.join('') * decodedResistor['multiplier']) / 1000000) + 'M' + units['multiplier'];
          } else if ((decodedResistor.digits.join('') * decodedResistor['multiplier']) >= 1000) {
            boxContent = ((decodedResistor.digits.join('') * decodedResistor['multiplier']) / 1000) + 'K' + units['multiplier'];
          } else {
            boxContent = (decodedResistor.digits.join('') * decodedResistor['multiplier']) + units['multiplier'];
          };
          break;
        case 'tolerance-box':
          boxContent = decodedResistor['tolerance'] + units['tolerance'];
          break;
        case 'tempCoefficient-box':
        if (display === 'calc-box-active') {
          boxContent = (decodedResistor['tempCoefficient']  + units['tempCoefficient']);
        } else {
          boxContent = '---';
        }
          break;
      }
    };

    if (!this.props.activeBandColors.includes('blank')) {
      displayValues();
    };

    return (
      <li className='calc-list-entry'>
        <h3 className="calc-label">{this.props.calcLabel}</h3>
        <p className={this.props.display + ' calc-box'} id={id}>{boxContent}</p>
      </li>
    )
  }
}

export default CalcBox
