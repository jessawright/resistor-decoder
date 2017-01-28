import React from "react";
import ReactDOM from "react-dom";

class Band4 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<path id="band4" visibility={this.props.visibility} className={this.props.bandColor} onClick={this.props.onBandClick} d="m269.05 11.925v146.2c14.9-0.0198 16.498-0.027 29.9-0.0488v-146.12c-13.402-0.0159-15-0.022-29.9-0.0352z"/>);
  }

}

export default Band4
