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
    var units = this.props.resistorDecoderInfo.units

    function displayValues() {
      switch (id) {
        case 'digit-box':
        boxContent = (decodedResistor.digits.join('') * decodedResistor['multiplier']) + ' ' + units['multiplier'];
        break;
        case 'tolerance-box':
        boxContent = decodedResistor['tolerance'] + ' ' + units['tolerance'];
        break;
        case 'tempCoefficient-box':
        boxContent = decodedResistor['tempCoefficient'] + ' ' + units['tempCoefficient'];
        break;
      }
    };

    if (!this.props.activeBandColors.includes('blank')) {
      displayValues();
    };

    return (
      <li className='calc-box' id={id}>{boxContent}</li>
  )
  }
}

export default CalcBox
