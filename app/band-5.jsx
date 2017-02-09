import React from "react";
import ReactDOM from "react-dom";

class Band5 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <path id="band5" visibility={this.props.visibility} className={this.props.bandColor + " resistor-band"} onClick={this.props.onBandClick}  d="m334.05 12.001v146.02c8.9272-0.0166 27.098-0.0432 29.9-0.0488v-145.93c-2.8024-0.004-20.973-0.0225-29.9-0.0352z"/>

    );
  }

}

export default Band5
