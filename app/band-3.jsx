import React from "react";
import ReactDOM from "react-dom";

class Band3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<path id="band3" className={this.props.bandColor  + " resistor-band"} onClick={this.props.onBandClick}  d="m309.05 11.853v146.27c9.2862-0.002 19.413-0.0123 29.908-0.0215v-146.24c-10.495-0.005-20.622-0.01-29.908-0.008z"/>);
  }

}

export default Band3
