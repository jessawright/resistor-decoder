import React from "react"
import ReactDOM from "react-dom"

class BandNumberButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button

        >
        {this.props.bandNumber} bands
      </button>);
  }

}

export default BandNumberButton
