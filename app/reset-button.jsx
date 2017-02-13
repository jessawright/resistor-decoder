import React from "react";
import ReactDOM from "react-dom";


class ResetButton extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (<button type='button' onClick={this.props.onReset}>RESET</button>);
  }
}

export default ResetButton
