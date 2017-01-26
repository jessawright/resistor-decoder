import React from "react";
import ReactDOM from "react-dom";

class Band2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <path id="band-2" className={this.props.bandColor} d="m139.05 9.6007v150.9c3.1672-1.3136 6.9686-2.2885 11.95-2.4512-0.0595 0.0595 7.6124 0.0911 17.95 0.11133v-146.23c-10.338 0.0248-18.01 0.0577-17.95 0.11719-4.9814-0.1627-8.7828-1.1357-11.95-2.4492z"/>
    );
  }

}

export default Band2
