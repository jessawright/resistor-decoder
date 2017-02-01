import React from "react"
import ReactDOM from "react-dom"

class BandNumberButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label>
        <input type="radio" value={this.props.bandNumber} onChange={this.props.onChange} checked={this.props.checked}/> {this.props.bandNumber + " "}
        bands
      </label>
    );
  }

}

export default BandNumberButton
