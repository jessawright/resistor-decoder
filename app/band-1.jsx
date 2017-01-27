import React from "react";
import ReactDOM from "react-dom";
import BandColorMenu from './band-color-menu.jsx'

class Band1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <path id="band-1" className={this.props.bandColor} d="m74.05 0.049894v170h29.9v-170h-29.9z"/>
    );
  }
}

export default Band1
