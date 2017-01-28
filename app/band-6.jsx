import React from "react";
import ReactDOM from "react-dom";

class Band6 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <path id="band6" className={this.props.bandColor} onClick={this.props.onBandClick} d="m414.05 0.049892v170h49.898v-170h-49.898z"/>

    );
  }

}

export default Band6
