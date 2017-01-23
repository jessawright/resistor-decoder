import React from "react"
import ReactDOM from "react-dom"


class Resistor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var bandsToHide;
    if (this.props.selectedBandNumber == '4') {
      bandsToHide = 'band-4 band-5';
    } else if (this.props.selectedBandNumber == '5') {
      bandsToHide = 'band-5';
    } else {
      bandsToHide = '';
    };

    console.log(bandsToHide);

    var svgSrc = "xlink:href=\"/assets/resistor.svg\"";

    return <svg>
      <use {svgSrc}></use>
    </svg>

    /*<object type="image/svg+xml" data="/assets/resistor.svg" className="resistor" data-hidden-bands={bandsToHide}></object>*/

  }

}

export default Resistor
