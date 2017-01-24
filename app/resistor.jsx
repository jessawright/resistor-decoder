import React from "react";
import ReactDOM from "react-dom";
import Isvg from 'react-inlinesvg';

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

    return <div data-hidden-bands={bandsToHide}>
      <Isvg src="/assets/resistor.svg" uniquifyIDs={false} data-hidden-bands={bandsToHide}></Isvg>
    </div>

  }

}

export default Resistor
