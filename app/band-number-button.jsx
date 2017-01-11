import React from "react"
import ReactDOM from "react-dom"

class BandNumberButton extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      isSelected: false
    }
  }
  render() {
    return (
      <button isSelected={this.state.isSelected}>
        {this.props.bandNumber} bands
      </button>);
  }

}

export default BandNumberButton
