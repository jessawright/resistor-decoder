import React from "react";
import ReactDOM from "react-dom";
import BandColorMenu from './band-color-menu.jsx'

class Band1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <g>
        <path id="band-1" className={this.props.bandColor} d="m74.05 0.049894v170h29.9v-170h-29.9z"/>
        <defs>
          <g id="help" x="104" y="40" width="100" height="100">
            <foreignObject >
              <BandColorMenu resistorDecoderInfo={this.props.resistorDecoderInfo} selectedBandNumber={this.props.selectedBandNumber} bandThisIs='band1'/>
            </foreignObject>
          </g>
        </defs>
      </g>

    );
  }
}

export default Band1
